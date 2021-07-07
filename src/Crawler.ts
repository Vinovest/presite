import { parse as parseUrl } from 'url'
import puppeteer, {BrowserLaunchArgumentOptions} from 'puppeteer'
import chalk from 'chalk'
// import { PromiseQueue } from '@egoist/promise-queue'
import { Writer } from './Writer'
import { Logger } from './Logger'
import { Page } from 'puppeteer-core'
import {Cluster} from "puppeteer-cluster"
import PromiseQueue, { Queue } from 'p-queue';


 


export const SPECIAL_EXTENSIONS_RE = /\.(xml|json)$/

const routeToFile = (route: string) => {
  if (/\.html$/.test(route) || SPECIAL_EXTENSIONS_RE.test(route)) {
    return route
  }
  return route.replace(/\/?$/, '/index.html')
}

class QueueClass {
  _all: {[key: string]: any}
  _queue: Array<[(r: string) => Promise<void>, string]>
	constructor() {
		this._queue = [];
    this._all = {};
	}

	enqueue(run: any, {route}: string) {
    if(!this._all[route]){
      this._queue.push([run, route]);
      this._all[route] = route;
    }
	}

	dequeue() {
   
    if(this.size){
       // @ts-ignore
      const [run, route] = this._queue.shift();
      console.log("RUN", run, route)
      return run
    }
		
	}

	get size() {
		return this._queue.length;
	}

	filter(options: any) {
		return this._queue;
	}
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
    maxConcurrent?: number
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
        // @ts-ignore
        const queue = new PromiseQueue({concurrency: options.maxConcurrent || 2, queueClass: QueueClass})
       
    const crawlRoute = async (routes: string[]) => {

        const singleRoute = async (route: string) => {
          console.log('Rote', route)
          const file = routeToFile(route)
          let links: Set<string> | undefined
   
  
            const browser = await puppeteer.launch(options.puppeteerOptions ? options.puppeteerOptions : {args: ['--headless', '--no-sandbox']});
 
            const page = await browser.newPage();
            await page.goto(`http://${hostname}:${port}${route}`, { waitUntil: 'networkidle0', timeout: 0}).catch(e => console.error("NAVIGATE", e))
            if (options.crawlLinks){
              links = await new Set(
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
    // @ts-ignore
                for (const link of filtered) {
                  (async () => {
                    // @ts-ignore
                    await queue.add(async () => singleRoute(link), {route: link});
                  })();
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
            
            console.log('Done: Unicorn task');
          }
          for (const route of routes) {
            // @ts-ignore
            await queue.add(async() => singleRoute(route), {route});
          
        
      //  queue.start();
      
        }
      
}

    return await crawlRoute(routes)
  }
}
