import { AxiosRequestConfig } from 'axios';

import {
  BaseRestClient,
  REST_CLIENT_TYPE_ENUM,
  RestClientType,
} from './lib/BaseRestClient.js';
import { RestClientOptions } from './lib/requestUtils.js';
import {
  FuturesAccountHistoricOrderRequest,
  FuturesAccountOpenOrdersRequest,
  FuturesAccountOrderRequest,
  FuturesAccountPlanOrdersRequest,
  FuturesAccountTradesRequest,
  FuturesAccountTransfersRequest,
  FuturesAffiliateRebatesRequest,
  FuturesAffiliateTradesRequest,
  FuturesKlinesRequest,
  FuturesSubTransfersRequest,
  FuturesSubWalletRequest,
  SetFuturesLeverageRequest,
  SubmitFuturesOrderRequest,
  SubmitFuturesPlanOrderRequest,
  SubmitFuturesSubToMainSubFromSubRequest,
  SubmitFuturesTransferRequest,
  TransferFuturesAssetsRequest,
} from './types/request/futures.types.js';
import {
  AccountSubTransfersV1Request,
  CancelOrdersV3Request,
  CancelSpotBatchOrdersV4Request,
  DepositWithdrawHistoryV2Request,
  MarginBorrowRecordsV1Request,
  MarginBorrowRepayV1Request,
  MarginRepayRecordsV1Request,
  SpotBrokerRebateRequest,
  SpotKlinesV1Request,
  SpotKlineV3Request,
  SpotOpenOrdersV4Request,
  SpotOrderBookDepthV1Request,
  SpotOrderByClientOrderIdV4Request,
  SpotOrderByIdV4Request,
  SpotOrderTradeHistoryV4Request,
  SubmitMainTransferSubToSubV1Request,
  SubmitMarginTransferV1Request,
  SubmitSpotBatchOrdersV4Request,
  SubmitSpotOrderV2Request,
  SubmitSubTransferSubToMainV1Request,
  SubmitSubTransferV1Request,
  SubmitWithdrawalV1Request,
  SubSpotWalletBalancesV1Request,
  SubTransfersV1Request,
} from './types/request/spot.types.js';
import {
  FuturesAccountAsset,
  FuturesAccountHistoricOrder,
  FuturesAccountOpenOrder,
  FuturesAccountOrder,
  FuturesAccountPlanOrders,
  FuturesAccountPosition,
  FuturesAccountSetLeverageResult,
  FuturesAccountSubTransfer,
  FuturesAccountTrade,
  FuturesAccountTransfer,
  FuturesContractDepth,
  FuturesContractDetails,
  FuturesFundingRate,
  FuturesKline,
  FuturesOpenInterest,
  FuturesOrderSubmitResult,
  FuturesTransferSubmitResult,
  PositionRisk,
} from './types/response/futures.types.js';
import {
  AccountCurrencyBalanceV1,
  APIResponse,
  OrderSide,
} from './types/response/shared.types.js';
import {
  AccountCurrencyV1,
  AccountDepositAddressV1,
  AccountDepositWithdrawHistoryV2,
  AccountWithdrawQuotaV1,
  ActualFeeRateV1,
  ArrayFormSpotKlineV3,
  ArrayFormSpotRecentTrade,
  ArrayFormSpotTickerV3,
  BasicFeeRateV1,
  CancelSpotBatchOrdersV4Response,
  MarginBorrowingRateV1,
  MarginBorrowRecordV1,
  MarginRepayRecordV1,
  ServiceStatus,
  SpotAccountTradeV4,
  SpotBrokerRebateResult,
  SpotCurrencyV1,
  SpotKlineV1,
  SpotOrderBookDepthResultV1,
  SpotOrderBookDepthResultV3,
  SpotOrderV4,
  SpotTickerV1,
  SpotTickerV3,
  SpotTradingPairDetailsV1,
  SpotWalletBalanceV1,
  SubAccountV1,
  SubmittedSpotBatchOrderResponseV2,
  SubTransferRow,
  SymbolMarginAccountDetailsV1,
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
    return REST_CLIENT_TYPE_ENUM.mainV1;
  }

  /**
   *
   * System Status Endpoints
   *
   **/

  getSystemTime(): Promise<APIResponse<{ server_time: number }>> {
    return this.get('system/time');
  }

  getSystemStatus(): Promise<APIResponse<{ service: ServiceStatus[] }>> {
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

  getSpotTickerV3(params?: {
    symbol: string;
  }): Promise<APIResponse<SpotTickerV3>> {
    return this.get('spot/quotation/v3/ticker', params);
  }

  getSpotLatestKlineV3(
    params: SpotKlineV3Request,
  ): Promise<APIResponse<ArrayFormSpotKlineV3[]>> {
    return this.get('spot/quotation/v3/lite-klines', params);
  }

  getSpotHistoryKlineV3(
    params: SpotKlineV3Request,
  ): Promise<APIResponse<ArrayFormSpotKlineV3[]>> {
    return this.get('spot/quotation/v3/klines', params);
  }

  getSpotOrderBookDepthV3(params: {
    symbol: string;
    limit?: number;
  }): Promise<APIResponse<SpotOrderBookDepthResultV3>> {
    return this.get('spot/quotation/v3/books', params);
  }

  getSpotRecentTrades(params: {
    symbol: string;
    limit?: number;
  }): Promise<APIResponse<ArrayFormSpotRecentTrade[]>> {
    return this.get('spot/quotation/v3/trades', params);
  }

  /**
   *
   * Public Market Data Endpoints (History Version)
   *
   **/

  /**
   * @deprecated , use V3 or V4 instead
   */
  getSpotTickersV2(): Promise<APIResponse<{ tickers: SpotTickerV1[] }>> {
    return this.get('spot/v2/ticker');
  }

  /**
   * @deprecated , use V3 or V4 instead
   */
  getSpotTickerV1(params: {
    symbol: string;
  }): Promise<APIResponse<SpotTickerV1>> {
    return this.get('spot/v1/ticker_detail', params);
  }

  /**
   * @deprecated , use V3 or V4 instead
   */
  getSpotKLineStepsV1(): Promise<APIResponse<{ steps: number[] }>> {
    return this.get('spot/v1/steps');
  }

  /**
   * @deprecated , use V3 or V4 instead
   */
  getSpotKlinesV1(
    params: SpotKlinesV1Request,
  ): Promise<APIResponse<{ klines: SpotKlineV1[] }>> {
    return this.get('spot/v1/symbols/kline', params);
  }

  /**
   * @deprecated , use V3 or V4 instead
   */
  getSpotOrderBookDepthV1(
    params: SpotOrderBookDepthV1Request,
  ): Promise<APIResponse<SpotOrderBookDepthResultV1>> {
    return this.get('spot/v1/symbols/book', params);
  }

  /**
   *
   * Funding Account Endpoints
   *
   **/

  getAccountBalancesV1(params?: {
    currency?: string;
  }): Promise<APIResponse<{ wallet: AccountCurrencyBalanceV1[] }>> {
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

  getAccountDepositAddressV1(params: {
    currency: string;
  }): Promise<APIResponse<AccountDepositAddressV1>> {
    return this.getPrivate('account/v1/deposit/address', params);
  }

  getAccountWithdrawQuotaV1(params: {
    currency: string;
  }): Promise<APIResponse<AccountWithdrawQuotaV1>> {
    return this.getPrivate('account/v1/withdraw/charge', params);
  }

  submitWithdrawalV1(
    params: SubmitWithdrawalV1Request,
  ): Promise<APIResponse<{ withdrawal_id: string }>> {
    return this.postPrivate('account/v1/withdraw/apply', params);
  }

  getDepositWithdrawHistoryV2(
    params?: DepositWithdrawHistoryV2Request,
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
    params: SubmitMarginTransferV1Request,
  ): Promise<APIResponse<{ transfer_id: string }>> {
    return this.postPrivate('spot/v1/margin/isolated/transfer', params);
  }

  getBasicSpotFeeRateV1(): Promise<APIResponse<BasicFeeRateV1>> {
    return this.getPrivate('spot/v1/user_fee');
  }

  getActualSpotTradeFeeRateV1(params: {
    symbol: string;
  }): Promise<APIResponse<ActualFeeRateV1>> {
    return this.getPrivate('spot/v1/trade_fee', params);
  }

  /**
   *
   * Spot/Margin Trading Endpoints
   *
   **/

  submitSpotOrderV2(
    params: SubmitSpotOrderV2Request,
  ): Promise<APIResponse<{ order_id: string }>> {
    return this.postPrivate('spot/v2/submit_order', params);
  }

  submitMarginOrderV1(
    params: SubmitSpotOrderV2Request,
  ): Promise<APIResponse<{ order_id: number }>> {
    return this.postPrivate('spot/v1/margin/submit_order', params);
  }

  /**
   * @deprecated , use V3 or V4 instead
   */
  submitSpotBatchOrdersV2(params: {
    order_params: SubmitSpotOrderV2Request[];
  }): Promise<APIResponse<{ responses: SubmittedSpotBatchOrderResponseV2[] }>> {
    return this.postPrivate('spot/v2/batch_orders', params);
  }

  cancelSpotOrderV3(
    params: CancelOrdersV3Request,
  ): Promise<APIResponse<{ result: boolean }>> {
    return this.postPrivate('spot/v3/cancel_order', params);
  }

  submitSpotBatchOrdersV4(params: SubmitSpotBatchOrdersV4Request): Promise<
    APIResponse<{
      orderIds: string[];
    }>
  > {
    return this.postPrivate('spot/v4/batch_orders', params);
  }

  /**
   * Cancel batch orders (v4)
   */
  cancelSpotBatchOrdersV4(
    params: CancelSpotBatchOrdersV4Request,
  ): Promise<APIResponse<CancelSpotBatchOrdersV4Response>> {
    return this.postPrivate('spot/v4/cancel_orders', params);
  }

  /**
   * @deprecated , use V3 or V4 instead
   */
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
    params: SpotOrderByIdV4Request,
  ): Promise<APIResponse<SpotOrderV4>> {
    return this.postPrivate('spot/v4/query/order', params);
  }

  /**
   * Query a spot order by client order ID
   */
  getSpotOrderByClientOrderIdV4(
    params: SpotOrderByClientOrderIdV4Request,
  ): Promise<APIResponse<SpotOrderV4>> {
    return this.postPrivate('spot/v4/query/client-order', params);
  }

  getSpotOpenOrdersV4(
    params?: SpotOpenOrdersV4Request,
  ): Promise<APIResponse<SpotOrderV4[]>> {
    return this.postPrivate('spot/v4/query/open-orders', params);
  }

  getSpotHistoricOrdersV4(
    params?: SpotOrderTradeHistoryV4Request,
  ): Promise<APIResponse<SpotOrderV4[]>> {
    return this.postPrivate('spot/v4/query/history-orders', params);
  }

  /**
   * Account Trade List(v4)
   */
  getSpotAccountTradesV4(
    params?: SpotOrderTradeHistoryV4Request,
  ): Promise<APIResponse<SpotAccountTradeV4[]>> {
    return this.postPrivate('spot/v4/query/trades', params);
  }

  /**
   * Get all transaction records for a single order
   */
  getSpotAccountOrderTradesV4(params: {
    orderId: string;
    recvWindow?: number;
  }): Promise<APIResponse<SpotAccountTradeV4[]>> {
    return this.postPrivate('spot/v4/query/order-trades', params);
  }

  /**
   *
   * Margin Loan Endpoints (History versions)
   *
   **/

  marginBorrowV1(
    params: MarginBorrowRepayV1Request,
  ): Promise<APIResponse<{ borrow_id: string }>> {
    return this.postPrivate('spot/v1/margin/isolated/borrow', params);
  }

  marginRepayV1(
    params: MarginBorrowRepayV1Request,
  ): Promise<APIResponse<{ repay_id: string }>> {
    return this.postPrivate('spot/v1/margin/isolated/repay', params);
  }

  getMarginBorrowRecordV1(
    params: MarginBorrowRecordsV1Request,
  ): Promise<APIResponse<{ records: MarginBorrowRecordV1[] }>> {
    return this.getPrivate('spot/v1/margin/isolated/borrow_record', params);
  }

  getMarginRepayRecordV1(
    params: MarginRepayRecordsV1Request,
  ): Promise<APIResponse<{ records: MarginRepayRecordV1[] }>> {
    return this.getPrivate('spot/v1/margin/isolated/repay_record', params);
  }

  /**
   * Get Trading Pair Borrowing Rate and Amount
   */
  getMarginBorrowingRatesV1(params?: {
    symbol?: string;
  }): Promise<APIResponse<{ symbols: MarginBorrowingRateV1[] }>> {
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
    params: SubmitSubTransferV1Request,
  ): Promise<APIResponse<{}>> {
    return this.postPrivate('account/sub-account/main/v1/sub-to-main', params);
  }

  /**
   * Sub-Account to Main-Account (For Sub-Account)
   */
  submitSubTransferSubToMainV1(
    params: SubmitSubTransferSubToMainV1Request,
  ): Promise<APIResponse<{}>> {
    return this.postPrivate('account/sub-account/sub/v1/sub-to-main', params);
  }

  submitMainTransferMainToSubV1(
    params: SubmitSubTransferV1Request,
  ): Promise<APIResponse<{}>> {
    return this.postPrivate('account/sub-account/main/v1/main-to-sub', params);
  }

  submitMainTransferSubToSubV1(
    params: SubmitMainTransferSubToSubV1Request,
  ): Promise<APIResponse<{}>> {
    return this.postPrivate('account/sub-account/main/v1/sub-to-sub', params);
  }

  submitSubTransferSubToSubV1(
    params: SubmitSubTransferV1Request,
  ): Promise<APIResponse<{}>> {
    return this.postPrivate('account/sub-account/sub/v1/sub-to-sub', params);
  }

  getSubTransfersV1(
    params: SubTransfersV1Request,
  ): Promise<APIResponse<{ total: number; historyList: SubTransferRow[] }>> {
    return this.getPrivate('account/sub-account/main/v1/transfer-list', params);
  }

  getAccountSubTransfersV1(
    params: AccountSubTransfersV1Request,
  ): Promise<APIResponse<{ total: number; historyList: SubTransferRow[] }>> {
    return this.getPrivate('account/sub-account/v1/transfer-history', params);
  }

  getSubSpotWalletBalancesV1(
    params: SubSpotWalletBalancesV1Request,
  ): Promise<APIResponse<{ wallet: AccountCurrencyBalanceV1[] }>> {
    return this.getPrivate('account/sub-account/main/v1/wallet', params);
  }

  getSubAccountsV1(): Promise<APIResponse<{ subAccountList: SubAccountV1[] }>> {
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

  /**
   * Get a list of all symbols, including most recent price, rules (min/max precision/volume/etc) and other metrics (funding rate, open interest, contract expiry, etc).
   */
  getFuturesContractDetails(params?: {
    symbol?: string;
  }): Promise<APIResponse<{ symbols: FuturesContractDetails[] }>> {
    return this.get('contract/public/details', params);
  }

  getFuturesContractDepth(params: {
    symbol: string;
  }): Promise<APIResponse<FuturesContractDepth>> {
    return this.get('contract/public/depth', params);
  }

  getFuturesOpenInterest(params: {
    symbol: string;
  }): Promise<APIResponse<FuturesOpenInterest>> {
    return this.get('contract/public/open-interest', params);
  }

  getFuturesFundingRate(params: {
    symbol: string;
  }): Promise<APIResponse<FuturesFundingRate>> {
    return this.get('contract/public/funding-rate', params);
  }

  getFuturesKlines(
    params: FuturesKlinesRequest,
  ): Promise<APIResponse<FuturesKline[]>> {
    return this.get('contract/public/kline', params);
  }

  /**
   *
   * Futures Account Data
   *
   */

  getFuturesAccountAssets(): Promise<APIResponse<FuturesAccountAsset[]>> {
    return this.getPrivate('contract/private/assets-detail');
  }

  /**
   *
   * Futures Trading
   *
   */

  getFuturesAccountOrder(
    params: FuturesAccountOrderRequest,
  ): Promise<APIResponse<FuturesAccountOrder>> {
    return this.getPrivate('contract/private/order', params);
  }

  getFuturesAccountOrderHistory(
    params: FuturesAccountHistoricOrderRequest,
  ): Promise<APIResponse<FuturesAccountHistoricOrder>> {
    return this.getPrivate('contract/private/order-history', params);
  }

  getFuturesAccountOpenOrders(
    params?: FuturesAccountOpenOrdersRequest,
  ): Promise<APIResponse<FuturesAccountOpenOrder[]>> {
    return this.getPrivate('contract/private/get-open-orders', params);
  }

  getFuturesAccountPlanOrders(
    params?: FuturesAccountPlanOrdersRequest,
  ): Promise<APIResponse<FuturesAccountPlanOrders[]>> {
    return this.getPrivate('contract/private/current-plan-order', params);
  }

  getFuturesAccountPositions(params?: {
    symbol?: string;
  }): Promise<APIResponse<FuturesAccountPosition[]>> {
    return this.getPrivate('contract/private/position', params);
  }

  /**
   * Get current position risk details
   */
  getPositionRiskDetails(params?: {
    symbol?: string;
  }): Promise<APIResponse<PositionRisk[]>> {
    return this.getPrivate('contract/private/position-risk', params);
  }

  getFuturesAccountTrades(
    params: FuturesAccountTradesRequest,
  ): Promise<APIResponse<FuturesAccountTrade[]>> {
    return this.getPrivate('contract/private/trades', params);
  }

  getFuturesTransfers(params: FuturesAccountTransfersRequest): Promise<
    APIResponse<{
      records: FuturesAccountTransfer[];
    }>
  > {
    return this.getPrivate('account/v1/transfer-contract-list', params);
  }

  submitFuturesOrder(
    params: SubmitFuturesOrderRequest,
  ): Promise<APIResponse<FuturesOrderSubmitResult>> {
    return this.postPrivate('contract/private/submit-order', params);
  }

  cancelFuturesOrder(
    params: FuturesAccountOrderRequest,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('contract/private/cancel-order', params);
  }

  cancelAllFuturesOrders(params: {
    symbol: string;
  }): Promise<APIResponse<any>> {
    return this.postPrivate('contract/private/cancel-orders', params);
  }

  submitFuturesPlanOrder(params: SubmitFuturesPlanOrderRequest): Promise<
    APIResponse<{
      order_id: number;
    }>
  > {
    return this.postPrivate('contract/private/submit-plan-order', params);
  }

  cancelFuturesPlanOrder(
    params: FuturesAccountOrderRequest,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('contract/private/cancel-plan-order', params);
  }

  submitFuturesTransfer(
    params: SubmitFuturesTransferRequest,
  ): Promise<APIResponse<FuturesTransferSubmitResult>> {
    return this.postPrivate('account/v1/transfer-contract', params);
  }

  setFuturesLeverage(
    params: SetFuturesLeverageRequest,
  ): Promise<APIResponse<FuturesAccountSetLeverageResult>> {
    return this.postPrivate('contract/private/submit-leverage', params);
  }

  /**
   *
   * Futures Sub-Account Endpoints
   *
   */

  submitFuturesSubToMainTransferFromMain(
    params: TransferFuturesAssetsRequest,
  ): Promise<APIResponse<any>> {
    return this.postPrivate(
      'account/contract/sub-account/main/v1/sub-to-main',
      params,
    );
  }

  submitFuturesMainToSubTransferFromMain(
    params: TransferFuturesAssetsRequest,
  ): Promise<APIResponse<any>> {
    return this.postPrivate(
      'account/contract/sub-account/main/v1/main-to-sub',
      params,
    );
  }

  submitFuturesSubToMainSubFromSub(
    params: SubmitFuturesSubToMainSubFromSubRequest,
  ): Promise<APIResponse<any>> {
    return this.postPrivate(
      'account/contract/sub-account/sub/v1/sub-to-main',
      params,
    );
  }

  getFuturesSubWallet(params?: FuturesSubWalletRequest): Promise<
    APIResponse<{
      wallet: AccountCurrencyBalanceV1[];
    }>
  > {
    return this.getPrivate(
      'account/contract/sub-account/main/v1/wallet',
      params,
    );
  }

  getFuturesSubTransfers(
    params: FuturesSubTransfersRequest,
  ): Promise<APIResponse<FuturesAccountSubTransfer[]>> {
    return this.getPrivate(
      'account/contract/sub-account/main/v1/transfer-list',
      params,
    );
  }

  getFuturesSubTransferHistory(params: {
    limit: number; // Range [1,100]
  }): Promise<APIResponse<FuturesAccountSubTransfer[]>> {
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
    params: FuturesAffiliateRebatesRequest,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('contract/private/affiliate/rebate-list', params);
  }

  getFuturesAffiliateTrades(
    params: FuturesAffiliateTradesRequest,
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
