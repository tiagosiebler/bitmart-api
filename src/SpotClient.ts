import { AxiosRequestConfig } from 'axios';
import { BaseRestClient, RestClientType } from './lib/BaseRestClient.js';
import { RestClientOptions } from './lib/requestUtils.js';
import { SpotBrokerRebateRequest } from './types/request/spot.types.js';
import { APIResponse } from './types/response/shared.js';
import {
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

  getSystemServiceStatus(): Promise<APIResponse<any>> {
    return this.get('system/service');
  }

  /**
   *
   * Public Market Data Endpoints
   *
   **/

  getSpotCurrenciesV1(): Promise<APIResponse<any>> {
    return this.get('spot/v1/currencies');
  }

  getSpotTradingPairsV1(): Promise<APIResponse<any>> {
    return this.get('spot/v1/symbols');
  }

  getSymbolDetails(): Promise<APIResponse<any>> {
    return this.get('spot/v1/symbols/details');
  }

  getSpotTickers(): Promise<APIResponse<any>> {
    return this.get('spot/quotation/v3/tickers');
  }

  getSpotTicker(params?: { symbol: string }): Promise<APIResponse<any>> {
    return this.get('spot/quotation/v3/ticker', params);
  }

  getSpotLatestKlineV3(params: {
    symbol: string;
    before?: number;
    after: number;
    step?: number;
    limit?: number;
  }): Promise<APIResponse<any>> {
    return this.get('spot/quotation/v3/lite-klines', params);
  }

  getKlines(): Promise<APIResponse<any>> {
    return this.get(
      'spot/quotation/v3/klines?symbol=BMX_ETH&step=15&before=1525760116&after=1525769116&limit=100',
    );
  }

  getBooks(): Promise<APIResponse<any>> {
    return this.get('spot/quotation/v3/books?symbol=BTC_USDT&limit=1');
  }

  getTrades(): Promise<APIResponse<any>> {
    return this.get('spot/quotation/v3/trades?symbol=BMX_ETH&limit=10');
  }

  /**
   *
   * Public Market Data Endpoints (History Version)
   *
   **/

  getV2Ticker(): Promise<APIResponse<any>> {
    return this.get('spot/v2/ticker');
  }

  getTickerDetail(): Promise<APIResponse<any>> {
    return this.get('spot/v1/ticker_detail?symbol=BTC_USDT');
  }

  getSteps(): Promise<APIResponse<any>> {
    return this.get('spot/v1/steps');
  }

  getSymbolKline(): Promise<APIResponse<any>> {
    return this.get(
      'spot/v1/symbols/kline?symbol=BMX_ETH&step=15&from=1525760116&to=1525769116',
    );
  }

  getSymbolBook(): Promise<APIResponse<any>> {
    return this.get('spot/v1/symbols/book?symbol=BMX_ETH&precision=6');
  }

  getSymbolTrades(): Promise<APIResponse<any>> {
    return this.get('spot/v1/symbols/trades?symbol=BMX_ETH');
  }

  /**
   *
   * Funding Account Endpoints
   *
   **/

  getAccountBalance(): Promise<APIResponse<any>> {
    return this.getPrivate('account/v1/wallet');
  }

  getCurrenciesAccount(): Promise<APIResponse<any>> {
    return this.get('account/v1/currencies');
  }

  getSpotWallet(): Promise<APIResponse<any>> {
    return this.getPrivate('spot/v1/wallet');
  }

  getDepositAddress(): Promise<APIResponse<any>> {
    return this.getPrivate('account/v1/deposit/address');
  }

  getWithdrawCharge(): Promise<APIResponse<any>> {
    return this.getPrivate('account/v1/withdraw/charge');
  }

  submitWithdrawal(params: {
    currency: string;
    amount: string;
    destination: 'To Digital Address';
    address: string;
    address_memo?: string;
  }): Promise<APIResponse<any>> {
    return this.postPrivate('account/v1/withdraw/apply', params);
  }

  getDepositWithdrawHistory(): Promise<APIResponse<any>> {
    return this.get('account/v2/deposit-withdraw/history');
  }

  getDepositWithdrawDetail(): Promise<APIResponse<any>> {
    return this.get('account/v1/deposit-withdraw/detail');
  }

  getIsolatedMarginAccount(): Promise<APIResponse<any>> {
    return this.get('spot/v1/margin/isolated/account');
  }

  postIsolatedMarginTransfer(): Promise<APIResponse<any>> {
    return this.post('spot/v1/margin/isolated/transfer');
  }

  getUserFee(): Promise<APIResponse<any>> {
    return this.get('spot/v1/user_fee');
  }

  getTradeFee(): Promise<APIResponse<any>> {
    return this.get('spot/v1/trade_fee');
  }

  submitSpotOrder(params: {
    symbol: string;
    side: 'buy' | 'sell';
    type: 'limit' | 'market' | 'limit_maker' | 'ioc';
    client_order_id?: string;
    size?: string;
    price?: string;
    notional?: string;
  }): Promise<APIResponse<any>> {
    return this.postPrivate('spot/v2/submit_order', params);
  }

  postMarginSubmitOrder(): Promise<APIResponse<any>> {
    return this.post('spot/v1/margin/submit_order');
  }

  postBatchOrders(): Promise<APIResponse<any>> {
    return this.post('spot/v2/batch_orders');
  }

  postCancelOrder(): Promise<APIResponse<any>> {
    return this.post('spot/v3/cancel_order');
  }

  postCancelOrders(): Promise<APIResponse<any>> {
    return this.post('spot/v1/cancel_orders');
  }

  postQueryOrder(): Promise<APIResponse<any>> {
    return this.post('spot/v4/query/order');
  }

  postQueryClientOrder(): Promise<APIResponse<any>> {
    return this.post('spot/v4/query/client-order');
  }

  postQueryOpenOrders(): Promise<APIResponse<any>> {
    return this.post('spot/v4/query/open-orders');
  }

  postQueryHistoryOrders(): Promise<APIResponse<any>> {
    return this.post('spot/v4/query/history-orders');
  }

  postQueryTrades(): Promise<APIResponse<any>> {
    return this.post('spot/v4/query/trades');
  }

  postQueryOrderTrades(): Promise<APIResponse<any>> {
    return this.post('spot/v4/query/order-trades');
  }

  postSpotSubmitOrder(): Promise<APIResponse<any>> {
    return this.post('spot/v1/submit_order');
  }

  postSpotBatchOrders(): Promise<APIResponse<any>> {
    return this.post('spot/v1/batch_orders');
  }

  postSpotCancelOrder(): Promise<APIResponse<any>> {
    return this.post('spot/v2/cancel_order');
  }

  getV2OrderDetail(): Promise<APIResponse<any>> {
    return this.get('spot/v2/order_detail');
  }

  getV3Orders(): Promise<APIResponse<any>> {
    return this.get('spot/v3/orders');
  }

  getV2Trades(): Promise<APIResponse<any>> {
    return this.get('spot/v2/trades');
  }

  postIsolatedMarginBorrow(): Promise<APIResponse<any>> {
    return this.post('spot/v1/margin/isolated/borrow');
  }

  postIsolatedMarginRepay(): Promise<APIResponse<any>> {
    return this.post('spot/v1/margin/isolated/repay');
  }

  getIsolatedMarginBorrowRecord(): Promise<APIResponse<any>> {
    return this.get('spot/v1/margin/isolated/borrow_record');
  }

  getIsolatedMarginRepayRecord(): Promise<APIResponse<any>> {
    return this.get('spot/v1/margin/isolated/repay_record');
  }

  getIsolatedMarginPairs(): Promise<APIResponse<any>> {
    return this.get('spot/v1/margin/isolated/pairs');
  }

  postSubToMain(): Promise<APIResponse<any>> {
    return this.post('account/sub-account/main/v1/sub-to-main');
  }

  postSubToMainSub(): Promise<APIResponse<any>> {
    return this.post('account/sub-account/sub/v1/sub-to-main');
  }

  postMainToSub(): Promise<APIResponse<any>> {
    return this.post('account/sub-account/main/v1/main-to-sub');
  }

  postSubToSubMain(): Promise<APIResponse<any>> {
    return this.post('account/sub-account/main/v1/sub-to-sub');
  }

  postSubToSubSub(): Promise<APIResponse<any>> {
    return this.post('account/sub-account/sub/v1/sub-to-sub');
  }

  postSubToSub(): Promise<APIResponse<any>> {
    return this.post('account/sub-account/sub/v1/sub-to-sub');
  }

  getTransferList(): Promise<APIResponse<any>> {
    return this.get('account/sub-account/main/v1/transfer-list');
  }

  getTransferHistory(): Promise<APIResponse<any>> {
    return this.get('account/sub-account/v1/transfer-history');
  }

  getMainWallet(): Promise<APIResponse<any>> {
    return this.get('account/sub-account/main/v1/wallet');
  }

  getSubaccountList(): Promise<APIResponse<any>> {
    return this.get('account/sub-account/main/v1/subaccount-list');
  }

  getBrokerRebate(
    params?: SpotBrokerRebateRequest,
  ): Promise<APIResponse<SpotBrokerRebateResult>> {
    return this.getPrivate('spot/v1/broker/rebate', params);
  }
}
