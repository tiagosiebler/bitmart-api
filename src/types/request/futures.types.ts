export interface FuturesKlinesRequest {
  symbol: string;
  start_time: number;
  end_time: number;
  step?: number;
}

export interface FuturesAccountOrderRequest {
  symbol: string;
  order_id: string;
  client_order_id?: string;
  account?: string;
}

export interface FuturesAccountHistoricOrderRequest {
  symbol: string;
  start_time?: number;
  end_time?: number;
  account?: string;
}

export interface FuturesAccountOpenOrdersRequest {
  symbol?: string;
  type?: 'limit' | 'market' | 'trailing';
  order_state?: 'all' | 'partially_filled';
  limit?: number;
}

export interface FuturesAccountPlanOrdersRequest {
  symbol?: string;
  type?: 'limit' | 'market';
  limit?: number;
  plan_type?: 'plan' | 'profit_loss';
}

export interface FuturesAccountTradesRequest {
  symbol: string;
  start_time?: number;
  end_time?: number;
  account?: string;
}

export interface FuturesAccountHistoricTransactionRequest {
  symbol?: string;
  flow_type?: 0 | 1 | 2 | 3 | 4 | 5;
  start_time?: number;
  end_time?: number;
  page_size?: number;
  account?: string;
}

export interface FuturesAccountTransfersRequest {
  currency?: string;
  time_start?: number;
  time_end?: number;
  page: number;
  limit: number;
  recvWindow?: number;
}

export interface SubmitFuturesOrderRequest {
  symbol: string;
  client_order_id?: string;
  side: 1 | 2 | 3 | 4;
  mode?: 1 | 2 | 3 | 4;
  type?: 'limit' | 'market';
  leverage: string;
  open_type: 'cross' | 'isolated';
  size: number;
  price?: string;
  preset_take_profit_price_type?: 1 | 2;
  preset_stop_loss_price_type?: 1 | 2;
  preset_take_profit_price?: string;
  preset_stop_loss_price?: string;
  stp_mode?: number;
}

export interface UpdateFuturesLimitOrderRequest {
  symbol: string;
  order_id?: number;
  client_order_id?: string;
  price?: string;
  size?: string;
}

export interface SubmitFuturesPlanOrderRequest {
  symbol: string;
  type?: 'limit' | 'market' | 'take_profit' | 'stop_loss';
  side: 1 | 2 | 3 | 4;
  leverage: string;
  open_type: 'cross' | 'isolated';
  mode?: 1 | 2 | 3 | 4;
  size: number;
  trigger_price: string;
  executive_price?: string;
  price_way: 1 | 2;
  price_type: 1 | 2;
  plan_category?: 1 | 2;
  preset_take_profit_price_type?: 1 | 2;
  preset_stop_loss_price_type?: 1 | 2;
  preset_take_profit_price?: string;
  preset_stop_loss_price?: string;
}

export interface SubmitFuturesTransferRequest {
  currency: string; // Only USDT is supported
  amount: string; // Transfer amount, allowed range[0.01,10000000000]
  type: 'spot_to_contract' | 'contract_to_spot';
  recvWindow?: number; // Trade time limit, allowed range (0,60000], default: 5000 milliseconds
}

export interface SetFuturesLeverageRequest {
  symbol: string; // Symbol of the contract(like BTCUSDT)
  leverage?: string; // Order leverage
  open_type: 'cross' | 'isolated'; // Open type, required at close position
}

export interface TransferFuturesAssetsRequest {
  requestNo: string; // UUID, unique identifier, max length 64
  amount: string; // Transfer amount
  currency: 'USDT'; // Currently only USDT is supported
  subAccount: string; // Sub-Account username
}

export interface SubmitFuturesSubToMainSubFromSubRequest {
  requestNo: string; // UUID, unique identifier, max length 64
  amount: string; // Transfer amount
  currency: 'USDT'; // Currently only USDT is supported
}

export interface FuturesSubWalletRequest {
  subAccount: string; // Sub-Account username
  currency?: string; // Currency is optional
}

export interface FuturesSubTransfersRequest {
  subAccount: string;
  limit: number; // Range [1,100]
}

export interface FuturesAffiliateRebatesRequest {
  user_id?: number;
  page: number;
  size: number;
  currency: string;
  rebate_start_time?: number;
  rebate_end_time?: number;
  register_start_time?: number;
  register_end_time?: number;
}

export interface FuturesAffiliateTradesRequest {
  user_id?: number;
  page: number;
  type: 1 | 2;
  size: number;
  start_time: number;
  end_time: number;
}

export interface SubmitFuturesTPSLOrderRequest {
  symbol: string;
  type: 'take_profit' | 'stop_loss';
  side: 2 | 3;
  size?: number;
  trigger_price: string;
  executive_price: string;
  price_type: 1 | 2;
  plan_category?: 1 | 2;
  client_order_id?: string;
  category?: 'limit' | 'market';
}

export interface UpdateFuturesPlanOrderRequest {
  symbol: string;
  order_id?: string;
  trigger_price: string;
  executive_price?: string;
  price_type: 1 | 2;
  type: 'limit' | 'market';
}

export interface UpdateFuturesPresetPlanOrderRequest {
  order_id: string;
  symbol: string;
  preset_take_profit_price_type?: 1 | 2;
  preset_stop_loss_price_type?: 1 | 2;
  preset_take_profit_price?: string;
  preset_stop_loss_price?: string;
}

export interface UpdateFuturesTPSLOrderRequest {
  symbol: string;
  order_id?: string;
  client_order_id?: string;
  trigger_price: string;
  executive_price?: string;
  price_type: 1 | 2;
  plan_category?: 1 | 2;
  category?: 'limit' | 'market';
}

export interface SubmitFuturesTrailOrderRequest {
  symbol: string;
  side: 1 | 2 | 3 | 4;
  leverage: string;
  open_type: 'cross' | 'isolated';
  size: number;
  activation_price: string;
  callback_rate: string;
  activation_price_type: 1 | 2;
}
