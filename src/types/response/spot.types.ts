import { OrderSide } from './shared.types';

// Interface for getSystemTime response
export interface SystemTimeResult {
  server_time: number;
}

export interface ServiceStatusRow {
  title: string;
  service_type: string;
  status: number;
  start_time: number;
  end_time: number;
}

export interface SpotCurrencyV1 {
  id: string;
  name: string;
  withdraw_enabled: boolean;
  deposit_enabled: boolean;
}

export interface SpotTradingPairDetailsV1 {
  symbol: string;
  symbol_id: string;
  base_currency: string;
  quote_currency: string;
  quote_increment: string;
  base_min_size: string;
  base_max_size: string;
  price_min_precision: number;
  price_max_precision: number;
  expiration: string;
  min_buy_amount: string;
  min_sell_amount: string;
}

/**
 * [symbol, last, v_24h, qv_24h, open_24h, high_24h, low_24h, fluctuation, bid_px, bid_sz, ask_px, ask_sz, ts]
 */
export type ArrayFormSpotTickerV3 = [
  string, // symbol
  string, // last
  string, // v_24h
  string, // qv_24h
  string, // open_24h
  string, // high_24h
  string, // low_24h
  string, // fluctuation
  string, // bid_px
  string, // bid_sz
  string, // ask_px
  string, // ask_sz
  string, // ts
];

export interface SpotTickerV3 {
  symbol: string;
  last: string;
  v_24h: string;
  qv_24h: string;
  open_24h: string;
  high_24h: string;
  low_24h: string;
  fluctuation: string;
  bid_px: string;
  bid_sz: string;
  ask_px: string;
  ask_sz: string;
  ts: string;
}

/**
 * [t,o,h,l,c,v,qv]
 */
export type ArrayFormSpotKlineV3 = [
  string, // t
  string, // o
  string, // h
  string, // l
  string, // c
  string, // v
  string, // qv
];

/**
 * [price, amount]
 */
export type BookPriceLevel = [
  string, // price
  string, // amount
];

// Interface for getSpotOrderBookDepthV3 response
export interface GetSpotOrderBookDepthResultV3 {
  ts: string;
  symbol: string;
  asks: BookPriceLevel[];
  bids: BookPriceLevel[];
}

/**
 * [symbol, ts, price, size, side]
 */
export type ArrayFormSpotRecentTrade = [
  string, // symbol
  string, // ts
  string, // price
  string, // size
  OrderSide, // side
];

export interface SpotTickerV1 {
  symbol: string;
  last_price: string;
  quote_volume_24h: string;
  base_volume_24h: string;
  high_24h: string;
  low_24h: string;
  open_24h: string;
  close_24h: string;
  best_ask: string;
  best_ask_size: string;
  best_bid: string;
  best_bid_size: string;
  fluctuation: string;
  timestamp: number;
  url: string;
}

export interface SpotKlineV1 {
  timestamp: number;
  open: string;
  high: string;
  low: string;
  close: string;
  last_price: string;
  volume: string;
  quote_volume: string;
}

export interface SpotBookLevelV1 {
  amount: string;
  total: string;
  price: string;
  count: string;
}

// Interface for getSpotOrderBookDepthV1 response
export interface SpotOrderBookDepthResultV1 {
  timestamp: number;
  buys: SpotBookLevelV1[];
  sells: SpotBookLevelV1[];
}

export interface AccountCurrencyBalanceV1 {
  currency: string;
  name: string;
  available: string;
  frozen: string;
}

export interface AccountCurrencyV1 {
  currency: string;
  name: string;
  contract_address: string | null;
  network: string;
  withdraw_enabled: boolean;
  deposit_enabled: boolean;
  withdraw_minsize: string | null;
  withdraw_minfee: string | null;
}

export interface SpotWalletBalanceV1 {
  id: string;
  available: string;
  name: string;
  frozen: string;
}

export interface AccountDepositAddressV1 {
  currency: string;
  chain: string;
  address: string;
  address_memo: string;
}

export interface AccountWithdrawQuotaV1 {
  today_available_withdraw_BTC: string;
  min_withdraw: string;
  withdraw_precision: number;
  withdraw_fee: string;
}

export interface AccountDepositWithdrawHistoryV2 {
  withdraw_id: string;
  deposit_id: string;
  operation_type: 'deposit' | 'withdraw';
  currency: string;
  apply_time: number;
  arrival_amount: string;
  fee: string;
  status: number;
  address: string;
  address_memo: string;
  tx_id: string;
}

export interface MarginV1BaseQuote {
  currency: string;
  borrow_enabled: boolean;
  borrowed: string;
  borrow_unpaid: string;
  interest_unpaid: string;
  available: string;
  frozen: string;
  net_asset: string;
  net_assetBTC: string;
  total_asset: string;
}

export interface SymbolMarginAccountDetailsV1 {
  symbol: string;
  risk_rate: string;
  risk_level: string;
  buy_enabled: boolean;
  sell_enabled: boolean;
  liquidate_price: string;
  liquidate_rate: string;
  base: MarginV1BaseQuote;
  quote: MarginV1BaseQuote;
}

export interface BasicFeeRateV1 {
  user_rate_type: 0 | 1 | 2;
  level: string;
  taker_fee_rate_A: string;
  maker_fee_rate_A: string;
  taker_fee_rate_B: string;
  maker_fee_rate_B: string;
  taker_fee_rate_C: string;
  maker_fee_rate_C: string;
}

// Interface for getActualFeeRateV1 response
export interface GetActualFeeRateV1Result {
  symbol: string;
  buy_taker_fee_rate: string;
  sell_taker_fee_rate: string;
  buy_maker_fee_rate: string;
  sell_maker_fee_rate: string;
}

/**
 *
 * Spot/Margin Trading Endpoints
 *
 **/

/**
 * order_id is only present when successful
 */
export interface SubmittedSpotBatchOrderSuccessResponseV2 {
  code: 0;
  msg: string;
  data: {
    order_id: string;
  };
}

export interface SubmittedSpotBatchOrderFailureResponseV2 {
  code: number;
  msg: string;
}

export type SubmittedSpotBatchOrderResponseV2 =
  | SubmittedSpotBatchOrderSuccessResponseV2
  | SubmittedSpotBatchOrderFailureResponseV2;

// Base interface for common fields
export interface SpotTradeBase {
  orderId: string;
  clientOrderId: string;
  symbol: string;
  side: OrderSide; // Assuming OrderSide is already defined somewhere
  orderMode: string; // Consider using a union type if the possible values are known
  type: string; // Consider using a union type if the possible values are known
  price: string;
  size: string;
  notional: string;
  createTime: number;
  updateTime: number;
}

// Specific interface for SpotOrderV4
export interface SpotOrderV4 extends SpotTradeBase {
  state: string;
  priceAvg: string;
  filledSize: string;
  filledNotional: string;
}

// Specific interface for SpotAccountTradeV4
export interface SpotAccountTradeV4 extends SpotTradeBase {
  tradeId: string;
  fee: string;
  feeCoinName: string;
  tradeRole: 'taker' | 'maker'; // Assuming 'maker' could be another possible value
  orderMode: 'spot' | 'iso_margin';
  type: 'limit' | 'market' | 'limit_maker' | 'ioc';
}

export type SpotAccountOrderTradeV4 = SpotAccountTradeV4;

/**
 *
 * Margin Loan Endpoints (History versions)
 *
 **/

// Interface for getMarginBorrowRecordV1 response
export interface GetMarginBorrowRecordV1Result {
  records: {
    borrow_id: string;
    symbol: string;
    currency: string;
    borrow_amount: string;
    daily_interest: string;
    hourly_interest: string;
    interest_amount: string;
    create_time: number;
  }[];
}

// Interface for getMarginRepayRecordV1 response
export interface GetMarginRepayRecordV1Result {
  records: {
    repay_id: string;
    repay_time: number;
    symbol: string;
    currency: string;
    repaid_amount: string;
    repaid_principal: string;
    repaid_interest: string;
  }[];
}

export interface MarginBorrow {
  currency: string;
  daily_interest: string;
  hourly_interest: string;
  max_borrow_amount: string;
  min_borrow_amount: string;
  borrowable_amount: string;
}

// Interface for getMarginBorrowingRatesV1 response
export interface GetMarginBorrowingRatesV1Result {
  symbols: {
    symbol: string;
    max_leverage: string;
    symbol_enabled: boolean;
    base: MarginBorrow;
    quote: MarginBorrow;
  }[];
}

export interface SubHistoryList {
  fromAccount: string;
  fromWalletType: 'spot';
  toAccount: string;
  toWalletType: 'spot';
  currency: string;
  amount: string;
  submissionTime: number;
}

// Interface for getSubTransfersV1 response
export interface GetSubTransfersV1Result {
  total: number;
  historyList: SubHistoryList[];
}

// Interface for getAccountSubTransfersV1 response
export interface GetAccountSubTransfersV1Result {
  total: number;
  historyList: SubHistoryList[];
}

// Interface for getSubSpotWalletBalancesV1 response
export interface GetSubSpotWalletBalancesV1Result {
  wallet: {
    currency: string;
    name: string;
    available: string;
    frozen: string;
  }[];
}

// Interface for getSubAccountsV1 response
export interface GetSubAccountsV1Result {
  subAccountList: {
    accountName: string;
    status: number;
  }[];
}

/************************************************************************************************
 *
 * Broker rebates
 *
 **/

export interface SpotBrokerRebateRow {
  currency: string;
  rebate_amount: string;
}

export interface SpotBrokerRebateResult {
  rebates: {
    [date: string]: SpotBrokerRebateRow[];
  };
}
