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
const formatter = {
    toNumber: (number) => number.toString(),
    toHash: (hash) => hash,
    toHeader: (header) => {
        if (!header)
            return header;
        const { compact_target, transactions_root, proposals_hash, uncles_hash, parent_hash } = header, rest = __rest(header, ["compact_target", "transactions_root", "proposals_hash", "uncles_hash", "parent_hash"]);
        return Object.assign({ compactTarget: compact_target, parentHash: parent_hash, transactionsRoot: transactions_root, proposalsHash: proposals_hash, unclesHash: uncles_hash }, rest);
    },
    toScript: (script) => {
        if (!script)
            return script;
        const { code_hash: codeHash, hash_type: hashType } = script, rest = __rest(script, ["code_hash", "hash_type"]);
        return Object.assign({ codeHash,
            hashType }, rest);
    },
    toInput: (input) => {
        if (!input)
            return input;
        const { previous_output: previousOutput } = input, rest = __rest(input, ["previous_output"]);
        return Object.assign({ previousOutput: previousOutput ? formatter.toOutPoint(previousOutput) : previousOutput }, rest);
    },
    toOutput: (output) => {
        if (!output)
            return output;
        const { lock, type } = output, rest = __rest(output, ["lock", "type"]);
        return Object.assign({ lock: formatter.toScript(lock), type: type ? formatter.toScript(type) : type }, rest);
    },
    toOutPoint: (outPoint) => {
        if (!outPoint)
            return outPoint;
        const { tx_hash: txHash } = outPoint, rest = __rest(outPoint, ["tx_hash"]);
        return Object.assign({ txHash }, rest);
    },
    toDepType: (type) => {
        if (type === 'dep_group') {
            return 'depGroup';
        }
        return type;
    },
    toCellDep: (cellDep) => {
        if (!cellDep)
            return cellDep;
        const { out_point: outPoint = null, dep_type = 'code' } = cellDep, rest = __rest(cellDep, ["out_point", "dep_type"]);
        return Object.assign({ outPoint: formatter.toOutPoint(outPoint), depType: formatter.toDepType(dep_type) }, rest);
    },
    toTransaction: (tx) => {
        if (!tx)
            return tx;
        const { cell_deps: cellDeps = [], inputs = [], outputs = [], outputs_data: outputsData = [], header_deps: headerDeps = [] } = tx, rest = __rest(tx, ["cell_deps", "inputs", "outputs", "outputs_data", "header_deps"]);
        return Object.assign({ cellDeps: cellDeps.map(formatter.toCellDep), inputs: inputs.map(formatter.toInput), outputs: outputs.map(formatter.toOutput), outputsData,
            headerDeps }, rest);
    },
    toUncleBlock: (uncleBlock) => {
        if (!uncleBlock)
            return uncleBlock;
        const { header } = uncleBlock, rest = __rest(uncleBlock, ["header"]);
        return Object.assign({ header: formatter.toHeader(header) }, rest);
    },
    toBlock: (block) => {
        if (!block)
            return block;
        const { header, uncles = [], transactions = [] } = block, rest = __rest(block, ["header", "uncles", "transactions"]);
        return Object.assign({ header: formatter.toHeader(header), uncles: uncles.map(formatter.toUncleBlock), transactions: transactions.map(formatter.toTransaction) }, rest);
    },
    toAlertMessage: (alertMessage) => {
        if (!alertMessage)
            return alertMessage;
        const { notice_until: noticeUntil } = alertMessage, rest = __rest(alertMessage, ["notice_until"]);
        return Object.assign({ noticeUntil }, rest);
    },
    toBlockchainInfo: (info) => {
        if (!info)
            return info;
        const { is_initial_block_download: isInitialBlockDownload, median_time: medianTime, alerts } = info, rest = __rest(info, ["is_initial_block_download", "median_time", "alerts"]);
        return Object.assign({ isInitialBlockDownload,
            medianTime, alerts: alerts.map(formatter.toAlertMessage) }, rest);
    },
    toNodeInfo: (info) => {
        if (!info)
            return info;
        const { node_id: nodeId, is_outbound: isOutbound } = info, rest = __rest(info, ["node_id", "is_outbound"]);
        return Object.assign({ nodeId,
            isOutbound }, rest);
    },
    toTxPoolInfo: (info) => {
        if (!info)
            return info;
        const { last_txs_updated_at: lastTxsUpdatedAt, total_tx_cycles: totalTxCycles, total_tx_size: totalTxSize } = info, rest = __rest(info, ["last_txs_updated_at", "total_tx_cycles", "total_tx_size"]);
        return Object.assign({ lastTxsUpdatedAt,
            totalTxCycles,
            totalTxSize }, rest);
    },
    toPeers: (nodes) => {
        if (!Array.isArray(nodes))
            return [];
        return nodes.map(formatter.toNodeInfo);
    },
    toPeersState: (state) => {
        if (!state)
            return state;
        const { last_updated: lastUpdated, blocks_in_flight: blocksInFlight } = state, rest = __rest(state, ["last_updated", "blocks_in_flight"]);
        return Object.assign({ lastUpdated,
            blocksInFlight }, rest);
    },
    toCell: (cell) => {
        if (!cell)
            return cell;
        const { lock, type } = cell, rest = __rest(cell, ["lock", "type"]);
        return Object.assign({ lock: formatter.toScript(lock), type: type ? formatter.toScript(type) : null }, rest);
    },
    toLiveCell: (liveCell) => {
        if (!liveCell)
            return liveCell;
        const { data, output } = liveCell, rest = __rest(liveCell, ["data", "output"]);
        return Object.assign({ data, output: formatter.toOutput(output) }, rest);
    },
    toLiveCellWithStatus: (cellWithStatus) => {
        if (!cellWithStatus)
            return cellWithStatus;
        const { cell } = cellWithStatus, rest = __rest(cellWithStatus, ["cell"]);
        return Object.assign({ cell: formatter.toLiveCell(cell) }, rest);
    },
    toCells: (cells) => {
        if (!Array.isArray(cells))
            return [];
        return cells.map(formatter.toCell);
    },
    toCellIncludingOutPoint: (cell) => {
        if (!cell)
            return cell;
        const { lock, block_hash: blockHash, out_point, output_data_len: outputDataLen } = cell, rest = __rest(cell, ["lock", "block_hash", "out_point", "output_data_len"]);
        return Object.assign({ blockHash, lock: formatter.toScript(lock), outPoint: formatter.toOutPoint(out_point), outputDataLen }, rest);
    },
    toCellsIncludingOutPoint: (cells) => {
        if (!Array.isArray(cells))
            return [];
        return cells.map(formatter.toCellIncludingOutPoint);
    },
    toTransactionWithStatus: (txWithStatus) => {
        if (!txWithStatus)
            return txWithStatus;
        const { transaction, tx_status: { block_hash: blockHash, status } } = txWithStatus, rest = __rest(txWithStatus, ["transaction", "tx_status"]);
        return Object.assign({ transaction: formatter.toTransaction(transaction), txStatus: {
                blockHash,
                status,
            } }, rest);
    },
    toEpoch: (epoch) => {
        if (!epoch)
            return epoch;
        const { start_number: startNumber, compact_target: compactTarget } = epoch, rest = __rest(epoch, ["start_number", "compact_target"]);
        return Object.assign({ compactTarget,
            startNumber }, rest);
    },
    toTransactionPoint: (transactionPoint) => {
        if (!transactionPoint)
            return transactionPoint;
        const { block_number: blockNumber, tx_hash: txHash } = transactionPoint, rest = __rest(transactionPoint, ["block_number", "tx_hash"]);
        return Object.assign({ blockNumber,
            txHash }, rest);
    },
    toTransactionsByLockHash: (transactions) => {
        if (!transactions)
            return transactions;
        return transactions.map(tx => ({
            consumedBy: tx.consumed_by ? formatter.toTransactionPoint(tx.consumed_by) : tx.consumed_by,
            createdBy: formatter.toTransactionPoint(tx.created_by),
        }));
    },
    toLiveCellsByLockHash: (cells) => {
        if (!cells)
            return cells;
        return cells.map(cell => ({
            cellOutput: formatter.toCell(cell.cell_output),
            createdBy: formatter.toTransactionPoint(cell.created_by),
        }));
    },
    toLockHashIndexState: (index) => {
        if (!index)
            return index;
        const { block_hash: blockHash, block_number: blockNumber, lock_hash: lockHash } = index, rest = __rest(index, ["block_hash", "block_number", "lock_hash"]);
        return Object.assign({ blockHash,
            blockNumber,
            lockHash }, rest);
    },
    toLockHashIndexStates: (states) => {
        if (!states)
            return states;
        return states.map(formatter.toLockHashIndexState);
    },
    toBannedAddress: (bannedAddress) => {
        if (!bannedAddress)
            return bannedAddress;
        const { ban_reason: banReason, ban_until: banUntil, created_at: createdAt } = bannedAddress, rest = __rest(bannedAddress, ["ban_reason", "ban_until", "created_at"]);
        return Object.assign({ banReason,
            banUntil,
            createdAt }, rest);
    },
    toBannedAddresses: (bannedAddresses) => {
        if (!bannedAddresses)
            return bannedAddresses;
        return bannedAddresses.map(banAddr => formatter.toBannedAddress(banAddr));
    },
    toCellbaseOutputCapacityDetails: (details) => {
        if (!details)
            return details;
        const { proposal_reward: proposalReward, tx_fee: txFee } = details, rest = __rest(details, ["proposal_reward", "tx_fee"]);
        return Object.assign({ proposalReward,
            txFee }, rest);
    },
    toFeeRate: (feeRateObj) => {
        if (!feeRateObj) {
            return feeRateObj;
        }
        const { fee_rate: feeRate } = feeRateObj, rest = __rest(feeRateObj, ["fee_rate"]);
        return Object.assign({ feeRate }, rest);
    },
};
exports.default = formatter;
//# sourceMappingURL=resultFormatter.js.map