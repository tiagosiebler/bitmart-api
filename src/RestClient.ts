import { AxiosRequestConfig } from 'axios';

import {
  BaseRestClient,
  REST_CLIENT_TYPE_ENUM,
  RestClientType,
} from './lib/BaseRestClient.js';
import { RestClientOptions } from './lib/requestUtils.js';
import { APIResponse, OrderSide } from './types/response/shared.types.js';

import {
  CancelOrdersV3Request,
  GetAccountSubTransfersV1Request,
  GetDepositWithdrawHistoryV2Request,
  GetMarginBorrowRecordV1Request,
  GetMarginRepayRecordV1Request,
  GetSpotKlineRequest,
  GetSpotKlinesV1Request,
  GetSpotOrder,
  GetSpotOrderBookDepthV1Request,
  GetSpotOrderByClientOrderIdV4Request,
  GetSpotOrderByIdV4Request,
  GetSpotOrderTradeHistoryV4Request,
  GetSubSpotWalletBalancesV1Request,
  GetSubTransfersV1Request,
  MarginBorrowRepayV1Request,
  SpotBrokerRebateRequest,
  SpotSubmitOrder,
  SubmitMainTransferMainToSubV1Request,
  SubmitMainTransferSubToMainV1Request,
  SubmitMainTransferSubToSubV1Request,
  SubmitMarginTransferV1Request,
  SubmitSubTransferSubToMainV1Request,
  SubmitSubTransferSubToSubV1Request,
  SubmitWithdrawalV1Request,
} from './types/request/spot.types.js';
import {
  GetAccountSubTransfersV1Result,
  GetActualFeeRateV1Result,
  BasicFeeRateV1,
  GetMarginBorrowRecordV1Result,
  GetMarginBorrowingRatesV1Result,
  GetMarginRepayRecordV1Result,
  SpotOrderBookDepthResultV1,
  GetSpotOrderBookDepthResultV3,
  SpotOrderV4,
  SpotTickerV1,
  GetSubAccountsV1Result,
  GetSubSpotWalletBalancesV1Result,
  ServiceStatusRow,
  SpotBrokerRebateResult,
  SpotCurrencyV1,
  SpotTickerV3,
  ArrayFormSpotTickerV3,
  SpotTradingPairDetailsV1,
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
  GetSubTransfersV1Result,
} from './types/response/spot.types.js';
import {
  GetFuturesContractDepthResult,
  GetFuturesOpenInterestResult,
  GetFuturesFundingRateResult,
  FuturesAsset,
  GetFuturesOrderResult,
  GetFuturesOrderHistoryResult,
  GetFuturesOpenOrdersResult,
  GetFuturesPlanOrdersResult,
  GetFuturesPositionsResult,
  GetFuturesTradesResult,
  GetFuturesTransfersResult,
  SubmitFuturesOrderResult,
  SetFuturesLeverageResult,
  SubmitFuturesTransferResult,
  GetFuturesSubTransfersResult,
  GetFuturesSubWalletResult,
  FuturesKline,
  FuturesContractDetails,
} from 'types/response/futures.types.js';
import {
  GetFuturesKlinesRequest,
  FuturesOrderRequest,
  GetFuturesOrderHistoryRequest,
  GetFuturesOpenOrdersRequest,
  GetFuturesPlanOrdersRequest,
  GetFuturesTradesRequest,
  GetFuturesTransfersRequest,
  SubmitFuturesOrderRequest,
  SubmitFuturesTransferRequest,
  SetFuturesLeverageRequest,
  TransferFuturesAssetsRequest,
  SubmitFuturesSubToMainSubFromSubRequest,
  GetFuturesSubWalletRequest,
  GetFuturesSubTransfersRequest,
  GetFuturesAffiliateRebatesRequest,
  SubmitFuturesPlanOrderRequest,
  GetFuturesAffiliateTradesRequest,
} from './types/request/futures.types.js';

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

  getSpotTickerV3(params?: {
    symbol: string;
  }): Promise<APIResponse<SpotTickerV3>> {
    return this.get('spot/quotation/v3/ticker', params);
  }

  getSpotLatestKlineV3(
    params: GetSpotKlineRequest,
  ): Promise<APIResponse<ArrayFormSpotKlineV3[]>> {
    return this.get('spot/quotation/v3/lite-klines', params);
  }

  getSpotHistoryKlineV3(
    params: GetSpotKlineRequest,
  ): Promise<APIResponse<ArrayFormSpotKlineV3[]>> {
    return this.get('spot/quotation/v3/history-klines', params);
  }

  getSpotOrderBookDepthV3(params: {
    symbol: string;
    limit?: number;
  }): Promise<APIResponse<GetSpotOrderBookDepthResultV3>> {
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

  getSpotTickersV2(): Promise<APIResponse<{ tickers: SpotTickerV1[] }>> {
    return this.get('spot/v2/ticker');
  }

  getSpotTickerV1(params: {
    symbol: string;
  }): Promise<APIResponse<SpotTickerV1>> {
    return this.get('spot/v1/ticker_detail', params);
  }

  getSpotKLineStepsV1(): Promise<APIResponse<{ steps: number[] }>> {
    return this.get('spot/v1/steps');
  }

  getSpotKlinesV1(
    params: GetSpotKlinesV1Request,
  ): Promise<APIResponse<{ klines: SpotKlineV1[] }>> {
    return this.get('spot/v1/symbols/kline', params);
  }

  getSpotOrderBookDepthV1(
    params: GetSpotOrderBookDepthV1Request,
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
    params?: GetDepositWithdrawHistoryV2Request,
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
    params: SpotSubmitOrder,
  ): Promise<APIResponse<{ order_id: string }>> {
    return this.postPrivate('spot/v2/submit_order', params);
  }

  submitMarginOrderV1(
    params: SpotSubmitOrder,
  ): Promise<APIResponse<{ order_id: number }>> {
    return this.postPrivate('spot/v1/margin/submit_order', params);
  }

  submitSpotBatchOrdersV2(params: {
    order_params: SpotSubmitOrder[];
  }): Promise<APIResponse<{ responses: SubmittedSpotBatchOrderResponseV2[] }>> {
    return this.postPrivate('spot/v2/batch_orders', params);
  }

  cancelOrderV3(
    params: CancelOrdersV3Request,
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
    params: GetSpotOrderByIdV4Request,
  ): Promise<APIResponse<SpotOrderV4>> {
    return this.postPrivate('spot/v4/query/order', params);
  }

  /**
   * Query a spot order by client order ID
   */
  getSpotOrderByClientOrderIdV4(
    params: GetSpotOrderByClientOrderIdV4Request,
  ): Promise<APIResponse<SpotOrderV4>> {
    return this.postPrivate('spot/v4/query/client-order', params);
  }

  getSpotOpenOrdersV4(
    params?: GetSpotOrder,
  ): Promise<APIResponse<SpotOrderV4[]>> {
    return this.postPrivate('spot/v4/query/open-orders', params);
  }

  getSpotHistoricOrdersV4(
    params?: GetSpotOrderTradeHistoryV4Request,
  ): Promise<APIResponse<SpotOrderV4[]>> {
    return this.postPrivate('spot/v4/query/history-orders', params);
  }

  /**
   * Account Trade List(v4)
   */
  getSpotAccountTradesV4(
    params?: GetSpotOrderTradeHistoryV4Request,
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
    params: GetMarginBorrowRecordV1Request,
  ): Promise<APIResponse<GetMarginBorrowRecordV1Result>> {
    return this.getPrivate('spot/v1/margin/isolated/borrow_record', params);
  }

  getMarginRepayRecordV1(
    params: GetMarginRepayRecordV1Request,
  ): Promise<APIResponse<GetMarginRepayRecordV1Result>> {
    return this.getPrivate('spot/v1/margin/isolated/repay_record', params);
  }

  /**
   * Get Trading Pair Borrowing Rate and Amount
   */
  getMarginBorrowingRatesV1(params?: {
    symbol?: string;
  }): Promise<APIResponse<GetMarginBorrowingRatesV1Result>> {
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
    params: SubmitMainTransferSubToMainV1Request,
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
    params: SubmitMainTransferMainToSubV1Request,
  ): Promise<APIResponse<{}>> {
    return this.postPrivate('account/sub-account/main/v1/main-to-sub', params);
  }

  submitMainTransferSubToSubV1(
    params: SubmitMainTransferSubToSubV1Request,
  ): Promise<APIResponse<{}>> {
    return this.postPrivate('account/sub-account/main/v1/sub-to-sub', params);
  }

  submitSubTransferSubToSubV1(
    params: SubmitSubTransferSubToSubV1Request,
  ): Promise<APIResponse<{}>> {
    return this.postPrivate('account/sub-account/sub/v1/sub-to-sub', params);
  }

  getSubTransfersV1(
    params: GetSubTransfersV1Request,
  ): Promise<APIResponse<GetSubTransfersV1Result>> {
    return this.getPrivate(
      'account/sub-account/main/v1/transfer-list',
      Request,
    );
  }

  getAccountSubTransfersV1(
    params: GetAccountSubTransfersV1Request,
  ): Promise<APIResponse<GetAccountSubTransfersV1Result>> {
    return this.getPrivate('account/sub-account/v1/transfer-history', params);
  }

  getSubSpotWalletBalancesV1(
    params: GetSubSpotWalletBalancesV1Request,
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

  getFuturesContractDetails(params?: {
    symbol?: string;
  }): Promise<APIResponse<{ symbols: FuturesContractDetails[] }>> {
    return this.get('contract/public/details', params);
  }

  getFuturesContractDepth(params: {
    symbol: string;
  }): Promise<APIResponse<GetFuturesContractDepthResult>> {
    return this.get('contract/public/depth', params);
  }

  getFuturesOpenInterest(params: {
    symbol: string;
  }): Promise<APIResponse<GetFuturesOpenInterestResult>> {
    return this.get('contract/public/open-interest', params);
  }

  getFuturesFundingRate(params: {
    symbol: string;
  }): Promise<APIResponse<GetFuturesFundingRateResult>> {
    return this.get('contract/public/funding-rate', params);
  }

  getFuturesKlines(
    params: GetFuturesKlinesRequest,
  ): Promise<APIResponse<FuturesKline>> {
    return this.get('contract/public/kline', params);
  }

  /**
   *
   * Futures Account Data
   *
   */

  getFuturesAssets(): Promise<APIResponse<FuturesAsset[]>> {
    return this.getPrivate('contract/private/assets-detail');
  }

  /**
   *
   * Futures Trading
   *
   */

  getFuturesOrder(
    params: FuturesOrderRequest,
  ): Promise<APIResponse<GetFuturesOrderResult>> {
    return this.getPrivate('contract/private/order', params);
  }

  getFuturesOrderHistory(
    params: GetFuturesOrderHistoryRequest,
  ): Promise<APIResponse<GetFuturesOrderHistoryResult>> {
    return this.getPrivate('contract/private/order-history', params);
  }

  getFuturesOpenOrders(
    params?: GetFuturesOpenOrdersRequest,
  ): Promise<APIResponse<GetFuturesOpenOrdersResult[]>> {
    return this.getPrivate('contract/private/get-open-orders', params);
  }

  getFuturesPlanOrders(
    params?: GetFuturesPlanOrdersRequest,
  ): Promise<APIResponse<GetFuturesPlanOrdersResult[]>> {
    return this.getPrivate('contract/private/current-plan-order', params);
  }

  getFuturesPositions(params?: {
    symbol?: string;
  }): Promise<APIResponse<GetFuturesPositionsResult[]>> {
    return this.getPrivate('contract/private/position', params);
  }

  getFuturesTrades(
    params: GetFuturesTradesRequest,
  ): Promise<APIResponse<GetFuturesTradesResult[]>> {
    return this.getPrivate('contract/private/trades', params);
  }

  getFuturesTransfers(
    params: GetFuturesTransfersRequest,
  ): Promise<APIResponse<GetFuturesTransfersResult>> {
    return this.getPrivate('account/v1/transfer-contract-list', params);
  }

  submitFuturesOrder(
    params: SubmitFuturesOrderRequest,
  ): Promise<APIResponse<SubmitFuturesOrderResult>> {
    return this.postPrivate('contract/private/submit-order', params);
  }

  cancelFuturesOrder(params: FuturesOrderRequest): Promise<APIResponse<any>> {
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
    params: FuturesOrderRequest,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('contract/private/cancel-plan-order', params);
  }

  submitFuturesTransfer(
    params: SubmitFuturesTransferRequest,
  ): Promise<APIResponse<SubmitFuturesTransferResult>> {
    return this.postPrivate('account/v1/transfer-contract', params);
  }

  setFuturesLeverage(
    params: SetFuturesLeverageRequest,
  ): Promise<APIResponse<SetFuturesLeverageResult>> {
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
      Request,
    );
  }

  submitFuturesMainToSubTransferFromMain(
    params: TransferFuturesAssetsRequest,
  ): Promise<APIResponse<any>> {
    return this.postPrivate(
      'account/contract/sub-account/main/v1/main-to-sub',
      Request,
    );
  }

  submitFuturesSubToMainSubFromSub(
    params: SubmitFuturesSubToMainSubFromSubRequest,
  ): Promise<APIResponse<any>> {
    return this.postPrivate(
      'account/contract/sub-account/sub/v1/sub-to-main',
      Request,
    );
  }

  getFuturesSubWallet(
    params?: GetFuturesSubWalletRequest,
  ): Promise<APIResponse<GetFuturesSubWalletResult>> {
    return this.getPrivate(
      'account/contract/sub-account/main/v1/wallet',
      Request,
    );
  }

  getFuturesSubTransfers(
    params: GetFuturesSubTransfersRequest,
  ): Promise<APIResponse<GetFuturesSubTransfersResult[]>> {
    return this.getPrivate(
      'account/contract/sub-account/main/v1/transfer-list',
      Request,
    );
  }

  getFuturesSubTransferHistory(params: {
    limit: number; // Range [1,100]
  }): Promise<APIResponse<GetFuturesSubTransfersResult[]>> {
    return this.getPrivate(
      'account/contract/sub-account/v1/transfer-history',
      Request,
    );
  }

  /**
   *
   * Futures Affiliate Endpoints
   *
   */

  getFuturesAffiliateRebates(
    params: GetFuturesAffiliateRebatesRequest,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('contract/private/affiliate/rebate-list', params);
  }

  getFuturesAffiliateTrades(
    params: GetFuturesAffiliateTradesRequest,
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
