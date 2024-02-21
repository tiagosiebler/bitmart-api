// Define the request parameters type
export interface GetFuturesContractDetailsParams {
  symbol?: string; // Optional as per API docs
}

// Define the request parameters type
export interface GetFuturesContractDepthParams {
  symbol: string; // Required as per API docs
}

// Define the request parameters type
export interface GetFuturesOpenInterestParams {
  symbol: string; // Required as per API docs
}

// Define the request parameters type
export interface GetFuturesFundingRateParams {
  symbol: string; // Required as per API docs
}

// Define the request parameters type
export interface GetFuturesKlinesParams {
  symbol: string; // Required as per API docs
  step?: number; // Optional as per API docs
  start_time: number; // Required as per API docs
  end_time: number; // Required as per API docs
}

// Define the request parameters type
export interface GetFuturesOrderParams {
    symbol: string; // Required as per API docs
    order_id: string; // Required as per API docs
  }

  // Define the request parameters type
  export interface GetFuturesOrderHistoryParams {
    symbol: string; // Required as per API docs
    start_time?: number; // Optional as per API docs
    end_time?: number; // Optional as per API docs
  }

// Define the request parameters type
export interface GetFuturesOpenOrdersParams {
    symbol?: string;
    type?: 'limit' | 'market' | 'trailing';
    order_state?: 'all' | 'partially_filled';
    limit?: number;
  }

  // Define the request parameters type
export interface GetFuturesPlanOrdersParams {
    symbol?: string;
    type?: 'limit' | 'market';
    limit?: number;
  }

  export interface GetFuturesPositionsParams {
    symbol?: string; // Optional as per API docs
  }

  export interface GetFuturesTradesParams {
    symbol: string; // Required as per API docs
    start_time?: number; // Optional
    end_time?: number; // Optional
  }

  export interface GetFuturesTransfersParams {
    currency?: string;
    time_start?: number;
    time_end?: number;
    page: number; // Required
    limit: number; // Required
    recvWindow?: number;
  }

  export interface SubmitFuturesOrderParams {
    symbol: string; // Required
    client_order_id?: string;
    side: 1 | 2 | 3 | 4; // Union type for order side
    mode?: 1 | 2 | 3 | 4; // Union type for order mode
    type?: 'limit' | 'market' | 'trailing';
    leverage: string; // Required
    open_type: 'cross' | 'isolated'; // Required
    size: number; // Required
    price?: string;
    activation_price?: string;
    callback_rate?: string;
    activation_price_type?: 1 | 2;
    preset_take_profit_price_type?: 1 | 2;
    preset_stop_loss_price_type?: 1 | 2;
    preset_take_profit_price?: string;
    preset_stop_loss_price?: string;
  }

  // Define the request parameters type for canceling a specific order
export interface CancelFuturesOrderParams {
    symbol: string; // Required as per API docs
    order_id: string; // Required as per API docs
  }

  // Define the request parameters type for canceling all orders
export interface CancelAllFuturesOrdersParams {
    symbol: string; // Required as per API docs
  }

  export interface SubmitFuturesPlanOrderParams {
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
  
  export interface CancelFuturesPlanOrderParams {
    symbol: string;
    order_id: string;
  }

  export interface SubmitFuturesTransferParams {
    currency: string; // Only USDT is supported
    amount: string; // Transfer amount, allowed range[0.01,10000000000]
    type: 'spot_to_contract' | 'contract_to_spot';
    recvWindow?: number; // Trade time limit, allowed range (0,60000], default: 5000 milliseconds
  }

  export interface SetFuturesLeverageParams {
    symbol: string; // Symbol of the contract(like BTCUSDT)
    leverage?: string; // Order leverage
    open_type: 'cross' | 'isolated'; // Open type, required at close position
  }

  // Define the request parameters type common for both transfers
export interface TransferFuturesAssetsParams {
    requestNo: string; // UUID, unique identifier, max length 64
    amount: string; // Transfer amount
    currency: string; // Currently only USDT is supported
    subAccount: string; // Sub-Account username
  }

  export interface SubmitFuturesSubToMainSubFromSubParams {
    requestNo: string; // UUID, unique identifier, max length 64
    amount: string; // Transfer amount
    currency: 'USDT'; // Currently only USDT is supported
  }

  export interface GetFuturesSubWalletParams {
    subAccount: string; // Sub-Account username
    currency?: string; // Currency is optional
  }

  export interface GetFuturesSubTransfersParams {
    subAccount: string;
    limit: number; // Range [1,100]
  }

  export interface GetFuturesSubTransferHistoryParams {
    limit: number; // Range [1,100]
  }
  export interface GetFuturesAffiliateRebatesParams {
    user_id: number; // Required
    page: number; // Required
    size: number; // Required
    start_time?: number; // Optional
    end_time?: number; // Optional
  }

  export interface GetFuturesAffiliateTradesParams {
    user_id: number; // Required
    type: 1 | 2; // Required, with positive numbers for U-based and Coin-based
    page: number; // Required
    size: number; // Required
    start_time?: number; // Optional
    end_time?: number; // Optional
  }
  
  