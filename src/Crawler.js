"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crawler = exports.SPECIAL_EXTENSIONS_RE = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const chalk_1 = __importDefault(require("chalk"));
const p_queue_1 = __importDefault(require("p-queue"));
exports.SPECIAL_EXTENSIONS_RE = /\.(xml|json)$/;
const routeToFile = (route) => {
    if (/\.html$/.test(route) || exports.SPECIAL_EXTENSIONS_RE.test(route)) {
        return route;
    }
    return route.replace(/\/?$/, '/index.html');
};
class QueueClass {
    constructor() {
        this._queue = [];
        this._all = {};
    }
    enqueue(run, route) {
        if (!this._all[route]) {
            this._queue.push([run, route]);
            this._all[route] = route;
        }
    }
    dequeue() {
        // @ts-ignore
        const [run, route] = this._queue.shift();
        console.log("RUN", run, route);
        return () => run(route);
    }
    get size() {
        return this._queue.length;
    }
    filter(options) {
        return this._queue;
    }
}
class Crawler {
    constructor(opts) {
        this.opts = opts;
    }
    async crawl() {
        const { hostname, port, options, writer, logger } = this.opts;
        const routes = typeof options.routes === 'function'
            ? await options.routes()
            : options.routes;
        // @ts-ignore
        const queue = new p_queue_1.default({ concurrency: options.maxConcurrent || 2, queueClass: QueueClass });
        const crawlRoute = async (routes) => {
            const singleRoute = async (route) => {
                console.log('Rote', route);
                const file = routeToFile(route);
                let links;
                const browser = await puppeteer_1.default.launch(options.puppeteerOptions ? options.puppeteerOptions : { args: ['--headless', '--no-sandbox'] });
                const page = await browser.newPage();
                await page.goto(`http://${hostname}:${port}${route}`, { waitUntil: 'networkidle0', timeout: 0 }).catch(e => console.error("NAVIGATE", e));
                if (options.crawlLinks) {
                    links = await new Set(await page.evaluate(({ hostname, port }) => {
                        return Array.from(document.querySelectorAll('a'))
                            .filter((a) => {
                            return a.hostname === hostname && a.port === port;
                        })
                            .map((a) => a.pathname);
                    }, { hostname, port: String(port) }));
                    if (links && links.size > 0) {
                        const filtered = options.linkFilter
                            ? Array.from(links).filter(options.linkFilter)
                            : links;
                        for (const link of filtered) {
                            (async () => {
                                // @ts-ignore
                                await queue.add(singleRoute, link);
                            })();
                        }
                    }
                }
                page.on('console', (e) => {
                    const type = e.type();
                    // @ts-ignore
                    const log = console[type] || console.log;
                    const location = e.location();
                    log(`Message from ${location.url}:${location.lineNumber}:${location.columnNumber}`, e.text());
                });
                // @ts-ignore
                const html = await page.evaluate(() => document.querySelector('*').outerHTML);
                logger.log(`Writing ${chalk_1.default.cyan(file)} for ${chalk_1.default.cyan(route)}`);
                await writer.write({ html, file });
                browser.close();
                console.log('Done: Unicorn task');
            };
            for (const route of routes) {
                // @ts-ignore
                await queue.add(singleRoute, route);
                //  queue.start();
            }
        };
        await crawlRoute(routes);
    }
}
exports.Crawler = Crawler;
