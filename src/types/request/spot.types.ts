export interface GetSpotKlineRequest {
  symbol: string;
  before?: number;
  after?: number;
  step?: number;
  limit?: number;
}

// Interface for getSpotKlinesV1 parameters
export interface GetSpotKlinesV1Request {
  symbol: string;
  from: number;
  to: number;
  step?: number;
}

// Interface for getSpotOrderBookDepthV1 parameters
export interface GetSpotOrderBookDepthV1Request {
  symbol: string;
  precision?: string;
  size?: number;
}

// Interface for submitWithdrawalV1 parameters
export interface SubmitWithdrawalV1Request {
  currency: string;
  amount: string;
  destination: 'To Digital Address';
  address: string;
  address_memo?: string;
}

// Interface for getDepositWithdrawHistoryV2 parameters
export interface GetDepositWithdrawHistoryV2Request {
  currency?: string;
  operation_type: 'deposit' | 'withdraw';
  N: number;
}

// Interface for submitMarginTransferV1 parameters
export interface SubmitMarginTransferV1Request {
  symbol: string;
  currency: string;
  amount: string;
  side: 'in' | 'out';
}

export interface SpotSubmitOrder {
  symbol: string;
  side: 'buy' | 'sell';
  type: 'limit' | 'market' | 'limit_maker' | 'ioc';
  client_order_id?: string;
  size?: string;
  price?: string;
  notional?: string;
}

// Interface for cancelOrderV3 parameters
export type CancelOrdersV3Request = {
  symbol: string;
  order_id?: string;
  client_order_id?: string;
} & ({ order_id: string } | { client_order_id: string });

// Interface for cancelOrdersForSideV1 parameters
export interface CancelOrdersForSideV1Request {
  symbol?: string;
  side?: 'buy' | 'sell';
}

export interface SpotOrderIDBase {
  queryState?: 'open' | 'history';
  recvwindow?: number;
}

export interface GetSpotOrderByIdV4Request extends SpotOrderIDBase {
  orderId: string;
}

export interface GetSpotOrderByClientOrderIdV4Request extends SpotOrderIDBase {
  clientOrderId: string;
}

export interface GetSpotOrder {
  orderMode?: 'spot' | 'iso_margin'; // Order mode: 'spot' for spot trade, 'iso_margin' for isolated margin trade
  startTime?: number; // Start time in milliseconds, e.g., 1681701557927
  endTime?: number; // End time in milliseconds, e.g., 1681701557927
  limit?: number; // Number of queries, allowed range [1,200], default is 200
  recvWindow?: number; // Trade time limit, allowed range (0,60000], default: 5000 milliseconds
}

export interface GetSpotOrderTradeHistoryV4Request extends GetSpotOrder {
  symbol?: string; // Trading pair, e.g., BTC_USDT
}

// Interface for parameters of the marginBorrowV1 function
export interface MarginBorrowRepayV1Request {
  symbol: string;
  currency: string;
  amount: string;
}

export interface SpotMarginBase {
  symbol: string;
  start_time?: number;
  end_time?: number;
  N?: number;
}

// Interface for parameters of the getMarginBorrowRecordV1 function
export interface GetMarginBorrowRecordV1Request extends SpotMarginBase {
  borrow_id?: string;
}

// Interface for parameters of the getMarginRepayRecordV1 function
export interface GetMarginRepayRecordV1Request extends SpotMarginBase {
  repay_id?: string;
  currency?: string;
}

export interface SubTransfersBase {
  requestNo: string;
  amount: string;
  currency: string;
}

// Interface for submitMainTransferSubToMainV1 parameters
export interface SubmitMainTransferSubToMainV1Request extends SubTransfersBase {
  subAccount: string;
}

// Interface for submitSubTransferSubToMainV1 parameters
export interface SubmitSubTransferSubToMainV1Request extends SubTransfersBase {}

// Interface for submitMainTransferMainToSubV1 parameters
export interface SubmitMainTransferMainToSubV1Request extends SubTransfersBase {
  subAccount: string;
}

// Interface for submitMainTransferSubToSubV1 parameters
export interface SubmitMainTransferSubToSubV1Request extends SubTransfersBase {
  fromAccount: string;
  toAccount: string;
}

// Interface for submitSubTransferSubToSubV1 parameters
export interface SubmitSubTransferSubToSubV1Request extends SubTransfersBase {
  subAccount: string;
}

// Interface for getSubTransfersV1 parameters
export interface GetSubTransfersV1Request {
  moveType: 'spot to spot';
  N: number;
  accountName?: string;
}

// Interface for getAccountSubTransfersV1 parameters
export interface GetAccountSubTransfersV1Request {
  moveType: 'spot to spot';
  N: number;
}

// Interface for getSubSpotWalletBalancesV1 parameters
export interface GetSubSpotWalletBalancesV1Request {
  subAccount: string;
  currency?: string;
}

export interface SpotBrokerRebateRequest {
  start_time?: number;
  end_time?: number;
}
