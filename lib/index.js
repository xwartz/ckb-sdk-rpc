"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const defaultRPC_1 = __importDefault(require("./defaultRPC"));
const method_1 = __importDefault(require("./method"));
const paramsFormatter_1 = __importDefault(require("./paramsFormatter"));
const resultFormatter_1 = __importDefault(require("./resultFormatter"));
class CKBRPC extends defaultRPC_1.default {
    constructor(url) {
        super();
        this.node = {
            url: '',
        };
        this.methods = [];
        this.paramsFormatter = paramsFormatter_1.default;
        this.resultFormatter = resultFormatter_1.default;
        this.addMethod = (options) => {
            const method = new method_1.default(this.node, options);
            this.methods.push(method);
            Object.defineProperty(this, options.name, {
                value: method.call,
                enumerable: true,
            });
        };
        this.setNode({
            url,
        });
        this.defaultMethods.map(this.addMethod);
    }
    setNode(node) {
        Object.assign(this.node, node);
        return this.node;
    }
}
exports.default = CKBRPC;
//# sourceMappingURL=index.js.map