import { AxiosRequestConfig } from 'axios';
import {
  BaseRestClient,
  REST_CLIENT_TYPE_ENUM,
  RestClientType,
} from './lib/BaseRestClient.js';
import { RestClientOptions } from './lib/requestUtils.js';
import {
  CancelOrderV3Params,
  CancelOrdersForSideV1Params,
  GetAccountBalancesV1Params,
  GetAccountDepositAddressV1Params,
  GetAccountSubTransfersV1Params,
  GetActualFeeRateV1Params,
  GetDepositWithdrawDetailsV1Params,
  GetDepositWithdrawHistoryV2Params,
  GetMarginAccountDetailsV1Params,
  GetMarginBorrowRecordV1Params,
  GetMarginBorrowingRatesV1Params,
  GetMarginRepayRecordV1Params,
  GetSpotHistoryKlineV3Params,
  GetSpotKlinesV1Params,
  GetSpotLatestKlineV3Params,
  GetSpotOpenOrdersV4Params,
  GetSpotOrderBookDepthV1Params,
  GetSpotOrderBookDepthV3Params,
  GetSpotOrderByClientOrderIdV4Params,
  GetSpotOrderByIdV4Params,
  GetSpotOrderHistoryV4Params,
  GetSpotRecentTradesParams,
  GetSpotTickerV1Params,
  GetSpotTickerV3Params,
  GetSpotTradeHistoryV4Params,
  GetSubSpotWalletBalancesV1Params,
  GetSubTransfersV1Params,
  MarginBorrowV1Params,
  MarginRepayV1Params,
  SpotBrokerRebateRequest,
  SubmitBatchOrderV2Params,
  SubmitMainTransferMainToSubV1Params,
  SubmitMainTransferSubToMainV1Params,
  SubmitMainTransferSubToSubV1Params,
  SubmitMarginOrderV1Params,
  SubmitMarginTransferV1Params,
  SubmitSpotOrderV2Params,
  SubmitSubTransferSubToMainV1Params,
  SubmitSubTransferSubToSubV1Params,
  SubmitWithdrawalV1Params,
} from './types/request/spot.types.js';
import { APIResponse } from './types/response/shared.types.js';
import {
  CancelOrderV3Result,
  GetAccountBalancesV1Result,
  GetAccountSubTransfersV1Result,
  GetActualFeeRateV1Result,
  GetBasicFeeRateV1Result,
  GetDepositWithdrawDetailsV1Result,
  GetDepositWithdrawHistoryV2Result,
  GetMarginAccountDetailsV1Result,
  GetMarginBorrowRecordV1Result,
  GetMarginBorrowingRatesV1Result,
  GetMarginRepayRecordV1Result,
  GetSpotCurrenciesV1Result,
  GetSpotHistoryKlineV3Result,
  GetSpotKLineStepsV1Result,
  GetSpotKlinesV1Result,
  GetSpotLatestKlineV3Result,
  GetSpotOpenOrdersV4Result,
  GetSpotOrderBookDepthV1Result,
  GetSpotOrderBookDepthV3Result,
  GetSpotOrderByIdV4Result,
  GetSpotOrderHistoryV4Result,
  GetSpotOrderTransactionsV4Result,
  GetSpotRecentTradesResult,
  GetSpotTickerV1Result,
  GetSpotTickerV3Result,
  GetSpotTickersV2Result,
  GetSpotTickersV3Result,
  GetSpotTradeHistoryV4Result,
  GetSpotTradingPairDetailsV1Result,
  GetSpotTradingPairsV1Result,
  GetSpotWalletBalanceV1Result,
  GetSubAccountsV1Result,
  GetSubSpotWalletBalancesV1Result,
  GetSubTransfersV1Result,
  GetSystemStatusResult,
  MarginBorrowV1Result,
  MarginRepayV1Result,
  SpotBrokerRebateResult,
  SubmitBatchOrderV2Result,
  SubmitMarginOrderV1Result,
  SubmitMarginTransferV1Result,
  SubmitSpotOrderV2Result,
  SubmitWithdrawalV1Result,
  SystemTimeResult,
  getAccountCurrenciesV1Result,
} from './types/response/spot.types.js';

/**
 * Unified REST API client for all of Bitmart's REST APIs
 */
export class RestClient extends BaseRestClient {
  constructor(
    restClientOptions: RestClientOptions = {},
    requestOptions: AxiosRequestConfig = {},
  ) {
    super(restClientOptions, requestOptions);
    return this;
  }

  getClientType(): RestClientType {
    return REST_CLIENT_TYPE_ENUM.main;
  }

  /**
   *
   * System Status Endpoints
   *
   **/

  getSystemTime(): Promise<APIResponse<SystemTimeResult>> {
    return this.get('system/time');
  }

  getSystemStatus(): Promise<APIResponse<GetSystemStatusResult>> {
    return this.get('system/service');
  }

  /**
   *
   * Public Market Data Endpoints
   *
   **/

  getSpotCurrenciesV1(): Promise<APIResponse<GetSpotCurrenciesV1Result>> {
    return this.get('spot/v1/currencies');
  }

  getSpotTradingPairsV1(): Promise<APIResponse<GetSpotTradingPairsV1Result>> {
    return this.get('spot/v1/symbols');
  }

  getSpotTradingPairDetailsV1(): Promise<
    APIResponse<GetSpotTradingPairDetailsV1Result>
  > {
    return this.get('spot/v1/symbols/details');
  }

  getSpotTickersV3(): Promise<APIResponse<GetSpotTickersV3Result>> {
    return this.get('spot/quotation/v3/tickers');
  }

  getSpotTickerV3(
    params?: GetSpotTickerV3Params,
  ): Promise<APIResponse<GetSpotTickerV3Result>> {
    return this.get('spot/quotation/v3/ticker', params);
  }

  getSpotLatestKlineV3(
    params: GetSpotLatestKlineV3Params,
  ): Promise<APIResponse<GetSpotLatestKlineV3Result>> {
    return this.get('spot/quotation/v3/lite-klines', params);
  }

  getSpotHistoryKlineV3(
    params: GetSpotHistoryKlineV3Params,
  ): Promise<APIResponse<GetSpotHistoryKlineV3Result>> {
    return this.get('spot/quotation/v3/history-klines', params);
  }

  getSpotOrderBookDepthV3(
    params: GetSpotOrderBookDepthV3Params,
  ): Promise<APIResponse<GetSpotOrderBookDepthV3Result>> {
    return this.get('spot/quotation/v3/books', params);
  }

  getSpotRecentTrades(
    params: GetSpotRecentTradesParams,
  ): Promise<APIResponse<GetSpotRecentTradesResult>> {
    return this.get('spot/quotation/v3/trades', params);
  }

  /**
   *
   * Public Market Data Endpoints (History Version)
   *
   **/

  getSpotTickersV2(): Promise<APIResponse<GetSpotTickersV2Result>> {
    return this.get('spot/v2/ticker');
  }

  getSpotTickerV1(
    params: GetSpotTickerV1Params,
  ): Promise<APIResponse<GetSpotTickerV1Result>> {
    return this.get('spot/v1/ticker_detail', params);
  }

  getSpotKLineStepsV1(): Promise<APIResponse<GetSpotKLineStepsV1Result>> {
    return this.get('spot/v1/steps');
  }

  getSpotKlinesV1(
    params: GetSpotKlinesV1Params,
  ): Promise<APIResponse<GetSpotKlinesV1Result>> {
    return this.get('spot/v1/symbols/kline', params);
  }

  getSpotOrderBookDepthV1(
    params: GetSpotOrderBookDepthV1Params,
  ): Promise<APIResponse<GetSpotOrderBookDepthV1Result>> {
    return this.get('spot/v1/symbols/book', params);
  }

  /**
   *
   * Funding Account Endpoints
   *
   **/

  getAccountBalancesV1(
    params?: GetAccountBalancesV1Params,
  ): Promise<APIResponse<GetAccountBalancesV1Result>> {
    return this.getPrivate('account/v1/wallet', params);
  }

  getAccountCurrenciesV1(): Promise<APIResponse<getAccountCurrenciesV1Result>> {
    return this.get('account/v1/currencies');
  }

  getSpotWalletBalanceV1(): Promise<APIResponse<GetSpotWalletBalanceV1Result>> {
    return this.getPrivate('spot/v1/wallet');
  }

  getAccountDepositAddressV1(
    params: GetAccountDepositAddressV1Params,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('account/v1/deposit/address', params);
  }

  getAccountWithdrawQuotaV1(
    params: GetAccountDepositAddressV1Params,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('account/v1/withdraw/charge');
  }

  submitWithdrawalV1(
    params: SubmitWithdrawalV1Params,
  ): Promise<APIResponse<SubmitWithdrawalV1Result>> {
    return this.postPrivate('account/v1/withdraw/apply', params);
  }

  getDepositWithdrawHistoryV2(
    params?: GetDepositWithdrawHistoryV2Params,
  ): Promise<APIResponse<GetDepositWithdrawHistoryV2Result>> {
    return this.getPrivate('account/v2/deposit-withdraw/history', params);
  }

  getDepositWithdrawDetailsV1(
    params: GetDepositWithdrawDetailsV1Params,
  ): Promise<APIResponse<GetDepositWithdrawDetailsV1Result>> {
    return this.getPrivate('account/v1/deposit-withdraw/detail', params);
  }

  getMarginAccountDetailsV1(
    params?: GetMarginAccountDetailsV1Params,
  ): Promise<APIResponse<GetMarginAccountDetailsV1Result>> {
    return this.getPrivate('spot/v1/margin/isolated/account', params);
  }

  submitMarginTransferV1(
    params: SubmitMarginTransferV1Params,
  ): Promise<APIResponse<SubmitMarginTransferV1Result>> {
    return this.postPrivate('spot/v1/margin/isolated/transfer', params);
  }

  getBasicFeeRateV1(): Promise<APIResponse<GetBasicFeeRateV1Result>> {
    return this.getPrivate('spot/v1/user_fee');
  }

  getActualFeeRateV1(
    params: GetActualFeeRateV1Params,
  ): Promise<APIResponse<GetActualFeeRateV1Result>> {
    return this.getPrivate('spot/v1/trade_fee', params);
  }

  /**
   *
   * Spot/Margin Trading Endpoints
   *
   **/

  submitSpotOrderV2(
    params: SubmitSpotOrderV2Params,
  ): Promise<APIResponse<SubmitSpotOrderV2Result>> {
    return this.postPrivate('spot/v2/submit_order', params);
  }

  submitMarginOrderV1(
    params: SubmitMarginOrderV1Params,
  ): Promise<APIResponse<SubmitMarginOrderV1Result>> {
    return this.postPrivate('spot/v1/margin/submit_order', params);
  }

  submitBatchOrderV2(
    params: SubmitBatchOrderV2Params,
  ): Promise<APIResponse<SubmitBatchOrderV2Result>> {
    return this.postPrivate('spot/v2/batch_orders', params);
  }

  cancelOrderV3(
    params: CancelOrderV3Params,
  ): Promise<APIResponse<CancelOrderV3Result>> {
    // This function sends a POST request to the BitMart API to cancel a specified unfinished order
    return this.postPrivate('spot/v3/cancel_order', params);
  }

  /**
   * Cancel all outstanding orders in the specified side for a trading pair
   */
  cancelOrdersForSideV1(
    params: CancelOrdersForSideV1Params,
  ): Promise<APIResponse<{}>> {
    return this.postPrivate('spot/v1/cancel_orders', params);
  }

  getSpotOrderByIdV4(
    params: GetSpotOrderByIdV4Params,
  ): Promise<APIResponse<GetSpotOrderByIdV4Result>> {
    return this.postPrivate('spot/v4/query/order', params);
  }

  getSpotOrderByClientOrderIdV4(
    params: GetSpotOrderByClientOrderIdV4Params,
  ): Promise<APIResponse<GetSpotOrderByIdV4Result>> {
    return this.postPrivate('spot/v4/query/client-order', params);
  }

  getSpotOpenOrdersV4(
    params?: GetSpotOpenOrdersV4Params,
  ): Promise<APIResponse<GetSpotOpenOrdersV4Result>> {
    return this.postPrivate('spot/v4/query/open-orders', params);
  }

  getSpotHistoricOrdersV4(
    params?: GetSpotOrderHistoryV4Params,
  ): Promise<APIResponse<GetSpotOrderHistoryV4Result>> {
    return this.postPrivate('spot/v4/query/history-orders', params);
  }

  /**
   * Account Trade List(v4)
   */
  getSpotTransactionsV4(
    params?: GetSpotTradeHistoryV4Params,
  ): Promise<APIResponse<GetSpotTradeHistoryV4Result>> {
    return this.postPrivate('spot/v4/query/trades', params);
  }

  /**
   * Get all transaction records for a single order
   */
  getSpotOrderTransactionsV4(params: {
    orderId: string;
    recvWindow?: number;
  }): Promise<APIResponse<GetSpotOrderTransactionsV4Result>> {
    return this.postPrivate('spot/v4/query/order-trades', params);
  }

  /**
   *
   * Margin Loan Endpoints (History versions)
   *
   **/

  marginBorrowV1(
    params: MarginBorrowV1Params,
  ): Promise<APIResponse<MarginBorrowV1Result>> {
    return this.postPrivate('spot/v1/margin/isolated/borrow', params);
  }

  marginRepayV1(
    params: MarginRepayV1Params,
  ): Promise<APIResponse<MarginRepayV1Result>> {
    return this.postPrivate('spot/v1/margin/isolated/repay', params);
  }

  getMarginBorrowRecordV1(
    params: GetMarginBorrowRecordV1Params,
  ): Promise<APIResponse<GetMarginBorrowRecordV1Result>> {
    return this.getPrivate('spot/v1/margin/isolated/borrow_record', params);
  }

  getMarginRepayRecordV1(
    params: GetMarginRepayRecordV1Params,
  ): Promise<APIResponse<GetMarginRepayRecordV1Result>> {
    return this.getPrivate('spot/v1/margin/isolated/repay_record', params);
  }

  /**
   * Get Trading Pair Borrowing Rate and Amount
   */
  getMarginBorrowingRatesV1(
    params?: GetMarginBorrowingRatesV1Params,
  ): Promise<APIResponse<GetMarginBorrowingRatesV1Result>> {
    return this.getPrivate('spot/v1/margin/isolated/pairs', params);
  }

  /**
   *
   * Subaccount Endpoints
   *
   **/

  /**
   * Sub-Account to Main-Account (For Main Account)
   */
  submitMainTransferSubToMainV1(
    params: SubmitMainTransferSubToMainV1Params,
  ): Promise<APIResponse<{}>> {
    return this.postPrivate('account/sub-account/main/v1/sub-to-main', params);
  }

  /**
   * Sub-Account to Main-Account (For Sub-Account)
   */
  submitSubTransferSubToMainV1(
    params: SubmitSubTransferSubToMainV1Params,
  ): Promise<APIResponse<{}>> {
    return this.postPrivate('account/sub-account/sub/v1/sub-to-main', params);
  }

  submitMainTransferMainToSubV1(
    params: SubmitMainTransferMainToSubV1Params,
  ): Promise<APIResponse<{}>> {
    return this.postPrivate('account/sub-account/main/v1/main-to-sub', params);
  }

  submitMainTransferSubToSubV1(
    params: SubmitMainTransferSubToSubV1Params,
  ): Promise<APIResponse<{}>> {
    return this.postPrivate('account/sub-account/main/v1/sub-to-sub', params);
  }

  submitSubTransferSubToSubV1(
    params: SubmitSubTransferSubToSubV1Params,
  ): Promise<APIResponse<{}>> {
    return this.postPrivate('account/sub-account/sub/v1/sub-to-sub', params);
  }

  getSubTransfersV1(
    params: GetSubTransfersV1Params,
  ): Promise<APIResponse<GetSubTransfersV1Result>> {
    return this.getPrivate('account/sub-account/main/v1/transfer-list', params);
  }

  getAccountSubTransfersV1(
    params: GetAccountSubTransfersV1Params,
  ): Promise<APIResponse<GetAccountSubTransfersV1Result>> {
    return this.getPrivate('account/sub-account/v1/transfer-history', params);
  }

  getSubSpotWalletBalancesV1(
    params: GetSubSpotWalletBalancesV1Params,
  ): Promise<APIResponse<GetSubSpotWalletBalancesV1Result>> {
    return this.getPrivate('account/sub-account/main/v1/wallet', params);
  }

  getSubAccountsV1(): Promise<APIResponse<GetSubAccountsV1Result>> {
    return this.getPrivate('account/sub-account/main/v1/subaccount-list');
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
