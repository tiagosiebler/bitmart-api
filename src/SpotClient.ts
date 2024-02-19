import { AxiosRequestConfig } from 'axios';
import { BaseRestClient, RestClientType } from './lib/BaseRestClient.js';
import { RestClientOptions } from './lib/requestUtils.js';
import { SpotBrokerRebateRequest } from './types/request/spot.types.js';
import { APIResponse } from './types/response/shared.js';
import { SpotBrokerRebateResult } from './types/response/spot.types.js';

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

  getSystemTime(): Promise<any> {
    return this.get('system/time');
  }

  getSystemServiceStatus(): Promise<any> {
    return this.get('system/service');
  }

  /**
   *
   * Public Market Data Endpoints
   *
   **/

  getCurrencyListV1(): Promise<any> {
    return this.get('spot/v1/currencies');
  }

  getSymbols(): Promise<any> {
    return this.get('spot/v1/symbols');
  }

  getSymbolDetails(): Promise<any> {
    return this.get('spot/v1/symbols/details');
  }

  getSpotTickers(): Promise<any> {
    return this.get('spot/quotation/v3/tickers');
  }

  getSpotTicker(): Promise<any> {
    return this.get('spot/quotation/v3/ticker?symbol=BTC_USDT');
  }

  getLiteKlines(): Promise<any> {
    return this.get(
      'spot/quotation/v3/lite-klines?symbol=BMX_ETH&step=15&before=1525760116&after=1525769116&limit=100',
    );
  }

  getKlines(): Promise<any> {
    return this.get(
      'spot/quotation/v3/klines?symbol=BMX_ETH&step=15&before=1525760116&after=1525769116&limit=100',
    );
  }

  getBooks(): Promise<any> {
    return this.get('spot/quotation/v3/books?symbol=BTC_USDT&limit=1');
  }

  getTrades(): Promise<any> {
    return this.get('spot/quotation/v3/trades?symbol=BMX_ETH&limit=10');
  }

  /**
   *
   * Public Market Data Endpoints (History Version)
   *
   **/

  getV2Ticker(): Promise<any> {
    return this.get('spot/v2/ticker');
  }

  getTickerDetail(): Promise<any> {
    return this.get('spot/v1/ticker_detail?symbol=BTC_USDT');
  }

  getSteps(): Promise<any> {
    return this.get('spot/v1/steps');
  }

  getSymbolKline(): Promise<any> {
    return this.get(
      'spot/v1/symbols/kline?symbol=BMX_ETH&step=15&from=1525760116&to=1525769116',
    );
  }

  getSymbolBook(): Promise<any> {
    return this.get('spot/v1/symbols/book?symbol=BMX_ETH&precision=6');
  }

  getSymbolTrades(): Promise<any> {
    return this.get('spot/v1/symbols/trades?symbol=BMX_ETH');
  }

  /**
   *
   * Funding Account Endpoints
   *
   **/

  getAccountBalance(): Promise<any> {
    return this.getPrivate('account/v1/wallet');
  }

  getCurrenciesAccount(): Promise<any> {
    return this.get('account/v1/currencies');
  }

  getSpotWallet(): Promise<any> {
    return this.getPrivate('spot/v1/wallet');
  }

  getDepositAddress(): Promise<any> {
    return this.getPrivate('account/v1/deposit/address');
  }

  getWithdrawCharge(): Promise<any> {
    return this.getPrivate('account/v1/withdraw/charge');
  }

  submitWithdrawal(params: {
    currency: string;
    amount: string;
    destination: 'To Digital Address';
    address: string;
    address_memo?: string;
  }): Promise<any> {
    return this.postPrivate('account/v1/withdraw/apply', params);
  }

  getDepositWithdrawHistory(): Promise<any> {
    return this.get('account/v2/deposit-withdraw/history');
  }

  getDepositWithdrawDetail(): Promise<any> {
    return this.get('account/v1/deposit-withdraw/detail');
  }

  getIsolatedMarginAccount(): Promise<any> {
    return this.get('spot/v1/margin/isolated/account');
  }

  postIsolatedMarginTransfer(): Promise<any> {
    return this.post('spot/v1/margin/isolated/transfer');
  }

  getUserFee(): Promise<any> {
    return this.get('spot/v1/user_fee');
  }

  getTradeFee(): Promise<any> {
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
  }): Promise<any> {
    return this.postPrivate('spot/v2/submit_order', params);
  }

  postMarginSubmitOrder(): Promise<any> {
    return this.post('spot/v1/margin/submit_order');
  }

  postBatchOrders(): Promise<any> {
    return this.post('spot/v2/batch_orders');
  }

  postCancelOrder(): Promise<any> {
    return this.post('spot/v3/cancel_order');
  }

  postCancelOrders(): Promise<any> {
    return this.post('spot/v1/cancel_orders');
  }

  postQueryOrder(): Promise<any> {
    return this.post('spot/v4/query/order');
  }

  postQueryClientOrder(): Promise<any> {
    return this.post('spot/v4/query/client-order');
  }

  postQueryOpenOrders(): Promise<any> {
    return this.post('spot/v4/query/open-orders');
  }

  postQueryHistoryOrders(): Promise<any> {
    return this.post('spot/v4/query/history-orders');
  }

  postQueryTrades(): Promise<any> {
    return this.post('spot/v4/query/trades');
  }

  postQueryOrderTrades(): Promise<any> {
    return this.post('spot/v4/query/order-trades');
  }

  postSpotSubmitOrder(): Promise<any> {
    return this.post('spot/v1/submit_order');
  }

  postSpotBatchOrders(): Promise<any> {
    return this.post('spot/v1/batch_orders');
  }

  postSpotCancelOrder(): Promise<any> {
    return this.post('spot/v2/cancel_order');
  }

  getV2OrderDetail(): Promise<any> {
    return this.get('spot/v2/order_detail');
  }

  getV3Orders(): Promise<any> {
    return this.get('spot/v3/orders');
  }

  getV2Trades(): Promise<any> {
    return this.get('spot/v2/trades');
  }

  postIsolatedMarginBorrow(): Promise<any> {
    return this.post('spot/v1/margin/isolated/borrow');
  }

  postIsolatedMarginRepay(): Promise<any> {
    return this.post('spot/v1/margin/isolated/repay');
  }

  getIsolatedMarginBorrowRecord(): Promise<any> {
    return this.get('spot/v1/margin/isolated/borrow_record');
  }

  getIsolatedMarginRepayRecord(): Promise<any> {
    return this.get('spot/v1/margin/isolated/repay_record');
  }

  getIsolatedMarginPairs(): Promise<any> {
    return this.get('spot/v1/margin/isolated/pairs');
  }

  postSubToMain(): Promise<any> {
    return this.post('account/sub-account/main/v1/sub-to-main');
  }

  postSubToMainSub(): Promise<any> {
    return this.post('account/sub-account/sub/v1/sub-to-main');
  }

  postMainToSub(): Promise<any> {
    return this.post('account/sub-account/main/v1/main-to-sub');
  }

  postSubToSubMain(): Promise<any> {
    return this.post('account/sub-account/main/v1/sub-to-sub');
  }

  postSubToSubSub(): Promise<any> {
    return this.post('account/sub-account/sub/v1/sub-to-sub');
  }

  postSubToSub(): Promise<any> {
    return this.post('account/sub-account/sub/v1/sub-to-sub');
  }

  getTransferList(): Promise<any> {
    return this.get('account/sub-account/main/v1/transfer-list');
  }

  getTransferHistory(): Promise<any> {
    return this.get('account/sub-account/v1/transfer-history');
  }

  getMainWallet(): Promise<any> {
    return this.get('account/sub-account/main/v1/wallet');
  }

  getSubaccountList(): Promise<any> {
    return this.get('account/sub-account/main/v1/subaccount-list');
  }

  getBrokerRebate(
    params?: SpotBrokerRebateRequest,
  ): Promise<APIResponse<SpotBrokerRebateResult>> {
    return this.getPrivate('spot/v1/broker/rebate', params);
  }
}
