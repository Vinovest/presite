"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const http_1 = require("http");
const path_1 = require("path");
const fs_extra_1 = __importDefault(require("fs-extra"));
const polka_1 = __importDefault(require("polka"));
const get_port_1 = __importDefault(require("get-port"));
const sirv_1 = __importDefault(require("sirv"));
const Crawler_1 = require("./Crawler");
class Server {
    constructor(opts) {
        this.app = polka_1.default();
        this.hostname = 'localhost';
        this.opts = opts;
        this.app.use(sirv_1.default(this.opts.baseDir, { single: true }));
        this.app.use(async (req, res, next) => {
            if (!Crawler_1.SPECIAL_EXTENSIONS_RE.test(req.path)) {
                return next();
            }
            const file = path_1.join(this.opts.baseDir, req.path + '.js');
            if (await fs_extra_1.default.pathExists(file)) {
                // Remove copied original file in output directory
                // e.g. /feed.xml should remove original feed.xml.js in output directory
                await fs_extra_1.default.remove(path_1.join(this.opts.outDir, req.path + '.js'));
                res.setHeader('content-type', 'text/html');
                res.end(`

      <html>
      <body>
      <script id="__presite_script__" type="module">
      import getContent from "${req.path + '.js'}"
      document.addEventListener('DOMContentLoaded', () => {
        Promise.resolve(getContent()).then(content => {
          window.snapshot({
            content: typeof content === 'string' ? content : JSON.stringify(content)
          });
        })
      })
      </script>
      </body>
      </html>
        `);
                return;
            }
            next();
        });
    }
    async start() {
        const port = await get_port_1.default();
        this.port = port;
        this.server = new http_1.Server(this.app.handler);
        this.server.listen(this.port, this.hostname);
    }
    stop() {
        return this.server && this.server.close();
    }
}
exports.Server = Server;
