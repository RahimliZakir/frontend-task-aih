import { CurrencyTypes } from "../types/enums/CurrecyTypes.types";

export const configureCurrency = (
  amount: number,
  CurrencyType: CurrencyTypes = CurrencyTypes.AZN
) => {
  return `${amount} ${CurrencyType}`;
};
