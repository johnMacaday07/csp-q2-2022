"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateBalance = (trans) => {
    let balance = 0;
    for (let part of trans) {
        let totalSize = part.qty * part.size;
        balance += totalSize;
    }
    return parseFloat(balance.toFixed(1));
};
exports.default = calculateBalance;
