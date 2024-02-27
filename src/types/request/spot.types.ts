export interface SpotKlineV3Request {
  symbol: string;
  before?: number;
  after?: number;
  step?: number;
  limit?: number;
}

export interface SpotKlinesV1Request {
  symbol: string;
  from: number;
  to: number;
  step?: number;
}

export interface SpotOrderBookDepthV1Request {
  symbol: string;
  precision?: string;
  size?: number;
}

export interface SubmitWithdrawalV1Request {
  currency: string;
  amount: string;
  destination: 'To Digital Address';
  address: string;
  address_memo?: string;
}

export interface DepositWithdrawHistoryV2Request {
  currency?: string;
  operation_type: 'deposit' | 'withdraw';
  N: number;
}

export interface SubmitMarginTransferV1Request {
  symbol: string;
  currency: string;
  amount: string;
  side: 'in' | 'out';
}

export interface SubmitSpotOrderV2Request {
  symbol: string;
  side: 'buy' | 'sell';
  type: 'limit' | 'market' | 'limit_maker' | 'ioc';
  client_order_id?: string;
  size?: string;
  price?: string;
  notional?: string;
}

export type CancelOrdersV3Request = {
  symbol: string;
  order_id?: string;
  client_order_id?: string;
} & ({ order_id: string } | { client_order_id: string });

export interface SpotOrderByIdV4Request {
  orderId: string;
  queryState?: 'open' | 'history';
  recvwindow?: number;
}

export interface SpotOrderByClientOrderIdV4Request {
  clientOrderId: string;
  queryState?: 'open' | 'history';
  recvwindow?: number;
}

export interface SpotOpenOrdersV4Request {
  orderMode?: 'spot' | 'iso_margin'; // Order mode: 'spot' for spot trade, 'iso_margin' for isolated margin trade
  startTime?: number; // Start time in milliseconds, e.g., 1681701557927
  endTime?: number; // End time in milliseconds, e.g., 1681701557927
  limit?: number; // Number of queries, allowed range [1,200], default is 200
  recvWindow?: number; // Trade time limit, allowed range (0,60000], default: 5000 milliseconds
}

export interface SpotOrderTradeHistoryV4Request {
  orderMode?: 'spot' | 'iso_margin'; // Order mode: 'spot' for spot trade, 'iso_margin' for isolated margin trade
  startTime?: number; // Start time in milliseconds, e.g., 1681701557927
  endTime?: number; // End time in milliseconds, e.g., 1681701557927
  limit?: number; // Number of queries, allowed range [1,200], default is 200
  recvWindow?: number; // Trade time limit, allowed range (0,60000], default: 5000 milliseconds
  symbol?: string; // Trading pair, e.g., BTC_USDT
}

export interface MarginBorrowRepayV1Request {
  symbol: string;
  currency: string;
  amount: string;
}

export interface MarginBorrowRecordsV1Request {
  symbol: string;
  start_time?: number;
  end_time?: number;
  N?: number;
  borrow_id?: string;
}

export interface MarginRepayRecordsV1Request {
  symbol: string;
  start_time?: number;
  end_time?: number;
  N?: number;
  repay_id?: string;
  currency?: string;
}

export interface SubmitSubTransferSubToMainV1Request {
  requestNo: string;
  amount: string;
  currency: string;
}

export interface SubmitSubTransferV1Request {
  requestNo: string;
  amount: string;
  currency: string;
  subAccount: string;
}

export interface SubmitMainTransferSubToSubV1Request {
  requestNo: string;
  amount: string;
  currency: string;
  fromAccount: string;
  toAccount: string;
}

export interface SubTransfersV1Request {
  moveType: 'spot to spot';
  N: number;
  accountName?: string;
}

export interface AccountSubTransfersV1Request {
  moveType: 'spot to spot';
  N: number;
}

export interface SubSpotWalletBalancesV1Request {
  subAccount: string;
  currency?: string;
}

export interface SpotBrokerRebateRequest {
  start_time?: number;
  end_time?: number;
}
