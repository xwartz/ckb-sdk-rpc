"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paramsFormatter_1 = __importDefault(require("./paramsFormatter"));
const resultFormatter_1 = __importDefault(require("./resultFormatter"));
const defaultRPC = [
    {
        name: 'getBlockByNumber',
        method: 'get_block_by_number',
        paramsFormatters: [paramsFormatter_1.default.toNumber],
        resultFormatters: resultFormatter_1.default.toBlock,
    },
    {
        name: 'getBlock',
        method: 'get_block',
        paramsFormatters: [paramsFormatter_1.default.toHash],
        resultFormatters: resultFormatter_1.default.toBlock,
    },
    {
        name: 'getTransaction',
        method: 'get_transaction',
        paramsFormatters: [paramsFormatter_1.default.toHash, paramsFormatter_1.default.toNumber, paramsFormatter_1.default.toNumber],
        resultFormatters: resultFormatter_1.default.toTransactionWithStatus,
    },
    {
        name: 'getBlockHash',
        method: 'get_block_hash',
        paramsFormatters: [paramsFormatter_1.default.toNumber],
    },
    {
        name: 'getTipHeader',
        method: 'get_tip_header',
        paramsFormatters: [],
        resultFormatters: resultFormatter_1.default.toHeader,
    },
    {
        name: 'getCellsByLockHash',
        method: 'get_cells_by_lock_hash',
        paramsFormatters: [paramsFormatter_1.default.toHash, paramsFormatter_1.default.toNumber, paramsFormatter_1.default.toNumber],
        resultFormatters: resultFormatter_1.default.toCellsIncludingOutPoint,
    },
    {
        name: 'getLiveCell',
        method: 'get_live_cell',
        paramsFormatters: [paramsFormatter_1.default.toOutPoint],
        resultFormatters: resultFormatter_1.default.toLiveCellWithStatus,
    },
    {
        name: 'getTipBlockNumber',
        method: 'get_tip_block_number',
        paramsFormatters: [],
        resultFormatters: resultFormatter_1.default.toNumber,
    },
    {
        name: 'getBlockchainInfo',
        method: 'get_blockchain_info',
        paramsFormatters: [],
        resultFormatters: resultFormatter_1.default.toBlockchainInfo,
    },
    {
        name: 'sendTransaction',
        method: 'send_transaction',
        paramsFormatters: [paramsFormatter_1.default.toRawTransaction],
        resultFormatters: resultFormatter_1.default.toHash,
    },
    {
        name: 'localNodeInfo',
        method: 'local_node_info',
        paramsFormatters: [],
        resultFormatters: resultFormatter_1.default.toNodeInfo,
    },
    {
        name: 'txPoolInfo',
        method: 'tx_pool_info',
        paramsFormatters: [],
        resultFormatters: resultFormatter_1.default.toTxPoolInfo,
    },
    {
        name: 'getPeers',
        method: 'get_peers',
        paramsFormatters: [],
        resultFormatters: resultFormatter_1.default.toPeers,
    },
    {
        name: 'getPeersState',
        method: 'get_peers_state',
        paramsFormatters: [],
        resultFormatters: resultFormatter_1.default.toPeersState,
    },
    {
        name: 'getCurrentEpoch',
        method: 'get_current_epoch',
        paramsFormatters: [],
        resultFormatters: resultFormatter_1.default.toEpoch,
    },
    {
        name: 'getEpochByNumber',
        method: 'get_epoch_by_number',
        paramsFormatters: [paramsFormatter_1.default.toNumber],
        resultFormatters: resultFormatter_1.default.toEpoch,
    },
    {
        name: 'dryRunTransaction',
        method: 'dry_run_transaction',
        paramsFormatters: [paramsFormatter_1.default.toRawTransaction],
    },
    {
        name: 'deindexLockHash',
        method: 'deindex_lock_hash',
        paramsFormatters: [paramsFormatter_1.default.toHash],
    },
    {
        name: 'getLiveCellsByLockHash',
        method: 'get_live_cells_by_lock_hash',
        paramsFormatters: [paramsFormatter_1.default.toHash, paramsFormatter_1.default.toPageNumber, paramsFormatter_1.default.toPageSize, paramsFormatter_1.default.toReverseOrder],
        resultFormatters: resultFormatter_1.default.toLiveCellsByLockHash,
    },
    {
        name: 'getLockHashIndexStates',
        method: 'get_lock_hash_index_states',
        paramsFormatters: [],
        resultFormatters: resultFormatter_1.default.toLockHashIndexStates,
    },
    {
        name: 'getTransactionsByLockHash',
        method: 'get_transactions_by_lock_hash',
        paramsFormatters: [paramsFormatter_1.default.toHash, paramsFormatter_1.default.toPageNumber, paramsFormatter_1.default.toPageSize, paramsFormatter_1.default.toReverseOrder],
        resultFormatters: resultFormatter_1.default.toTransactionsByLockHash,
    },
    {
        name: 'indexLockHash',
        method: 'index_lock_hash',
        paramsFormatters: [paramsFormatter_1.default.toHash, paramsFormatter_1.default.toOptional(paramsFormatter_1.default.toNumber)],
        resultFormatters: resultFormatter_1.default.toLockHashIndexState,
    },
    {
        name: 'getBannedAddresses',
        method: 'get_banned_addresses',
        paramsFormatters: [],
        resultFormatters: resultFormatter_1.default.toBannedAddresses,
    },
    {
        name: 'setBan',
        method: 'set_ban',
        paramsFormatters: [],
    },
    {
        name: 'getHeader',
        method: 'get_header',
        paramsFormatters: [paramsFormatter_1.default.toHash],
        resultFormatters: resultFormatter_1.default.toHeader,
    },
    {
        name: 'getHeaderByNumber',
        method: 'get_header_by_number',
        paramsFormatters: [paramsFormatter_1.default.toNumber],
        resultFormatters: resultFormatter_1.default.toHeader,
    },
    {
        name: 'getCellbaseOutputCapacityDetails',
        method: 'get_cellbase_output_capacity_details',
        paramsFormatters: [paramsFormatter_1.default.toHash],
        resultFormatters: resultFormatter_1.default.toCellbaseOutputCapacityDetails,
    },
    {
        name: 'estimateFeeRate',
        method: 'estimate_fee_rate',
        paramsFormatters: [paramsFormatter_1.default.toNumber],
        resultFormatters: resultFormatter_1.default.toFeeRate,
    },
    {
        name: 'calculateDaoMaximumWithdraw',
        method: 'calculate_dao_maximum_withdraw',
        paramsFormatters: [paramsFormatter_1.default.toOutPoint, paramsFormatter_1.default.toHash],
    },
];
class DefaultRPC {
    constructor() {
        this.defaultMethods = defaultRPC;
    }
}
exports.DefaultRPC = DefaultRPC;
exports.default = DefaultRPC;
//# sourceMappingURL=defaultRPC.js.map