"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Method {
    constructor(node, options) {
        this.options = {
            name: '',
            method: '',
            paramsFormatters: [],
            resultFormatters: undefined,
        };
        this.call = (...params) => {
            const data = params.map((p, i) => (this.options.paramsFormatters[i] && this.options.paramsFormatters[i](p)) || p);
            const id = Math.round(Math.random() * 10000);
            const payload = {
                id,
                method: this.options.method,
                params: data,
                jsonrpc: '2.0',
            };
            return axios_1.default({
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                data: payload,
                url: this.node.url,
                httpAgent: this.node.httpAgent,
                httpsAgent: this.node.httpsAgent,
            }).then(res => {
                if (res.data.id !== id) {
                    throw new Error('JSONRPC id not match');
                }
                if (res.data.error) {
                    throw new Error(JSON.stringify(res.data.error));
                }
                return this.options.resultFormatters ? this.options.resultFormatters(res.data.result) : res.data.result;
            });
        };
        this.node = node;
        this.options = options;
    }
}
exports.default = Method;
//# sourceMappingURL=method.js.map