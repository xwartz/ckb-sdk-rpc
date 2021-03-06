/// <reference types="@nervosnetwork/ckb-types" />
/// <reference types="../types/rpc" />
import DefaultRPC from './defaultRPC';
import Method from './method';
declare class CKBRPC extends DefaultRPC {
    node: CKBComponents.Node;
    methods: Method[];
    paramsFormatter: {
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
    resultFormatter: {
        toNumber: (number: string) => string;
        toHash: (hash: string) => string;
        toHeader: (header: RPC.Header) => CKBComponents.BlockHeader;
        toScript: (script: RPC.Script) => CKBComponents.Script;
        toInput: (input: RPC.CellInput) => CKBComponents.CellInput;
        toOutput: (output: RPC.CellOutput) => CKBComponents.CellOutput;
        toOutPoint: (outPoint: RPC.OutPoint | null) => CKBComponents.OutPoint | null;
        toDepType: (type: RPC.DepType) => "code" | "depGroup";
        toCellDep: (cellDep: RPC.CellDep) => CKBComponents.CellDep;
        toTransaction: (tx: RPC.Transaction) => CKBComponents.Transaction;
        toUncleBlock: (uncleBlock: RPC.UncleBlock) => CKBComponents.UncleBlock;
        toBlock: (block: RPC.Block) => CKBComponents.Block;
        toAlertMessage: (alertMessage: RPC.AlertMessage) => CKBComponents.AlertMessage;
        toBlockchainInfo: (info: RPC.BlockchainInfo) => CKBComponents.BlockchainInfo;
        toNodeInfo: (info: RPC.NodeInfo) => CKBComponents.NodeInfo;
        toTxPoolInfo: (info: RPC.TxPoolInfo) => CKBComponents.TxPoolInfo;
        toPeers: (nodes: RPC.NodeInfo[]) => CKBComponents.NodeInfo[];
        toPeersState: (state: RPC.PeersState) => CKBComponents.PeersState;
        toCell: (cell: RPC.CellOutput) => CKBComponents.Cell;
        toLiveCell: (liveCell: RPC.LiveCell) => CKBComponents.LiveCell;
        toLiveCellWithStatus: (cellWithStatus: {
            cell: RPC.LiveCell;
            status: string;
        }) => {
            cell: CKBComponents.LiveCell;
            status: string;
        };
        toCells: (cells: RPC.CellOutput[]) => CKBComponents.Cell[];
        toCellIncludingOutPoint: (cell: RPC.CellIncludingOutPoint) => {
            capacity: string;
            cellbase: boolean;
            blockHash: string;
            lock: CKBComponents.Script;
            outPoint: CKBComponents.OutPoint | null;
            outputDataLen: string;
        };
        toCellsIncludingOutPoint: (cells: RPC.CellIncludingOutPoint[]) => CKBComponents.CellIncludingOutPoint[];
        toTransactionWithStatus: (txWithStatus: RPC.TransactionWithStatus) => {
            transaction: CKBComponents.Transaction;
            txStatus: {
                blockHash: string | null;
                status: RPC.TransactionStatus;
            };
        };
        toEpoch: (epoch: RPC.Epoch) => CKBComponents.Epoch;
        toTransactionPoint: (transactionPoint: RPC.TransactionPoint) => CKBComponents.TransactionPoint;
        toTransactionsByLockHash: (transactions: RPC.TransactionsByLockHash) => CKBComponents.TransactionsByLockHash;
        toLiveCellsByLockHash: (cells: RPC.LiveCellsByLockHash) => CKBComponents.LiveCellsByLockHash;
        toLockHashIndexState: (index: RPC.LockHashIndexState) => CKBComponents.LockHashIndexState;
        toLockHashIndexStates: (states: RPC.LockHashIndexStates) => CKBComponents.LockHashIndexStates;
        toBannedAddress: (bannedAddress: RPC.BannedAddress) => CKBComponents.BannedAddress;
        toBannedAddresses: (bannedAddresses: RPC.BannedAddresses) => CKBComponents.BannedAddresses;
        toCellbaseOutputCapacityDetails: (details: RPC.CellbaseOutputCapacityDetails) => CKBComponents.CellbaseOutputCapacityDetails;
        toFeeRate: (feeRateObj: RPC.FeeRate) => CKBComponents.FeeRate;
    };
    constructor(url: string);
    setNode(node: CKBComponents.Node): CKBComponents.Node;
    addMethod: (options: CKBComponents.Method) => void;
}
export default CKBRPC;
