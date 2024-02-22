// Interface for getSpotTickerV3 parameters
export interface GetSpotTickerV3Params {
  symbol: string;
}

// Interface for getSpotLatestKlineV3 parameters
export interface GetSpotLatestKlineV3Params {
  symbol: string;
  before?: number;
  after?: number;
  step?: number;
  limit?: number;
}

// Interface for getSpotHistoryKlineV3 parameters
export interface GetSpotHistoryKlineV3Params {
  symbol: string;
  before?: number;
  after?: number;
  step?: number;
  limit?: number;
}

// Interface for getSpotOrderBookDepthV3 parameters
export interface GetSpotOrderBookDepthV3Params {
  symbol: string;
  limit?: number;
}

// Interface for getSpotRecentTrades parameters
export interface GetSpotRecentTradesParams {
  symbol: string;
  limit?: number;
}

// Interface for getSpotTickerV1 parameters
export interface GetSpotTickerV1Params {
  symbol: string;
}

// Interface for getSpotKlinesV1 parameters
export interface GetSpotKlinesV1Params {
  symbol: string;
  from: number;
  to: number;
  step?: number;
}

// Interface for getSpotOrderBookDepthV1 parameters
export interface GetSpotOrderBookDepthV1Params {
  symbol: string;
  precision?: string;
  size?: number;
}

// Interface for getAccountBalancesV1 parameters
export interface GetAccountBalancesV1Params {
  currency?: string;
}

export interface GetAccountDepositAddressV1Params {
  currency: string;
}

// Interface for submitWithdrawalV1 parameters
export interface SubmitWithdrawalV1Params {
  currency: string;
  amount: string;
  destination: 'To Digital Address';
  address: string;
  address_memo?: string;
}

// Interface for getDepositWithdrawHistoryV2 parameters
export interface GetDepositWithdrawHistoryV2Params {
  currency?: string;
  operation_type: 'deposit' | 'withdraw';
  N: number;
}

// Interface for getDepositWithdrawDetailsV1 parameters
export interface GetDepositWithdrawDetailsV1Params {
  id: string;
}

// Interface for submitMarginTransferV1 parameters
export interface SubmitMarginTransferV1Params {
  symbol: string;
  currency: string;
  amount: string;
  side: 'in' | 'out';
}

// Interface for submitSpotOrderV2 parameters
export interface SubmitSpotOrderV2Params {
  symbol: string;
  side: 'buy' | 'sell';
  type: 'limit' | 'market' | 'limit_maker' | 'ioc';
  client_order_id?: string;
  size?: string;
  price?: string;
  notional?: string;
}

// Interface for submitMarginOrderV1 parameters
export interface SubmitMarginOrderV1Params {
  symbol: string;
  side: 'buy' | 'sell';
  type: 'limit' | 'market' | 'limit_maker' | 'ioc';
  clientOrderId?: string;
  size?: string;
  price?: string;
  notional?: string;
}

// Interface for submitBatchOrderV2 parameters
export interface SubmitBatchOrdersV2Params {
  order_params: {
    symbol: string;
    side: 'buy' | 'sell';
    type: 'limit' | 'market' | 'limit_maker' | 'ioc';
    client_order_id?: string;
    size?: string;
    price?: string;
    notional?: string;
  }[];
}

// Interface for cancelOrderV3 parameters
export type CancelOrdersV3Params = {
  symbol: string;
  order_id?: string;
  client_order_id?: string;
} & ({ order_id: string } | { client_order_id: string });

// Interface for cancelOrdersForSideV1 parameters
export interface CancelOrdersForSideV1Params {
  symbol?: string;
  side?: 'buy' | 'sell';
}

// Interface for getSpotOrderByIdV4 parameters
export interface GetSpotOrderByIdV4Params {
  orderId: string;
  queryState?: 'open' | 'history';
  recvwindow?: number;
}

// Interface for getSpotOrderByClientOrderIdV4 parameters
export interface GetSpotOrderByClientOrderIdV4Params {
  clientOrderId: string;
  queryState?: 'open' | 'history';
  recvwindow?: number;
}

// Interface for getSpotOpenOrdersV4 parameters
export interface GetSpotOpenOrdersV4Params {
  orderMode?: 'spot' | 'iso_margin'; // Order mode: 'spot' for spot trade, 'iso_margin' for isolated margin trade
  startTime?: number; // Start time in milliseconds, e.g., 1681701557927
  endTime?: number; // End time in milliseconds, e.g., 1681701557927
  limit?: number; // Number of queries, allowed range [1,200], default is 200
  recvWindow?: number; // Trade time limit, allowed range (0,60000], default: 5000 milliseconds
}

// Interface for getSpotOrderHistoryV4 parameters
export interface GetSpotOrderHistoryV4Params {
  symbol?: string; // Trading pair, e.g., BTC_USDT
  orderMode?: 'spot' | 'iso_margin'; // Order mode: 'spot' for spot trade, 'iso_margin' for isolated margin trade
  startTime?: number; // Start time in milliseconds, e.g., 1681701557927
  endTime?: number; // End time in milliseconds, e.g., 1681701557927
  limit?: number; // Number of queries, allowed range [1,200], default is 200
  recvWindow?: number; // Trade time limit, allowed range (0,60000], default: 5000 milliseconds
}

// Interface for getSpotTradeHistoryV4 parameters
export interface GetSpotTradeHistoryV4Params {
  symbol?: string; // Trading pair, e.g., BTC_USDT
  orderMode?: 'spot' | 'iso_margin'; // Order mode: 'spot' for spot trade, 'iso_margin' for isolated margin trade
  startTime?: number; // Start time in milliseconds, e.g., 1681701557927
  endTime?: number; // End time in milliseconds, e.g., 1681701557927
  limit?: number; // Number of queries, allowed range [1,200], default is 200
  recvWindow?: number; // Trade time limit, allowed range (0,60000], default: 5000 milliseconds
}

// Interface for parameters of the marginBorrowV1 function
export interface MarginBorrowV1Params {
  symbol: string;
  currency: string;
  amount: string;
}

// Interface for parameters of the marginRepayV1 function
export interface MarginRepayV1Params {
  symbol: string;
  currency: string;
  amount: string;
}

// Interface for parameters of the getMarginBorrowRecordV1 function
export interface GetMarginBorrowRecordV1Params {
  symbol: string;
  borrow_id?: string;
  start_time?: number;
  end_time?: number;
  N?: number;
}

// Interface for parameters of the getMarginRepayRecordV1 function
export interface GetMarginRepayRecordV1Params {
  symbol: string;
  repay_id?: string;
  currency?: string;
  start_time?: number;
  end_time?: number;
  N?: number;
}

// Interface for parameters of the getMarginBorrowingRatesV1 function
export interface GetMarginBorrowingRatesV1Params {
  symbol?: string;
}

// Interface for submitMainTransferSubToMainV1 parameters
export interface SubmitMainTransferSubToMainV1Params {
  requestNo: string;
  amount: string;
  currency: string;
  subAccount: string;
}

// Interface for submitSubTransferSubToMainV1 parameters
export interface SubmitSubTransferSubToMainV1Params {
  requestNo: string;
  amount: string;
  currency: string;
}

// Interface for submitMainTransferMainToSubV1 parameters
export interface SubmitMainTransferMainToSubV1Params {
  requestNo: string;
  amount: string;
  currency: string;
  subAccount: string;
}

// Interface for submitMainTransferSubToSubV1 parameters
export interface SubmitMainTransferSubToSubV1Params {
  requestNo: string;
  amount: string;
  currency: string;
  fromAccount: string;
  toAccount: string;
}

// Interface for submitSubTransferSubToSubV1 parameters
export interface SubmitSubTransferSubToSubV1Params {
  requestNo: string;
  amount: string;
  currency: string;
  subAccount: string;
}

// Interface for getSubTransfersV1 parameters
export interface GetSubTransfersV1Params {
  moveType: 'spot to spot';
  N: number;
  accountName?: string;
}

// Interface for getAccountSubTransfersV1 parameters
export interface GetAccountSubTransfersV1Params {
  moveType: 'spot to spot';
  N: number;
}

// Interface for getSubSpotWalletBalancesV1 parameters
export interface GetSubSpotWalletBalancesV1Params {
  subAccount: string;
  currency?: string;
}

export interface SpotBrokerRebateRequest {
  start_time?: number;
  end_time?: number;
}
