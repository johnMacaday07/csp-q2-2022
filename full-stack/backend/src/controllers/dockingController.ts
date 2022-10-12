import { Transaction } from "../types/types";
import calculateBalance from "../utils/calculateBalance";
import { Request, Response, NextFunction } from "express";

import validateTransformation from "../utils/validateTransformation";

const transformTransaction = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { data } = req.body;
//   const input = JSON.parse(data);
  const input = data;
    
  const output = input.map((trans: Transaction) => {
    let balance: number = 0;
    let isValid: boolean = true;
    let errorReason: null | string = null;

    errorReason = validateTransformation(trans.transformations);
    balance = calculateBalance(trans.transformations);

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

export default { transformTransaction };
