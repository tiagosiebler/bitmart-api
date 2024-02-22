export interface APIResponse<TData = {}> {
  message: string;
  code: number;
  trace: string;
  data: TData;
}

export type OrderSide = 'buy' | 'sell';
