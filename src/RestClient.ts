import { AxiosRequestConfig } from 'axios';

import {
  BaseRestClient,
  REST_CLIENT_TYPE_ENUM,
  RestClientType,
} from './lib/BaseRestClient.js';
import { RestClientOptions } from './lib/requestUtils.js';
import { APIResponse, OrderSide } from './types/response/shared.types.js';

import {
  CancelOrdersV3Params,
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
  SubmitBatchOrdersV2Params,
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
import {
  CancelOrderV3Result,
  GetAccountSubTransfersV1Result,
  GetActualFeeRateV1Result,
  BasicFeeRateV1,
  GetMarginAccountDetailsV1Result,
  GetMarginBorrowRecordV1Result,
  GetMarginBorrowingRatesV1Result,
  GetMarginRepayRecordV1Result,
  GetSpotOpenOrdersV4Result,
  SpotOrderBookDepthResultV1,
  GetSpotOrderBookDepthResultV3,
  SpotOrderV4,
  GetSpotOrderHistoryV4Result,
  GetSpotOrderTransactionsV4Result,
  SpotTickerV1,
  GetSpotTradeHistoryV4Result,
  GetSubAccountsV1Result,
  GetSubSpotWalletBalancesV1Result,
  GetSubTransfersV1Result,
  MarginBorrowV1Result,
  MarginRepayV1Result,
  ServiceStatusRow,
  SpotBrokerRebateResult,
  SpotCurrencyV1,
  SpotTickerV3,
  ArrayFormSpotTickerV3,
  SpotTradingPairDetailsV1,
  SubmitBatchOrderV2Result,
  SubmitMarginOrderV1Result,
  SubmitMarginTransferV1Result,
  SubmitSpotOrderV2Result,
  SystemTimeResult,
  ArrayFormSpotKlineV3,
  ArrayFormSpotRecentTrade,
  SpotKlineV1,
  AccountCurrencyBalanceV1,
  AccountCurrencyV1,
  SpotWalletBalanceV1,
  AccountDepositAddressV1,
  AccountWithdrawQuotaV1,
  AccountDepositWithdrawHistoryV2,
  SymbolMarginAccountDetailsV1,
  SubmittedSpotBatchOrderResponseV2,
  SpotAccountTradeV4,
  SpotAccountOrderTradeV4,
} from './types/response/spot.types.js';
import {
  GetFuturesContractDetailsParams,
  GetFuturesContractDepthParams,
  GetFuturesOpenInterestParams,
  GetFuturesFundingRateParams,
  GetFuturesOrderParams,
  GetFuturesOrderHistoryParams,
  GetFuturesOpenOrdersParams,
  GetFuturesPlanOrdersParams,
  GetFuturesPositionsParams,
  GetFuturesTradesParams,
  GetFuturesTransfersParams,
  SubmitFuturesOrderParams,
  CancelFuturesOrderParams,
  CancelAllFuturesOrdersParams,
  CancelFuturesPlanOrderParams,
  SetFuturesLeverageParams,
  SubmitFuturesPlanOrderParams,
  SubmitFuturesTransferParams,
  GetFuturesSubTransferHistoryParams,
  GetFuturesSubTransfersParams,
  GetFuturesSubWalletParams,
  SubmitFuturesSubToMainSubFromSubParams,
  TransferFuturesAssetsParams,
  GetFuturesAffiliateRebatesParams,
  GetFuturesAffiliateTradesParams,
  GetFuturesKlinesParams,
} from 'types/request/futures.types.js';
import {
  GetFuturesContractDetailsResult,
  GetFuturesContractDepthResult,
  GetFuturesOpenInterestResult,
  GetFuturesFundingRateResult,
  GetFuturesAssetsResult,
  GetFuturesOrderResult,
  GetFuturesOrderHistoryResult,
  GetFuturesOpenOrdersResult,
  GetFuturesPlanOrdersResult,
  GetFuturesPositionsResult,
  GetFuturesTradesResult,
  GetFuturesTransfersResult,
  SubmitFuturesOrderResult,
  SetFuturesLeverageResult,
  SubmitFuturesPlanOrderResult,
  SubmitFuturesTransferResult,
  GetFuturesSubTransfersResult,
  GetFuturesSubWalletResult,
  GetFuturesKlinesResult,
} from 'types/response/futures.types.js';

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

  getSystemStatus(): Promise<APIResponse<{ service: ServiceStatusRow[] }>> {
    return this.get('system/service');
  }

  /**
   *
   * Public Market Data Endpoints
   *
   **/

  getSpotCurrenciesV1(): Promise<
    APIResponse<{ currencies: SpotCurrencyV1[] }>
  > {
    return this.get('spot/v1/currencies');
  }

  getSpotTradingPairsV1(): Promise<APIResponse<{ symbols: string[] }>> {
    return this.get('spot/v1/symbols');
  }

  getSpotTradingPairDetailsV1(): Promise<
    APIResponse<{ symbols: SpotTradingPairDetailsV1[] }>
  > {
    return this.get('spot/v1/symbols/details');
  }

  getSpotTickersV3(): Promise<APIResponse<ArrayFormSpotTickerV3[]>> {
    return this.get('spot/quotation/v3/tickers');
  }

  getSpotTickerV3(
    params?: GetSpotTickerV3Params,
  ): Promise<APIResponse<SpotTickerV3>> {
    return this.get('spot/quotation/v3/ticker', params);
  }

  getSpotLatestKlineV3(
    params: GetSpotLatestKlineV3Params,
  ): Promise<APIResponse<ArrayFormSpotKlineV3[]>> {
    return this.get('spot/quotation/v3/lite-klines', params);
  }

  getSpotHistoryKlineV3(
    params: GetSpotHistoryKlineV3Params,
  ): Promise<APIResponse<ArrayFormSpotKlineV3[]>> {
    return this.get('spot/quotation/v3/history-klines', params);
  }

  getSpotOrderBookDepthV3(
    params: GetSpotOrderBookDepthV3Params,
  ): Promise<APIResponse<GetSpotOrderBookDepthResultV3>> {
    return this.get('spot/quotation/v3/books', params);
  }

  getSpotRecentTrades(
    params: GetSpotRecentTradesParams,
  ): Promise<APIResponse<ArrayFormSpotRecentTrade[]>> {
    return this.get('spot/quotation/v3/trades', params);
  }

  /**
   *
   * Public Market Data Endpoints (History Version)
   *
   **/

  getSpotTickersV2(): Promise<APIResponse<{ tickers: SpotTickerV1[] }>> {
    return this.get('spot/v2/ticker');
  }

  getSpotTickerV1(
    params: GetSpotTickerV1Params,
  ): Promise<APIResponse<SpotTickerV1>> {
    return this.get('spot/v1/ticker_detail', params);
  }

  getSpotKLineStepsV1(): Promise<APIResponse<{ steps: number[] }>> {
    return this.get('spot/v1/steps');
  }

  getSpotKlinesV1(
    params: GetSpotKlinesV1Params,
  ): Promise<APIResponse<{ klines: SpotKlineV1[] }>> {
    return this.get('spot/v1/symbols/kline', params);
  }

  getSpotOrderBookDepthV1(
    params: GetSpotOrderBookDepthV1Params,
  ): Promise<APIResponse<SpotOrderBookDepthResultV1>> {
    return this.get('spot/v1/symbols/book', params);
  }

  /**
   *
   * Funding Account Endpoints
   *
   **/

  getAccountBalancesV1(
    params?: GetAccountBalancesV1Params,
  ): Promise<APIResponse<{ wallet: AccountCurrencyBalanceV1[] }>> {
    return this.getPrivate('account/v1/wallet', params);
  }

  getAccountCurrenciesV1(): Promise<
    APIResponse<{ currencies: AccountCurrencyV1[] }>
  > {
    return this.get('account/v1/currencies');
  }

  getSpotWalletBalanceV1(): Promise<
    APIResponse<{ wallet: SpotWalletBalanceV1[] }>
  > {
    return this.getPrivate('spot/v1/wallet');
  }

  getAccountDepositAddressV1(
    params: GetAccountDepositAddressV1Params,
  ): Promise<APIResponse<AccountDepositAddressV1>> {
    return this.getPrivate('account/v1/deposit/address', params);
  }

  getAccountWithdrawQuotaV1(
    params: GetAccountDepositAddressV1Params,
  ): Promise<APIResponse<AccountWithdrawQuotaV1>> {
    return this.getPrivate('account/v1/withdraw/charge', params);
  }

  submitWithdrawalV1(
    params: SubmitWithdrawalV1Params,
  ): Promise<APIResponse<{ withdrawal_id: string }>> {
    return this.postPrivate('account/v1/withdraw/apply', params);
  }

  getDepositWithdrawHistoryV2(
    params?: GetDepositWithdrawHistoryV2Params,
  ): Promise<APIResponse<{ records: AccountDepositWithdrawHistoryV2[] }>> {
    return this.getPrivate('account/v2/deposit-withdraw/history', params);
  }

  getDepositWithdrawDetailV1(params: {
    id: string;
  }): Promise<APIResponse<{ record: AccountDepositWithdrawHistoryV2 }>> {
    return this.getPrivate('account/v1/deposit-withdraw/detail', params);
  }

  getMarginAccountDetailsV1(params?: {
    symbol?: string;
  }): Promise<APIResponse<{ symbols: SymbolMarginAccountDetailsV1[] }>> {
    return this.getPrivate('spot/v1/margin/isolated/account', params);
  }

  submitMarginAssetTransferV1(
    params: SubmitMarginTransferV1Params,
  ): Promise<APIResponse<{ transfer_id: string }>> {
    return this.postPrivate('spot/v1/margin/isolated/transfer', params);
  }

  getBasicFeeRateV1(): Promise<APIResponse<BasicFeeRateV1>> {
    return this.getPrivate('spot/v1/user_fee');
  }

  getActualSpotTradeFeeRateV1(params: {
    symbol: string;
  }): Promise<APIResponse<GetActualFeeRateV1Result>> {
    return this.getPrivate('spot/v1/trade_fee', params);
  }

  /**
   *
   * Spot/Margin Trading Endpoints
   *
   **/

  submitSpotOrderV2(
    params: SubmitSpotOrderV2Params,
  ): Promise<APIResponse<{ order_id: string }>> {
    return this.postPrivate('spot/v2/submit_order', params);
  }

  submitMarginOrderV1(
    params: SubmitMarginOrderV1Params,
  ): Promise<APIResponse<{ order_id: number }>> {
    return this.postPrivate('spot/v1/margin/submit_order', params);
  }

  submitSpotBatchOrdersV2(
    params: SubmitBatchOrdersV2Params,
  ): Promise<APIResponse<{ responses: SubmittedSpotBatchOrderResponseV2[] }>> {
    return this.postPrivate('spot/v2/batch_orders', params);
  }

  cancelOrderV3(
    params: CancelOrdersV3Params,
  ): Promise<APIResponse<{ result: boolean }>> {
    return this.postPrivate('spot/v3/cancel_order', params);
  }

  /** Cancel Batch Order (v1) */
  cancelSpotOrdersV1(params?: {
    symbol?: string;
    side?: OrderSide;
  }): Promise<APIResponse<{}>> {
    return this.postPrivate('spot/v1/cancel_orders', params);
  }

  /**
   * Query a spot order by order ID
   */
  getSpotOrderByIdV4(
    params: GetSpotOrderByIdV4Params,
  ): Promise<APIResponse<SpotOrderV4>> {
    return this.postPrivate('spot/v4/query/order', params);
  }

  /**
   * Query a spot order by client order ID
   */
  getSpotOrderByClientOrderIdV4(
    params: GetSpotOrderByClientOrderIdV4Params,
  ): Promise<APIResponse<SpotOrderV4>> {
    return this.postPrivate('spot/v4/query/client-order', params);
  }

  getSpotOpenOrdersV4(
    params?: GetSpotOpenOrdersV4Params,
  ): Promise<APIResponse<SpotOrderV4[]>> {
    return this.postPrivate('spot/v4/query/open-orders', params);
  }

  getSpotHistoricOrdersV4(
    params?: GetSpotOrderHistoryV4Params,
  ): Promise<APIResponse<SpotOrderV4[]>> {
    return this.postPrivate('spot/v4/query/history-orders', params);
  }

  /**
   * Account Trade List(v4)
   */
  getSpotAccountTradesV4(
    params?: GetSpotTradeHistoryV4Params,
  ): Promise<APIResponse<SpotAccountTradeV4[]>> {
    return this.postPrivate('spot/v4/query/trades', params);
  }

  /**
   * Get all transaction records for a single order
   */
  getSpotAccountOrderTradesV4(params: {
    orderId: string;
    recvWindow?: number;
  }): Promise<APIResponse<SpotAccountOrderTradeV4[]>> {
    return this.postPrivate('spot/v4/query/order-trades', params);
  }

  /**
   *
   * Margin Loan Endpoints (History versions)
   *
   **/

  marginBorrowV1(
    params: MarginBorrowV1Params,
  ): Promise<APIResponse<{ borrow_id: string }>> {
    return this.postPrivate('spot/v1/margin/isolated/borrow', params);
  }

  marginRepayV1(
    params: MarginRepayV1Params,
  ): Promise<APIResponse<{ repay_id: string }>> {
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
   *****************
   * USD-M Futures *
   *****************
   *
   */

  /**
   *
   * Futures Market Data
   *
   */

  getFuturesContractDetails(
    params?: GetFuturesContractDetailsParams,
  ): Promise<APIResponse<GetFuturesContractDetailsResult>> {
    return this.get('contract/public/details', params);
  }

  getFuturesContractDepth(
    params: GetFuturesContractDepthParams,
  ): Promise<APIResponse<GetFuturesContractDepthResult>> {
    return this.get('contract/public/depth', params);
  }

  getFuturesOpenInterest(
    params: GetFuturesOpenInterestParams,
  ): Promise<APIResponse<GetFuturesOpenInterestResult>> {
    return this.get('contract/public/open-interest', params);
  }

  getFuturesFundingRate(
    params: GetFuturesFundingRateParams,
  ): Promise<APIResponse<GetFuturesFundingRateResult>> {
    return this.get('contract/public/funding-rate', params);
  }

  getFuturesKlines(
    params: GetFuturesKlinesParams,
  ): Promise<APIResponse<GetFuturesKlinesResult>> {
    return this.get('contract/public/kline', params);
  }

  /**
   *
   * Futures Account Data
   *
   */

  getFuturesAssets(): Promise<APIResponse<GetFuturesAssetsResult>> {
    return this.getPrivate('contract/private/assets-detail');
  }

  /**
   *
   * Futures Trading
   *
   */

  getFuturesOrder(
    params: GetFuturesOrderParams,
  ): Promise<APIResponse<GetFuturesOrderResult>> {
    return this.getPrivate('contract/private/order', params);
  }

  getFuturesOrderHistory(
    params: GetFuturesOrderHistoryParams,
  ): Promise<APIResponse<GetFuturesOrderHistoryResult>> {
    return this.getPrivate('contract/private/order-history', params);
  }

  getFuturesOpenOrders(
    params?: GetFuturesOpenOrdersParams,
  ): Promise<APIResponse<GetFuturesOpenOrdersResult>> {
    return this.getPrivate('contract/private/get-open-orders', params);
  }

  getFuturesPlanOrders(
    params?: GetFuturesPlanOrdersParams,
  ): Promise<APIResponse<GetFuturesPlanOrdersResult>> {
    return this.getPrivate('contract/private/current-plan-order', params);
  }

  getFuturesPositions(
    params?: GetFuturesPositionsParams,
  ): Promise<APIResponse<GetFuturesPositionsResult>> {
    return this.getPrivate('contract/private/position', params);
  }

  getFuturesTrades(
    params: GetFuturesTradesParams,
  ): Promise<APIResponse<GetFuturesTradesResult>> {
    return this.getPrivate('contract/private/trades', params);
  }

  getFuturesTransfers(
    params: GetFuturesTransfersParams,
  ): Promise<APIResponse<GetFuturesTransfersResult>> {
    return this.getPrivate('account/v1/transfer-contract-list', params);
  }

  submitFuturesOrder(
    params: SubmitFuturesOrderParams,
  ): Promise<APIResponse<SubmitFuturesOrderResult>> {
    return this.postPrivate('contract/private/submit-order', params);
  }

  cancelFuturesOrder(
    params: CancelFuturesOrderParams,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('contract/private/cancel-order', params);
  }

  cancelAllFuturesOrders(
    params: CancelAllFuturesOrdersParams,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('contract/private/cancel-orders', params);
  }

  submitFuturesPlanOrder(
    params: SubmitFuturesPlanOrderParams,
  ): Promise<APIResponse<SubmitFuturesPlanOrderResult>> {
    return this.postPrivate('contract/private/submit-plan-order', params);
  }

  cancelFuturesPlanOrder(
    params: CancelFuturesPlanOrderParams,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('contract/private/cancel-plan-order', params);
  }

  submitFuturesTransfer(
    params: SubmitFuturesTransferParams,
  ): Promise<APIResponse<SubmitFuturesTransferResult>> {
    return this.postPrivate('account/v1/transfer-contract', params);
  }

  setFuturesLeverage(
    params: SetFuturesLeverageParams,
  ): Promise<APIResponse<SetFuturesLeverageResult>> {
    return this.postPrivate('contract/private/submit-leverage', params);
  }

  /**
   *
   * Futures Sub-Account Endpoints
   *
   */

  submitFuturesSubToMainTransferFromMain(
    params: TransferFuturesAssetsParams,
  ): Promise<APIResponse<any>> {
    return this.postPrivate(
      'account/contract/sub-account/main/v1/sub-to-main',
      params,
    );
  }

  submitFuturesMainToSubTransferFromMain(
    params: TransferFuturesAssetsParams,
  ): Promise<APIResponse<any>> {
    return this.postPrivate(
      'account/contract/sub-account/main/v1/main-to-sub',
      params,
    );
  }

  submitFuturesSubToMainSubFromSub(
    params: SubmitFuturesSubToMainSubFromSubParams,
  ): Promise<APIResponse<any>> {
    return this.postPrivate(
      'account/contract/sub-account/sub/v1/sub-to-main',
      params,
    );
  }

  getFuturesSubWallet(
    params?: GetFuturesSubWalletParams,
  ): Promise<APIResponse<GetFuturesSubWalletResult>> {
    return this.getPrivate(
      'account/contract/sub-account/main/v1/wallet',
      params,
    );
  }

  getFuturesSubTransfers(
    params: GetFuturesSubTransfersParams,
  ): Promise<APIResponse<GetFuturesSubTransfersResult>> {
    return this.getPrivate(
      'account/contract/sub-account/main/v1/transfer-list',
      params,
    );
  }

  getFuturesSubTransferHistory(
    params: GetFuturesSubTransferHistoryParams,
  ): Promise<APIResponse<GetFuturesSubTransfersResult>> {
    return this.getPrivate(
      'account/contract/sub-account/v1/transfer-history',
      params,
    );
  }

  /**
   *
   * Futures Affiliate Endpoints
   *
   */

  getFuturesAffiliateRebates(
    params: GetFuturesAffiliateRebatesParams,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('contract/private/affiliate/rebate-list', params);
  }

  getFuturesAffiliateTrades(
    params: GetFuturesAffiliateTradesParams,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('contract/private/affiliate/trade-list', params);
  }

  /**
   *
   * API Broker Endpoints
   *
   **/

  getBrokerRebate(
    params?: SpotBrokerRebateRequest,
  ): Promise<APIResponse<SpotBrokerRebateResult>> {
    return this.getPrivate('spot/v1/broker/rebate', params);
  }
}
