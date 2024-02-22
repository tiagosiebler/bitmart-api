export interface APIResponse<TData = {}, TCode = number> {
  message: string;
  code: TCode;
  trace: string;
  data: TData;
}

export type OrderSide = 'buy' | 'sell';
