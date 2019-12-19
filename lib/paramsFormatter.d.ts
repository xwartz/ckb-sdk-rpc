/// <reference types="@nervosnetwork/ckb-types" />
/// <reference types="../types/rpc" />
declare const formatter: {
    toOptional: (format?: Function | undefined) => (arg: any) => any;
    toHash: (hash: string) => string;
    toNumber: (number: string | bigint) => string;
    toScript: (script: CKBComponents.Script) => RPC.Script;
    toOutPoint: (outPoint: CKBComponents.OutPoint | null) => RPC.OutPoint | null;
    toInput: (input: CKBComponents.CellInput) => RPC.CellInput;
    toOutput: (output: CKBComponents.CellOutput) => RPC.CellOutput;
    toDepType: (type: CKBComponents.DepType) => "code" | "dep_group";
    toCellDep: (cellDep: CKBComponents.CellDep) => RPC.CellDep;
    toRawTransaction: (transaction: CKBComponents.RawTransaction) => RPC.RawTransaction;
    toPageNumber: (pageNo?: string | bigint) => string;
    toPageSize: (pageSize?: string | bigint) => string;
    toReverseOrder: (reverse?: boolean) => boolean;
};
export default formatter;
