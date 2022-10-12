"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculateBalance_1 = __importDefault(require("../utils/calculateBalance"));
const validateTransformation_1 = __importDefault(require("../utils/validateTransformation"));
const transformTransaction = (req, res, next) => {
    const { data } = req.body;
    const input = data;
    console.log(data);
    const output = input.map((trans) => {
        let balance = 0;
        let isValid = true;
        let errorReason = null;
        errorReason = (0, validateTransformation_1.default)(trans.transformations);
        balance = (0, calculateBalance_1.default)(trans.transformations);
        if (errorReason) {
            isValid = false;
        }
        trans.balance = balance;
        trans.isValid = isValid;
        trans.errorReason = errorReason;
        return trans;
    });
    res.json(output);
};
exports.default = { transformTransaction };
