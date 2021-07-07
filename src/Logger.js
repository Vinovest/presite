"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    constructor({ verbose } = {}) {
        this.verbose = verbose;
    }
    log(...args) {
        if (!this.verbose)
            return;
        console.log(...args);
    }
}
exports.Logger = Logger;
