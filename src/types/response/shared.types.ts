export interface APIResponse<TData = {}, TCode = number> {
  message: string;
  code: TCode;
  trace: string;
  data: TData;
}

export type OrderSide = 'buy' | 'sell';

/**
 * Spot & Futures uses this
 */
export interface AccountCurrencyBalanceV1 {
  currency: string;
  name: string;
  available: string;
  available_usd_valuation: string;
  frozen: string;
}
