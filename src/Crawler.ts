import { parse as parseUrl } from 'url'
import puppeteer, {BrowserLaunchArgumentOptions} from 'puppeteer'
import chalk from 'chalk'
import { PromiseQueue } from '@egoist/promise-queue'
import { Writer } from './Writer'
import { Logger } from './Logger'
import { Page } from 'puppeteer-core'

export const SPECIAL_EXTENSIONS_RE = /\.(xml|json)$/

const routeToFile = (route: string) => {
  if (/\.html$/.test(route) || SPECIAL_EXTENSIONS_RE.test(route)) {
    return route
  }
  return route.replace(/\/?$/, '/index.html')
}

export type CrawlerOptions = {
  hostname: string
  port: number
  options: {
    routes: string[] | (() => Promise<string[]>)
    onBrowserPage?: (page: Page) => void | Promise<void>
    manually?: string | boolean
    linkFilter?: (url: string) => boolean
    wait?: string | number
    crawlLinks?: boolean
    puppeteerOptions?: BrowserLaunchArgumentOptions
  }
  writer: Writer
  logger: Logger
}

export class Crawler {
  opts: CrawlerOptions

  constructor(opts: CrawlerOptions) {
    this.opts = opts
  }

  async crawl() {
    const { hostname, port, options, writer, logger } = this.opts

    const routes =
      typeof options.routes === 'function'
        ? await options.routes()
        : options.routes
   
       
    const crawlRoute = async (routes: string[]) => {
   
      const queue = new PromiseQueue(
        async (route: string) => {
          const file = routeToFile(route)
          let links: Set<string> | undefined
          const browser = await puppeteer.launch(options.puppeteerOptions ? options.puppeteerOptions : {args: ['--headless', '--no-sandbox']});
          const page = await browser.newPage();
          await page.goto(`http://${hostname}:${port}${route}`, { waitUntil: 'networkidle0', timeout: 0}).catch(e => console.error("NAVIGATE", e))
          if (options.crawlLinks){
            links = new Set(
              await page.evaluate(
                ({ hostname, port }: { hostname: string; port: string }) => {
                  return Array.from(document.querySelectorAll('a'))
                    .filter((a) => {
                      return a.hostname === hostname && a.port === port
                    })
                    .map((a) => a.pathname)
                },
                { hostname, port: String(port) }
              )
            );
            if (links && links.size > 0) {
              const filtered = options.linkFilter
                ? Array.from(links).filter(options.linkFilter)
                : links
  
              for (const link of filtered) {
                queue.add(link)
              }
            }
          }

          page.on('console', (e) => {
            const type = e.type()
            // @ts-ignore
            const log = console[type] || console.log
            const location = e.location()
            log(
              `Message from ${location.url}:${location.lineNumber}:${location.columnNumber}`,
              e.text()
            )
          })


          // @ts-ignore
          const html = await page.evaluate(() => document.querySelector('*').outerHTML);
          logger.log(`Writing ${chalk.cyan(file)} for ${chalk.cyan(route)}`)
          await writer.write({ html, file })
          browser.close();
        },
        { maxConcurrent: 10 }
      )
      for (const route of routes) {
        queue.add(route)
      }
      await queue.run()
    }

    await crawlRoute(routes)
  }
}
