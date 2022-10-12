export interface Transformation { 
    partNum: string,
    size: number, 
    qty: number 
}

export interface Transaction {
    transaction: string,
    transformations: Transformation[],
    balance?: number,
    isValid?: boolean,
    errorReason?: null | string
}