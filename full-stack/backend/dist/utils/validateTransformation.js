"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateTransformation = (transformations) => {
    const incrementSize = 0.3;
    const sortedTransformation = transformations.sort((a, b) => b.qty - a.qty);
    const sourcePart = sortedTransformation[0].partNum;
    let errorReason = null;
    sortedTransformation.forEach((part, index) => {
        let correctSize = (Math.abs(part.size) * 10) % (incrementSize * 10) === 0;
        if (part.partNum !== sourcePart) {
            errorReason = "Source and child parts must have the same part number";
        }
        else if (index > 0 && (part.size < 3 || part.size > 12)) {
            errorReason = "Child parts must be within 3 to 12 meters";
        }
        else if (index > 0 && !correctSize) {
            errorReason = "Child parts must be in increments of 0.3 meters";
        }
    });
    return errorReason;
};
exports.default = validateTransformation;
