/// <reference types="@nervosnetwork/ckb-types" />
export declare class DefaultRPC {
    protected defaultMethods: CKBComponents.Method[];
    getBlockByNumber: (number: CKBComponents.BlockNumber | bigint) => Promise<CKBComponents.Block>;
    getBlock: (hash: CKBComponents.Hash) => Promise<CKBComponents.Block>;
    getTransaction: (hash: CKBComponents.Hash) => Promise<CKBComponents.TransactionWithStatus>;
    getBlockHash: (number: CKBComponents.BlockNumber | bigint) => Promise<CKBComponents.Hash>;
    getTipHeader: () => Promise<CKBComponents.BlockHeader>;
    getCellsByLockHash: (hash: CKBComponents.Hash256, from: CKBComponents.BlockNumber | bigint, to: CKBComponents.BlockNumber | bigint) => Promise<CKBComponents.CellIncludingOutPoint[]>;
    getLiveCell: (outPoint: CKBComponents.OutPoint, withData: boolean) => Promise<{
        cell: CKBComponents.LiveCell;
        status: CKBComponents.CellStatus;
    }>;
    getTipBlockNumber: () => Promise<CKBComponents.BlockNumber>;
    sendTransaction: (tx: CKBComponents.RawTransaction) => Promise<CKBComponents.Hash>;
    getBlockchainInfo: () => Promise<CKBComponents.BlockchainInfo>;
    localNodeInfo: () => Promise<CKBComponents.NodeInfo>;
    txPoolInfo: () => Promise<CKBComponents.TxPoolInfo>;
    getPeers: () => Promise<CKBComponents.NodeInfo[]>;
    getPeersState: () => Promise<CKBComponents.PeersState>;
    getCurrentEpoch: () => Promise<CKBComponents.Epoch>;
    getEpochByNumber: (epoch: string | bigint) => Promise<CKBComponents.Epoch>;
    dryRunTransaction: (tx: CKBComponents.RawTransaction) => Promise<CKBComponents.RunDryResult>;
    deindexLockHash: (lockHash: CKBComponents.Hash256) => Promise<null>;
    getLiveCellsByLockHash: (lockHash: CKBComponents.Hash256, pageNumber: string | bigint, pageSize: string | bigint, reverseOrder?: boolean) => Promise<CKBComponents.LiveCellsByLockHash>;
    getLockHashIndexStates: () => Promise<CKBComponents.LockHashIndexStates>;
    getTransactionsByLockHash: (lockHash: CKBComponents.Hash256, pageNumber: string | bigint, pageSize: string | bigint, reverseOrder?: boolean) => Promise<CKBComponents.TransactionsByLockHash>;
    indexLockHash: (lockHash: CKBComponents.Hash, indexFrom?: CKBComponents.BlockNumber) => Promise<CKBComponents.LockHashIndexState>;
    getBannedAddresses: () => Promise<CKBComponents.BannedAddresses>;
    setBan: (address: string, command: 'insert' | 'delete', banTime: string | null, absolute?: boolean, reason?: string) => Promise<null>;
    getHeader: (blockHash: CKBComponents.Hash) => Promise<CKBComponents.BlockHeader>;
    getHeaderByNumber: (blockNumber: CKBComponents.BlockNumber | bigint) => Promise<CKBComponents.BlockHeader>;
    getCellbaseOutputCapacityDetails: (blockHash: CKBComponents.Hash) => Promise<CKBComponents.CellbaseOutputCapacityDetails>;
    estimateFeeRate: (expectedBlocks: CKBComponents.BlockNumber) => Promise<CKBComponents.FeeRate>;
    calculateDaoMaximumWithdraw: (outPoint: CKBComponents.OutPoint, withdrawBlockHash: CKBComponents.Hash256) => Promise<string>;
}
export default DefaultRPC;
