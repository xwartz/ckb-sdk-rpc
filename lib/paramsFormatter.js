"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = require("@nervosnetwork/ckb-sdk-utils/lib/exceptions");
const ckb_sdk_utils_1 = require("@nervosnetwork/ckb-sdk-utils");
const formatter = {
    toOptional: (format) => (arg) => {
        if (!format || arg === undefined || arg === null) {
            return arg;
        }
        return format(arg);
    },
    toHash: (hash) => {
        if (typeof hash !== 'string') {
            throw new TypeError(`Hash ${hash} should be type of string`);
        }
        return hash.startsWith('0x') ? hash : `0x${hash}`;
    },
    toNumber: (number) => {
        if (typeof number === 'bigint') {
            return `0x${number.toString(16)}`;
        }
        if (typeof number !== 'string') {
            throw new TypeError(`The number ${number} should be a bigint or a hex string`);
        }
        if (!number.startsWith('0x')) {
            throw new exceptions_1.HexStringShouldStartWith0x(number);
        }
        return number;
    },
    toScript: (script) => {
        const { codeHash, hashType: hash_type } = script, rest = __rest(script, ["codeHash", "hashType"]);
        return Object.assign({ code_hash: formatter.toHash(codeHash), hash_type }, rest);
    },
    toOutPoint: (outPoint) => {
        if (!outPoint)
            return outPoint;
        const { txHash, index } = outPoint, rest = __rest(outPoint, ["txHash", "index"]);
        return Object.assign({ tx_hash: formatter.toHash(txHash), index: formatter.toNumber(index) }, rest);
    },
    toInput: (input) => {
        if (!input)
            return input;
        const { previousOutput, since } = input, rest = __rest(input, ["previousOutput", "since"]);
        return Object.assign({ previous_output: formatter.toOutPoint(previousOutput), since: formatter.toNumber(since) }, rest);
    },
    toOutput: (output) => {
        if (!output)
            return output;
        const { capacity, lock, type = null } = output, rest = __rest(output, ["capacity", "lock", "type"]);
        return Object.assign({ capacity: formatter.toNumber(capacity), lock: formatter.toScript(lock), type: type ? formatter.toScript(type) : type }, rest);
    },
    toDepType: (type) => {
        if (type === 'depGroup') {
            return 'dep_group';
        }
        return type;
    },
    toCellDep: (cellDep) => {
        if (!cellDep)
            return cellDep;
        const { outPoint = null, depType = 'code' } = cellDep, rest = __rest(cellDep, ["outPoint", "depType"]);
        return Object.assign({ out_point: formatter.toOutPoint(outPoint), dep_type: formatter.toDepType(depType) }, rest);
    },
    toRawTransaction: (transaction) => {
        if (!transaction)
            return transaction;
        const { version, cellDeps = [], inputs = [], outputs = [], outputsData: outputs_data = [], headerDeps: header_deps = [] } = transaction, rest = __rest(transaction, ["version", "cellDeps", "inputs", "outputs", "outputsData", "headerDeps"]);
        const formattedInputs = inputs.map(input => formatter.toInput(input));
        const formattedOutputs = outputs.map(output => formatter.toOutput(output));
        const formattedCellDeps = cellDeps.map(cellDep => formatter.toCellDep(cellDep));
        const tx = Object.assign({ version: formatter.toNumber(version), cell_deps: formattedCellDeps, inputs: formattedInputs, outputs: formattedOutputs, outputs_data,
            header_deps }, rest);
        return tx;
    },
    toPageNumber: (pageNo = '0x1') => formatter.toNumber(pageNo),
    toPageSize: (pageSize = '0x32') => {
        const size = ckb_sdk_utils_1.JSBI.BigInt(`${pageSize}`);
        if (ckb_sdk_utils_1.JSBI.greaterThan(size, ckb_sdk_utils_1.JSBI.BigInt(50)))
            throw new Error('Page size is up to 50');
        if (ckb_sdk_utils_1.JSBI.lessThan(size, ckb_sdk_utils_1.JSBI.BigInt(0)))
            throw new Error('Page size is expected to be non-negative');
        return formatter.toNumber(`0x${size.toString(16)}`);
    },
    toReverseOrder: (reverse = false) => !!reverse,
};
exports.default = formatter;
//# sourceMappingURL=paramsFormatter.js.map