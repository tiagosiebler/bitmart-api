// Define the response data type
export interface GetFuturesContractDetailsResult {
  symbols: {
    symbol: string;
    product_type: number;
    open_timestamp: number;
    expire_timestamp: number;
    settle_timestamp: number;
    base_currency: string;
    quote_currency: string;
    last_price: string;
    volume_24h: string;
    turnover_24h: string;
    index_price: string;
    index_name: string;
    contract_size: string;
    min_leverage: string;
    max_leverage: string;
    price_precision: string;
    vol_precision: string;
    max_volume: string;
    min_volume: string;
    funding_rate: string;
    expected_funding_rate: string;
    open_interest: string;
    open_interest_value: string;
  }[];
}

// Define the response data type
export interface GetFuturesContractDepthResult {
  asks: [string, string, string][];
  bids: [string, string, string][];
  timestamp: number;
  symbol: string;
}

// Define the response data type
export interface GetFuturesOpenInterestResult {
  timestamp: number;
  symbol: string;
  open_interest: string;
  open_interest_value: string;
}

// Define the response data type
export interface GetFuturesFundingRateResult {
  timestamp: number;
  symbol: string;
  rate_value: string;
  expected_rate: string;
}

// Define the response data type
export interface GetFuturesKlinesResult {
  timestamp: number;
  open_price: string;
  close_price: string;
  high_price: string;
  low_price: string;
  volume: string;
}

// Define the response data type
export type GetFuturesAssetsResult = {
  currency: string;
  position_deposit: string;
  frozen_balance: string;
  available_balance: string;
  equity: string;
  unrealized: string;
}[];

// Define the response data type
export interface GetFuturesOrderResult {
  order_id: string;
  client_order_id: string;
  price: string;
  size: string;
  symbol: string;
  state: 1 | 2 | 4; // Union type for order status
  side: 1 | 2 | 3 | 4; // Union type for order side
  type: 'limit' | 'market' | 'liquidate' | 'bankruptcy' | 'adl'; // Union type for order type
  leverage: string;
  open_type: 'cross' | 'isolated'; // Union type for open type
  deal_avg_price: string;
  deal_size: string;
  create_time: number;
  update_time: number;
  // Optional fields based on the provided documentation
  activation_price?: string;
  callback_rate?: string;
  activation_price_type?: 1 | 2; // Union type for activation price type
  executive_order_id?: string;
  preset_take_profit_price_type?: 1 | 2; // Union type for pre-set TP price type
  preset_stop_loss_price_type?: 1 | 2; // Union type for pre-set SL price type
  preset_take_profit_price?: string;
  preset_stop_loss_price?: string;
}

// Define the response data type
export interface GetFuturesOrderHistoryResult {
  order_id: string;
  client_order_id: string;
  price: string;
  size: string;
  symbol: string;
  state: 2 | 4; // Adjusted to positive numbers as per instructions
  side: 1 | 2 | 3 | 4; // Adjusted to positive numbers as per instructions
  type: 'limit' | 'market' | 'liquidate' | 'bankruptcy' | 'adl' | 'trailing';
  leverage: string;
  open_type: 'cross' | 'isolated';
  deal_avg_price: string;
  deal_size: string;
  create_time: number;
  update_time: number;
  // Optional fields based on the provided documentation
  activation_price?: string;
  callback_rate?: string;
  activation_price_type?: 1 | 2; // Adjusted to positive numbers as per instructions
  executive_order_id?: string;
}

// Define the response data type
export type GetFuturesOpenOrdersResult = {
  order_id: string;
  client_order_id: string;
  price: string;
  size: string;
  symbol: string;
  state: 2 | 4; // Adjusted to positive numbers as per instructions
  side: 1 | 2 | 3 | 4; // Adjusted to positive numbers as per instructions
  type: 'limit' | 'market' | 'trailing';
  leverage: string;
  open_type: 'cross' | 'isolated';
  deal_avg_price: string;
  deal_size: string;
  create_time: number;
  update_time: number;
  activation_price?: string;
  callback_rate?: string;
  activation_price_type?: 1 | 2; // Adjusted to positive numbers as per instructions
}[];

// Define the response data type
export type GetFuturesPlanOrdersResult = {
  order_id: string;
  client_order_id: string;
  executive_price: string;
  trigger_price: string;
  size: string;
  symbol: string;
  state: number;
  side: 1 | 2 | 3 | 4;
  mode: number;
  price_way: number;
  price_type: number;
  plan_category: 1 | 2;
  type: 'plan' | 'take_profit' | 'stop_loss';
  leverage: string;
  open_type: 'cross' | 'isolated';
  create_time: number;
  update_time: number;
}[];

export type GetFuturesPositionsResult = {
  symbol: string;
  leverage: string;
  timestamp: number;
  current_fee: string;
  open_timestamp: number;
  current_value: string;
  mark_price: string;
  position_value: string;
  position_cross: string;
  maintenance_margin: string;
  close_vol: string;
  close_avg_price: string;
  open_avg_price: string;
  entry_price: string;
  current_amount: string;
  unrealized_value: string;
  realized_value: string;
  position_type: 1 | 2; // Adjusted to positive numbers as requested
}[];

export type GetFuturesTradesResult = {
  order_id: string;
  trade_id: string;
  symbol: string;
  side:
    | 'buy_open_long'
    | 'buy_close_short'
    | 'sell_close_long'
    | 'sell_open_short';
  price: string;
  vol: string;
  exec_type: 'Taker' | 'Maker';
  profit: boolean;
  realised_profit: string;
  paid_fees: string;
  create_time: number;
}[];

export interface GetFuturesTransfersResult {
  records: {
    transfer_id: string;
    currency: string;
    amount: string;
    type: 'spot_to_contract' | 'contract_to_spot';
    state: 'PROCESSING' | 'FINISHED' | 'FAILED';
    timestamp: number;
  }[];
}

export interface SubmitFuturesOrderResult {
  order_id: number;
  price: string; // Note: "market price" for market type orders
}

export interface SubmitFuturesPlanOrderResult {
  order_id: number;
}

export interface SubmitFuturesTransferResult {
  currency: string;
  amount: string;
}

export interface SetFuturesLeverageResult {
  symbol: string;
  leverage: string;
  open_type: 'cross' | 'isolated';
  max_value: string; // Maximum leverage
}

export interface GetFuturesSubWalletResult {
  wallet: {
    currency: string; // Token symbol, e.g., 'BTC'
    name: string; // Token name, e.g., 'Bitcoin'
    available: string; // Available Balance
    frozen: string; // Frozen Balance
  }[];
}

export type GetFuturesSubTransfersResult = {
  fromAccount: string;
  toAccount: string;
  toWalletType: 'future';
  fromWalletType: 'future';
  currency: string;
  amount: string;
  submissionTime: number;
}[];
