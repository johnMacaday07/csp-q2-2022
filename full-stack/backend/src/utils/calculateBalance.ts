import { Transformation } from "../types/types";

const calculateBalance = (trans: Transformation[]) => {
  let balance = 0;
  for (let part of trans) {
    let totalSize = part.qty * part.size;
    balance += totalSize;
  }

  return parseFloat(balance.toFixed(1));
};

export default calculateBalance;
