import { AxiosRequestConfig } from 'axios';
import { BaseRestClient, RestClientType } from './lib/BaseRestClient.js';
import { RestClientOptions } from './lib/requestUtils.js';
import { SpotBrokerRebateRequest } from './types/request/spot.types.js';
import { APIResponse } from './types/response/shared.js';
import {
  GetServiceSystemStatusResponse,
  SpotBrokerRebateResult,
  SystemTimeResult,
} from './types/response/spot.types.js';

/**
 *
 */
export class SpotClient extends BaseRestClient {
  constructor(
    restClientOptions: RestClientOptions = {},
    requestOptions: AxiosRequestConfig = {},
  ) {
    super(restClientOptions, requestOptions);
    return this;
  }

  getClientType(): RestClientType {
    return 'spot';
  }

  /**
   *
   * System Status Endpoints
   *
   **/

  getSystemTime(): Promise<APIResponse<SystemTimeResult>> {
    return this.get('system/time');
  }

  getSystemStatus(): Promise<
    APIResponse<{
      service: Array<{
        title: string;
        service_type: string;
        status: number;
        start_time: number;
        end_time: number;
      }>;
    }>
  > {
    return this.get('system/service');
  }

  /**
   *
   * Public Market Data Endpoints
   *
   **/

  getSpotCurrenciesV1(): Promise<
    APIResponse<{
      currencies: Array<{
        id: string;
        name: string;
        withdraw_enabled: boolean;
        deposit_enabled: boolean;
      }>;
    }>
  > {
    return this.get('spot/v1/currencies');
  }

  getSpotTradingPairsV1(): Promise<
    APIResponse<{
      symbols: Array<{
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
      }>;
    }>
  > {
    return this.get('spot/v1/symbols');
  }

  getSpotTradingPairDetailsV1(): Promise<
    APIResponse<{
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
    }>
  > {
    return this.get('spot/v1/symbols/details');
  }

  getSpotTickersV3(): Promise<
    APIResponse<{
      tickers: Array<{
        symbol: string;
        last_price: string;
        quote_volume_24h: string;
        base_volume_24h: string;
        high_24h: string;
        low_24h: string;
        open_24h: string;
        close_24h: string;
        best_ask: string;
        best_bid: string;
      }>;
    }>
  > {
    return this.get('spot/quotation/v3/tickers');
  }

  getSpotTickerV3(params?: { symbol: string }): Promise<
    APIResponse<{
      ticker: {
        symbol: string;
        last_price: string;
        quote_volume_24h: string;
        base_volume_24h: string;
        high_24h: string;
        low_24h: string;
        open_24h: string;
        close_24h: string;
        best_ask: string;
        best_bid: string;
      };
    }>
  > {
    return this.get('spot/quotation/v3/ticker', params);
  }

  getSpotLatestKlineV3(params: {
    symbol: string;
    before?: number;
    after?: number;
    step?: number;
    limit?: number;
  }): Promise<
    APIResponse<
      Array<
        [
          string, // t - timestamp
          string, // o - open price
          string, // h - highest price
          string, // l - lowest price
          string, // c - close price
          string, // v - trading volume, with a unit of currency
          string, // qv - trading volume, the value is the quantity in quote currency
        ]
      >
    >
  > {
    return this.get('spot/quotation/v3/lite-klines', params);
  }

  getSpotHistoryKlineV3(params: {
    symbol: string;
    before?: number;
    after?: number;
    step?: number;
    limit?: number;
  }): Promise<
    APIResponse<
      Array<
        [
          string, // t - timestamp
          string, // o - open price
          string, // h - highest price
          string, // l - lowest price
          string, // c - close price
          string, // v - trading volume, with a unit of currency
          string, // qv - trading volume, the value is the quantity in quote currency
        ]
      >
    >
  > {
    return this.get('spot/quotation/v3/history-klines', params);
  }

  getSpotOrderBookDepthV3(params: { symbol: string; limit?: number }): Promise<
    APIResponse<{
      ts: string;
      symbol: string;
      asks: Array<[string, string]>;
      bids: Array<[string, string]>;
    }>
  > {
    return this.get('spot/quotation/v3/books', params);
  }

  getSpotRecentTrades(params: { symbol: string; limit?: number }): Promise<
    APIResponse<
      Array<
        [
          string, // symbol
          string, // ts
          string, // price
          string, // size
          string, // side
        ]
      >
    >
  > {
    return this.get('spot/quotation/v3/trades', params);
  }

  /**
   *
   * Public Market Data Endpoints (History Version)
   *
   **/

  getSpotTickersV2(): Promise<
    APIResponse<{
      tickers: Array<{
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
        url: string;
        timestamp: number;
      }>;
    }>
  > {
    return this.get('spot/v2/ticker');
  }

  getSpotTickerV1(params: { symbol: string }): Promise<
    APIResponse<{
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
    }>
  > {
    return this.get('spot/v1/ticker_detail', params);
  }

  getSpotKLineStepsV1(): Promise<
    APIResponse<{
      steps: number[];
    }>
  > {
    return this.get('spot/v1/steps');
  }

  getSpotKlinesV1(params: {
    symbol: string;
    from: number;
    to: number;
    step?: number;
  }): Promise<
    APIResponse<
      Array<{
        timestamp: number;
        open: string;
        high: string;
        low: string;
        close: string;
        last_price: string;
        volume: string;
        quote_volume: string;
      }>
    >
  > {
    return this.get('spot/v1/symbols/kline', params);
  }

  getSpotOrderBookDepthV1(params: {
    symbol: string;
    precision?: string;
    size?: number;
  }): Promise<
    APIResponse<{
      timestamp: number;
      buys: Array<{
        amount: string;
        total: string;
        price: string;
        count: string;
      }>;
      sells: Array<{
        amount: string;
        total: string;
        price: string;
        count: string;
      }>;
    }>
  > {
    return this.get('spot/v1/symbols/book', params);
  }

  getSpotRecentTradesV1(params: { symbol: string; n?: number }): Promise<
    APIResponse<{
      trades: Array<{
        amount: string;
        order_time: number;
        price: string;
        count: string;
        type: string;
      }>;
    }>
  > {
    return this.get('spot/v1/symbols/trades', params);
  }

  /**
   *
   * Funding Account Endpoints
   *
   **/

  getAccountBalancesV1(params?: { currency?: string }): Promise<
    APIResponse<{
      wallet: Array<{
        currency: string;
        name: string;
        available: string;
        frozen: string;
      }>;
    }>
  > {
    return this.getPrivate('account/v1/wallet', params);
  }

  getAccountCurrenciesV1(): Promise<
    APIResponse<{
      currencies: Array<{
        currency: string;
        name: string;
        contract_address: string | null;
        network: string;
        withdraw_enabled: boolean;
        deposit_enabled: boolean;
        withdraw_minsize: string | null;
        withdraw_minfee: string | null;
      }>;
    }>
  > {
    return this.get('account/v1/currencies');
  }

  getSpotWalletBalanceV1(): Promise<
    APIResponse<{
      wallet: Array<{
        id: string;
        available: string;
        name: string;
        frozen: string;
      }>;
    }>
  > {
    return this.getPrivate('spot/v1/wallet');
  }

  getAccountDepositAddressV1(): Promise<APIResponse<any>> {
    return this.getPrivate('account/v1/deposit/address');
  }

  getAccountWithdrawQuotaV1(): Promise<APIResponse<any>> {
    return this.getPrivate('account/v1/withdraw/charge');
  }

  submitWithdrawalV1(params: {
    currency: string;
    amount: string;
    destination: 'To Digital Address';
    address: string;
    address_memo?: string;
  }): Promise<APIResponse<any>> {
    return this.postPrivate('account/v1/withdraw/apply', params);
  }

  getDepositWithdrawHistoryV2(params?: {
    currency?: string;
    operation_type: 'deposit' | 'withdraw';
    N: number;
  }): Promise<
    APIResponse<{
      records: Array<{
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
      }>;
    }>
  > {
    return this.get('account/v2/deposit-withdraw/history', params);
  }

  getDepositWithdrawDetailsV1(params: { id: string }): Promise<
    APIResponse<{
      record: {
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
      };
    }>
  > {
    return this.get('account/v1/deposit-withdraw/detail', params);
  }

  getMarginAccountDetailsV1(params?: { symbol?: string }): Promise<
    APIResponse<{
      symbols: Array<{
        symbol: string;
        risk_rate: string;
        risk_level: string;
        buy_enabled: boolean;
        sell_enabled: boolean;
        liquidate_price: string;
        liquidate_rate: string;
        base: {
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
        };
        quote: {
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
        };
      }>;
    }>
  > {
    return this.get('spot/v1/margin/isolated/account', params);
  }

  submitMarginTransferV1(params: {
    symbol: string;
    currency: string;
    amount: string;
    side: 'in' | 'out';
  }): Promise<
    APIResponse<{
      transfer_id: string;
    }>
  > {
    return this.post('spot/v1/margin/isolated/transfer', params);
  }

  getBasicFeeRateV1(): Promise<
    APIResponse<{
      user_rate_type: number;
      level: string;
      taker_fee_rate_A: string;
      maker_fee_rate_A: string;
      taker_fee_rate_B: string;
      maker_fee_rate_B: string;
      taker_fee_rate_C: string;
      maker_fee_rate_C: string;
    }>
  > {
    return this.get('spot/v1/user_fee');
  }

  getActualFeeRateV1(params: { symbol: string }): Promise<
    APIResponse<{
      symbol: string;
      buy_taker_fee_rate: string;
      sell_taker_fee_rate: string;
      buy_maker_fee_rate: string;
      sell_maker_fee_rate: string;
    }>
  > {
    return this.get('spot/v1/trade_fee', params);
  }

  /**
   *
   * Spot/Margin Trading Endpoints
   *
   **/

  submitSpotOrderV2(params: {
    symbol: string;
    side: 'buy' | 'sell';
    type: 'limit' | 'market' | 'limit_maker' | 'ioc';
    client_order_id?: string;
    size?: string;
    price?: string;
    notional?: string;
  }): Promise<
    APIResponse<{
      order_id: string;
    }>
  > {
    return this.post('spot/v2/submit_order', params);
  }

  submitMarginOrderV1(params: {
    symbol: string;
    side: 'buy' | 'sell';
    type: 'limit' | 'market' | 'limit_maker' | 'ioc';
    clientOrderId?: string;
    size: string;
    price?: string;
    notional?: string;
  }): Promise<
    APIResponse<{
      order_id: number; // Note: The response type for order_id is number for margin orders
    }>
  > {
    return this.post('spot/v1/margin/submit_order', params);
  }

  submitBatchOrderV2(params: {
    order_params: Array<{
      symbol: string;
      side: 'buy' | 'sell';
      type: 'limit' | 'market' | 'limit_maker' | 'ioc';
      client_order_id?: string;
      size: string;
      price?: string;
      notional?: string;
    }>;
  }): Promise<
    APIResponse<{
      responses: Array<{
        code: number;
        msg: string;
        data?: {
          order_id: string;
        };
      }>;
    }>
  > {
    return this.post('spot/v2/batch_orders', params);
  }

  cancelOrderV3(
    params: {
      symbol: string;
      order_id?: string;
      client_order_id?: string;
    } & ({ order_id: string } | { client_order_id: string }),
  ): Promise<
    APIResponse<{
      result: boolean;
    }>
  > {
    // This function sends a POST request to the BitMart API to cancel a specified unfinished order
    return this.post('spot/v3/cancel_order', params);
  }

  /**
   * Cancel all outstanding orders in the specified side for a trading pair
   */
  cancelOrdersForSideV1(params: {
    symbol?: string;
    side?: 'buy' | 'sell';
  }): Promise<APIResponse<{}>> {
    return this.post('spot/v1/cancel_orders', params);
  }

  getSpotOrderByIdV4(params: {
    orderId: string;
    queryState?: string;
    recvWindow?: number;
  }): Promise<
    APIResponse<{
      orderId: string;
      clientOrderId: string;
      symbol: string;
      side: string;
      orderMode: string;
      type: string;
      state: string;
      price: string;
      priceAvg: string;
      size: string;
      filledSize: string;
      notional: string;
      filledNotional: string;
      createTime: number;
      updateTime: number;
    }>
  > {
    return this.post('spot/v4/query/order', params);
  }

  getSpotOrderByClientOrderIdV4(params: {
    clientOrderId: string;
    queryState?: string;
    recvWindow?: number;
  }): Promise<
    APIResponse<{
      orderId: string;
      clientOrderId: string;
      symbol: string;
      side: string;
      orderMode: string;
      type: string;
      state: string;
      price: string;
      priceAvg: string;
      size: string;
      filledSize: string;
      notional: string;
      filledNotional: string;
      createTime: number;
      updateTime: number;
    }>
  > {
    return this.post('spot/v4/query/client-order', params);
  }

  getSpotOpenOrdersV4(params?: {
    symbol?: string;
    orderMode?: 'spot' | 'iso_margin';
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
  }): Promise<
    APIResponse<
      Array<{
        orderId: string;
        clientOrderId: string;
        symbol: string;
        side: 'buy' | 'sell';
        orderMode: 'spot' | 'iso_margin';
        type: 'limit' | 'market' | 'limit_maker' | 'ioc';
        state: 'new' | 'partially_filled';
        price: string;
        priceAvg: string;
        size: string;
        filledSize: string;
        notional: string;
        filledNotional: string;
        createTime: number;
        updateTime: number;
      }>
    >
  > {
    return this.post('spot/v4/query/open-orders', params);
  }

  getSpotHistoricOrdersV4(params?: {
    symbol?: string;
    orderMode?: 'spot' | 'iso_margin';
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
  }): Promise<
    APIResponse<
      Array<{
        orderId: string;
        clientOrderId: string;
        symbol: string;
        side: 'buy' | 'sell';
        orderMode: 'spot' | 'iso_margin';
        type: 'limit' | 'market' | 'limit_maker' | 'ioc';
        state: 'filled' | 'canceled' | 'partially_canceled';
        price: string;
        priceAvg: string;
        size: string;
        filledSize: string;
        notional: string;
        filledNotional: string;
        createTime: number;
        updateTime: number;
      }>
    >
  > {
    return this.post('spot/v4/query/history-orders', params);
  }

  /**
   * Account Trade List(v4)
   */
  getSpotTransactionsV4(params?: {
    symbol?: string;
    orderMode?: 'spot' | 'iso_margin';
    startTime?: number;
    endTime?: number;
    limit?: number;
    recvWindow?: number;
  }): Promise<
    APIResponse<
      Array<{
        tradeId: string;
        orderId: string;
        clientOrderId: string;
        symbol: string;
        side: 'buy' | 'sell';
        orderMode: 'spot' | 'iso_margin';
        type: 'limit' | 'market' | 'limit_maker' | 'ioc';
        price: string;
        size: string;
        notional: string;
        fee: string;
        feeCoinName: string;
        tradeRole: 'taker' | 'maker';
        createTime: number;
        updateTime: number;
      }>
    >
  > {
    return this.post('spot/v4/query/trades', params);
  }

  /**
   * Get all transaction records for a single order
   */
  getSpotOrderTransactionsV4(params: {
    orderId: string;
    recvWindow?: number;
  }): Promise<
    APIResponse<
      Array<{
        tradeId: string;
        orderId: string;
        clientOrderId: string;
        symbol: string;
        side: 'buy' | 'sell';
        orderMode: 'spot' | 'iso_margin';
        type: 'limit' | 'market' | 'limit_maker' | 'ioc';
        price: string;
        size: string;
        notional: string;
        fee: string;
        feeCoinName: string;
        tradeRole: 'taker' | 'maker';
        createTime: number;
        updateTime: number;
      }>
    >
  > {
    return this.post('spot/v4/query/order-trades', params);
  }

  /**
   *
   * Margin Loan Endpoints (History versions)
   *
   **/

  marginBorrowV1(params: {
    symbol: string;
    currency: string;
    amount: string;
  }): Promise<APIResponse<{ borrow_id: string }>> {
    return this.post('spot/v1/margin/isolated/borrow', params);
  }

  marginRepayV1(params: {
    symbol: string;
    currency: string;
    amount: string;
  }): Promise<APIResponse<{ repay_id: string }>> {
    return this.post('spot/v1/margin/isolated/repay', params);
  }

  getMarginBorrowRecordV1(params: {
    symbol: string;
    borrow_id?: string;
    start_time?: number;
    end_time?: number;
    N?: number;
  }): Promise<
    APIResponse<{
      records: Array<{
        borrow_id: string;
        symbol: string;
        currency: string;
        borrow_amount: string;
        daily_interest: string;
        hourly_interest: string;
        interest_amount: string;
        create_time: number;
      }>;
    }>
  > {
    return this.get('spot/v1/margin/isolated/borrow_record', params);
  }

  getMarginRepayRecordV1(params: {
    symbol: string;
    repay_id?: string;
    currency?: string;
    start_time?: number;
    end_time?: number;
    N?: number;
  }): Promise<
    APIResponse<{
      records: Array<{
        repay_id: string;
        repay_time: number;
        symbol: string;
        currency: string;
        repaid_amount: string;
        repaid_principal: string;
        repaid_interest: string;
      }>;
    }>
  > {
    return this.get('spot/v1/margin/isolated/repay_record', params);
  }

  /**
   * Get Trading Pair Borrowing Rate and Amount
   */
  getMarginBorrowingRatesV1(params?: { symbol?: string }): Promise<
    APIResponse<{
      symbols: Array<{
        symbol: string;
        max_leverage: string;
        symbol_enabled: boolean;
        base: {
          currency: string;
          daily_interest: string;
          hourly_interest: string;
          max_borrow_amount: string;
          min_borrow_amount: string;
          borrowable_amount: string;
        };
        quote: {
          currency: string;
          daily_interest: string;
          hourly_interest: string;
          max_borrow_amount: string;
          min_borrow_amount: string;
          borrowable_amount: string;
        };
      }>;
    }>
  > {
    return this.get('spot/v1/margin/isolated/pairs', params);
  }

  /**
   *
   * Subaccount Endpoints
   *
   **/

  /**
   * Sub-Account to Main-Account (For Main Account)
   */
  submitMainTransferSubToMainV1(params: {
    requestNo: string;
    amount: string;
    currency: string;
    subAccount: string;
  }): Promise<APIResponse<{}>> {
    return this.post('account/sub-account/main/v1/sub-to-main', params);
  }

  /**
   * Sub-Account to Main-Account (For Sub-Account)
   */
  submitSubTranfserSubToMainV1(params: {
    requestNo: string;
    amount: string;
    currency: string;
  }): Promise<APIResponse<{}>> {
    return this.post('account/sub-account/sub/v1/sub-to-main', params);
  }

  submitMainTransferMainToSubV1(params: {
    requestNo: string;
    amount: string;
    currency: string;
    subAccount: string;
  }): Promise<APIResponse<{}>> {
    return this.post('account/sub-account/main/v1/main-to-sub', params);
  }

  submitMainTransferSubToSubV1(params: {
    requestNo: string;
    amount: string;
    currency: string;
    fromAccount: string;
    toAccount: string;
  }): Promise<APIResponse<{}>> {
    return this.post('account/sub-account/main/v1/sub-to-sub', params);
  }

  submitSubTransferSubToSubV1(params: {
    requestNo: string;
    amount: string;
    currency: string;
    subAccount: string;
  }): Promise<APIResponse<{}>> {
    return this.post('account/sub-account/sub/v1/sub-to-sub', params);
  }

  getSubTransfersV1(params: {
    moveType: 'spot to spot';
    accountName?: string;
    N: number;
  }): Promise<
    APIResponse<{
      total: number;
      historyList: Array<{
        fromAccount: string;
        fromWalletType: 'spot';
        toAccount: string;
        toWalletType: 'spot';
        currency: string;
        amount: string;
        submissionTime: number;
      }>;
    }>
  > {
    return this.get('account/sub-account/main/v1/transfer-list', params);
  }

  getAccountSubTransfersV1(params: {
    moveType: 'spot to spot';
    N: number;
  }): Promise<
    APIResponse<{
      total: number;
      historyList: Array<{
        fromAccount: string;
        fromWalletType: 'spot';
        toAccount: string;
        toWalletType: 'spot';
        currency: string;
        amount: string;
        submissionTime: number;
      }>;
    }>
  > {
    return this.get('account/sub-account/v1/transfer-history', params);
  }

  getSubSpotWalletBalancesV1(params: {
    subAccount: string;
    currency?: string;
  }): Promise<
    APIResponse<{
      wallet: Array<{
        currency: string;
        name: string;
        available: string;
        frozen: string;
      }>;
    }>
  > {
    return this.get('account/sub-account/main/v1/wallet', params);
  }

  getSubAccountsV1(): Promise<
    APIResponse<{
      subAccountList: Array<{
        accountName: string;
        status: number;
      }>;
    }>
  > {
    return this.get('account/sub-account/main/v1/subaccount-list');
  }

  /**
   *
   * Rebate Endpoints
   *
   **/

  getBrokerRebate(
    params?: SpotBrokerRebateRequest,
  ): Promise<APIResponse<SpotBrokerRebateResult>> {
    return this.getPrivate('spot/v1/broker/rebate', params);
  }
}
