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
  WithdrawAddressListItem,
} from './types/response/spot.types.js';

/**
 * Unified REST API client for all of Bitmart's REST APIs
 *
 * Note: for futures V2 APIs, use the `FuturesClientV2` class instead (which maps to a different base URL)
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
   * Custom SDK functions
   *
   */

  /**
   * This method is used to get the latency and time sync between the client and the server.
   * This is not official API endpoint and is only used for internal testing purposes.
   * Use this method to check the latency and time sync between the client and the server.
   * Final values might vary slightly, but it should be within few ms difference.
   * If you have any suggestions or improvements to this measurement, please create an issue or pull request on GitHub.
   */
  async fetchLatencySummary(): Promise<any> {
    const clientTimeReqStart = Date.now();
    const serverTime = await this.getSystemTime();
    const clientTimeReqEnd = Date.now();
    console.log('serverTime', serverTime);

    const serverTimeMs = Number(serverTime.data.server_time);
    const roundTripTime = clientTimeReqEnd - clientTimeReqStart;
    const estimatedOneWayLatency = Math.floor(roundTripTime / 2);

    // Adjust server time by adding estimated one-way latency
    const adjustedServerTime = serverTimeMs + estimatedOneWayLatency;

    // Calculate time difference between adjusted server time and local time
    const timeDifference = adjustedServerTime - clientTimeReqEnd;

    const result = {
      localTime: clientTimeReqEnd,
      serverTime: serverTimeMs,
      roundTripTime,
      estimatedOneWayLatency,
      adjustedServerTime,
      timeDifference,
    };

    console.log('Time synchronization results:');
    console.log(result);

    console.log(
      `Your approximate latency to exchange server: 
        One way: ${estimatedOneWayLatency}ms.
        Round trip: ${roundTripTime}ms.
        `,
    );

    if (Math.abs(timeDifference) > 500) {
      console.warn(
        `WARNING! Time difference between server and client clock is greater than 500ms. It is currently ${timeDifference}ms.
          Consider adjusting your system clock to avoid unwanted clock sync errors!
          Visit https://github.com/tiagosiebler/awesome-crypto-examples/wiki/Timestamp-for-this-request-is-outside-of-the-recvWindow for more information`,
      );
    } else {
      console.log(
        `Time difference between server and client clock is within acceptable range of 500ms. It is currently ${timeDifference}ms.`,
      );
    }

    return result;
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

  getAccountCurrenciesV1(params?: {
    currencies?: string;
  }): Promise<APIResponse<{ currencies: AccountCurrencyV1[] }>> {
    return this.get('account/v1/currencies', params);
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

  getWithdrawAddressList(): Promise<
    APIResponse<{
      list: WithdrawAddressListItem[];
    }>
  > {
    return this.getPrivate('account/v1/withdraw/address/list');
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

  cancelAllSpotOrders(params?: {
    symbol?: string;
    side?: OrderSide;
  }): Promise<APIResponse<any>> {
    return this.postPrivate('spot/v4/cancel_all', params);
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
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
  getFuturesContractDetails(params?: {
    symbol?: string;
  }): Promise<APIResponse<{ symbols: FuturesContractDetails[] }>> {
    return this.get('contract/public/details', params);
  }

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
  getFuturesContractDepth(params: {
    symbol: string;
  }): Promise<APIResponse<FuturesContractDepth>> {
    return this.get('contract/public/depth', params);
  }

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
  getFuturesOpenInterest(params: {
    symbol: string;
  }): Promise<APIResponse<FuturesOpenInterest>> {
    return this.get('contract/public/open-interest', params);
  }

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
  getFuturesFundingRate(params: {
    symbol: string;
  }): Promise<APIResponse<FuturesFundingRate>> {
    return this.get('contract/public/funding-rate', params);
  }

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
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

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
  getFuturesAccountAssets(): Promise<APIResponse<FuturesAccountAsset[]>> {
    return this.getPrivate('contract/private/assets-detail');
  }

  /**
   *
   * Futures Trading
   *
   */

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
  getFuturesAccountOrder(
    params: FuturesAccountOrderRequest,
  ): Promise<APIResponse<FuturesAccountOrder>> {
    return this.getPrivate('contract/private/order', params);
  }

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
  getFuturesAccountOrderHistory(
    params: FuturesAccountHistoricOrderRequest,
  ): Promise<APIResponse<FuturesAccountHistoricOrder>> {
    return this.getPrivate('contract/private/order-history', params);
  }

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
  getFuturesAccountOpenOrders(
    params?: FuturesAccountOpenOrdersRequest,
  ): Promise<APIResponse<FuturesAccountOpenOrder[]>> {
    return this.getPrivate('contract/private/get-open-orders', params);
  }

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
  getFuturesAccountPlanOrders(
    params?: FuturesAccountPlanOrdersRequest,
  ): Promise<APIResponse<FuturesAccountPlanOrders[]>> {
    return this.getPrivate('contract/private/current-plan-order', params);
  }

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
  getFuturesAccountPositions(params?: {
    symbol?: string;
  }): Promise<APIResponse<FuturesAccountPosition[]>> {
    return this.getPrivate('contract/private/position', params);
  }

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
  getPositionRiskDetails(params?: {
    symbol?: string;
  }): Promise<APIResponse<PositionRisk[]>> {
    return this.getPrivate('contract/private/position-risk', params);
  }

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
  getFuturesAccountTrades(
    params: FuturesAccountTradesRequest,
  ): Promise<APIResponse<FuturesAccountTrade[]>> {
    return this.getPrivate('contract/private/trades', params);
  }

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
  getFuturesTransfers(params: FuturesAccountTransfersRequest): Promise<
    APIResponse<{
      records: FuturesAccountTransfer[];
    }>
  > {
    return this.getPrivate('account/v1/transfer-contract-list', params);
  }

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
  submitFuturesOrder(
    params: SubmitFuturesOrderRequest,
  ): Promise<APIResponse<FuturesOrderSubmitResult>> {
    return this.postPrivate('contract/private/submit-order', params);
  }

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */ cancelFuturesOrder(
    params: FuturesAccountOrderRequest,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('contract/private/cancel-order', params);
  }

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
  cancelAllFuturesOrders(params: {
    symbol: string;
  }): Promise<APIResponse<any>> {
    return this.postPrivate('contract/private/cancel-orders', params);
  }

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
  submitFuturesPlanOrder(params: SubmitFuturesPlanOrderRequest): Promise<
    APIResponse<{
      order_id: number;
    }>
  > {
    return this.postPrivate('contract/private/submit-plan-order', params);
  }

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
  cancelFuturesPlanOrder(
    params: FuturesAccountOrderRequest,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('contract/private/cancel-plan-order', params);
  }

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
  submitFuturesTransfer(
    params: SubmitFuturesTransferRequest,
  ): Promise<APIResponse<FuturesTransferSubmitResult>> {
    return this.postPrivate('account/v1/transfer-contract', params);
  }

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
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

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
  submitFuturesSubToMainTransferFromMain(
    params: TransferFuturesAssetsRequest,
  ): Promise<APIResponse<any>> {
    return this.postPrivate(
      'account/contract/sub-account/main/v1/sub-to-main',
      params,
    );
  }

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
  submitFuturesMainToSubTransferFromMain(
    params: TransferFuturesAssetsRequest,
  ): Promise<APIResponse<any>> {
    return this.postPrivate(
      'account/contract/sub-account/main/v1/main-to-sub',
      params,
    );
  }

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
  submitFuturesSubToMainSubFromSub(
    params: SubmitFuturesSubToMainSubFromSubRequest,
  ): Promise<APIResponse<any>> {
    return this.postPrivate(
      'account/contract/sub-account/sub/v1/sub-to-main',
      params,
    );
  }

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
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

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
  getFuturesSubTransfers(
    params: FuturesSubTransfersRequest,
  ): Promise<APIResponse<FuturesAccountSubTransfer[]>> {
    return this.getPrivate(
      'account/contract/sub-account/main/v1/transfer-list',
      params,
    );
  }

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
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

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
  getFuturesAffiliateRebates(
    params: FuturesAffiliateRebatesRequest,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('contract/private/affiliate/rebate-list', params);
  }

  /**
   * @deprecated Use the FuturesClientV2 instead, it uses the new V2 domain & endpoint
   */
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
