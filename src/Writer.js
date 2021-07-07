"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Writer = void 0;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
class Writer {
    constructor(opts) {
        this.opts = opts;
    }
    write({ file, html }) {
        const { outDir } = this.opts;
        const filepath = path_1.default.join(outDir, file);
        return fs_extra_1.default
            .ensureDir(path_1.default.dirname(filepath))
            .then(() => fs_extra_1.default.writeFile(filepath, html, 'utf8'));
    }
    copyFrom(from) {
        from = path_1.default.resolve(from);
        const outDir = path_1.default.resolve(this.opts.outDir);
        if (from === outDir)
            return Promise.resolve();
        return fs_extra_1.default.copy(from, outDir);
    }
}
exports.Writer = Writer;
