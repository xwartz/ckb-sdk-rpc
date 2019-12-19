/// <reference types="@nervosnetwork/ckb-types" />
declare class Method {
    private options;
    private node;
    constructor(node: CKBComponents.Node, options: CKBComponents.Method);
    call: (...params: (string | number)[]) => Promise<any>;
}
export default Method;
