import { AxiosRequestConfig } from 'axios';

import {
  BaseRestClient,
  REST_CLIENT_TYPE_ENUM,
  RestClientType,
} from './lib/BaseRestClient.js';
import { RestClientOptions } from './lib/requestUtils.js';
import {
  FuturesAccountHistoricOrderRequest,
  FuturesAccountHistoricTransactionRequest,
  FuturesAccountOpenOrdersRequest,
  FuturesAccountOrderRequest,
  FuturesAccountPlanOrdersRequest,
  FuturesAccountTradesRequest,
  FuturesAccountTransfersRequest,
  FuturesAffiliateRebateApiRequest,
  FuturesAffiliateRebatesRequest,
  FuturesAffiliateRebateUserRequest,
  FuturesAffiliateTradesRequest,
  FuturesKlinesRequest,
  FuturesSubTransfersRequest,
  FuturesSubWalletRequest,
  SetFuturesLeverageRequest,
  SubmitFuturesOrderRequest,
  SubmitFuturesPlanOrderRequest,
  SubmitFuturesSimulatedClaimRequest,
  SubmitFuturesSubToMainSubFromSubRequest,
  SubmitFuturesTPSLOrderRequest,
  SubmitFuturesTrailOrderRequest,
  SubmitFuturesTransferRequest,
  TransferFuturesAssetsRequest,
  UpdateFuturesLimitOrderRequest,
  UpdateFuturesPlanOrderRequest,
  UpdateFuturesPresetPlanOrderRequest,
  UpdateFuturesTPSLOrderRequest,
} from './types/request/futures.types.js';
import {
  FuturesAccountAsset,
  FuturesAccountHistoricOrder,
  FuturesAccountHistoricTransaction,
  FuturesAccountOpenOrder,
  FuturesAccountOrder,
  FuturesAccountPlanOrders,
  FuturesAccountPosition,
  FuturesAccountPositionV2,
  FuturesAccountSetLeverageResult,
  FuturesAccountSubTransfer,
  FuturesAccountTrade,
  FuturesAccountTransfer,
  FuturesAffiliateRebateApiResponse,
  FuturesAffiliateRebateUserResponse,
  FuturesContractDepth,
  FuturesContractDetails,
  FuturesFundingRate,
  FuturesFundingRateHistory,
  FuturesKline,
  FuturesLeverageBracketRule,
  FuturesMarketTrade,
  FuturesOpenInterest,
  FuturesOrderSubmitResult,
  FuturesSimulatedClaimResponse,
  FuturesTransferSubmitResult,
  PositionRisk,
} from './types/response/futures.types.js';
import {
  AccountCurrencyBalanceV1,
  APIResponse,
} from './types/response/shared.types.js';
import { ServiceStatus } from './types/response/spot.types.js';

/**
 * REST API client for Bitmart's V2 Futures APIs via the "api-cloud-v2.bitmart.com" domain
 */
export class FuturesClientV2 extends BaseRestClient {
  constructor(
    restClientOptions: RestClientOptions = {},
    requestOptions: AxiosRequestConfig = {},
  ) {
    super(restClientOptions, requestOptions);
    return this;
  }

  getClientType(): RestClientType {
    return REST_CLIENT_TYPE_ENUM.mainV2;
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
   *****************
   * USD-M Futures V2 *
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

  getFuturesMarketTrade(params: {
    symbol: string;
    limit?: number; // Default 50; max 100
  }): Promise<APIResponse<FuturesMarketTrade[]>> {
    return this.get('contract/public/market-trade', params);
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

  getFuturesMarkPriceKlines(
    params: FuturesKlinesRequest,
  ): Promise<APIResponse<FuturesKline[]>> {
    return this.get('contract/public/markprice-kline', params);
  }

  getFuturesFundingRateHistory(params: {
    symbol: string;
    limit?: string;
  }): Promise<
    APIResponse<{
      list: FuturesFundingRateHistory[];
    }>
  > {
    return this.get('contract/public/funding-rate-history', params);
  }

  /**
   * Get current leverage risk limit for a specified contract
   * @param params Optional parameters including symbol
   * @returns Promise with leverage bracket information
   */
  getFuturesLeverageBracket(params?: { symbol?: string }): Promise<
    APIResponse<{
      rules: FuturesLeverageBracketRule[];
    }>
  > {
    return this.get('contract/public/leverage-bracket', params);
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

  getFuturesTradeFeeRate(params: { symbol: string }): Promise<
    APIResponse<{
      symbol: string;
      taker_fee_rate: string;
      maker_fee_rate: string;
    }>
  > {
    return this.getPrivate('contract/private/trade-fee-rate', params);
  }

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
    account?: string;
  }): Promise<APIResponse<FuturesAccountPosition[]>> {
    return this.getPrivate('contract/private/position', params);
  }

  getFuturesAccountPositionsV2(params?: {
    symbol?: string;
    account?: string;
  }): Promise<APIResponse<FuturesAccountPositionV2[]>> {
    return this.getPrivate('contract/private/position-v2', params);
  }

  /**
   * Get current position risk details
   */
  getPositionRiskDetails(params?: {
    symbol?: string;
    account?: string;
  }): Promise<APIResponse<PositionRisk[]>> {
    return this.getPrivate('contract/private/position-risk', params);
  }

  getFuturesAccountTrades(
    params: FuturesAccountTradesRequest,
  ): Promise<APIResponse<FuturesAccountTrade[]>> {
    return this.getPrivate('contract/private/trades', params);
  }

  getFuturesAccountTransactionHistory(
    params: FuturesAccountHistoricTransactionRequest,
  ): Promise<APIResponse<FuturesAccountHistoricTransaction[]>> {
    return this.getPrivate('contract/private/transaction-history', params);
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

  updateFuturesLimitOrder(params: UpdateFuturesLimitOrderRequest): Promise<
    APIResponse<{
      order_id: number;
      client_order_id?: string;
    }>
  > {
    return this.postPrivate('contract/private/modify-limit-order', params);
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

  cancelAllFuturesOrdersAfter(params: {
    timeout: number;
    symbol: string;
  }): Promise<APIResponse<any>> {
    return this.postPrivate('contract/private/cancel-all-after', params);
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

  submitFuturesTPSLOrder(params: SubmitFuturesTPSLOrderRequest): Promise<
    APIResponse<{
      order_id: string;
      client_order_id?: string;
    }>
  > {
    return this.postPrivate('contract/private/submit-tp-sl-order', params);
  }

  updateFuturesPlanOrder(params: UpdateFuturesPlanOrderRequest): Promise<
    APIResponse<{
      order_id: string;
    }>
  > {
    return this.postPrivate('contract/private/modify-plan-order', params);
  }

  updateFuturesPresetPlanOrder(
    params: UpdateFuturesPresetPlanOrderRequest,
  ): Promise<
    APIResponse<{
      order_id: string;
    }>
  > {
    return this.postPrivate(
      'contract/private/modify-preset-plan-order',
      params,
    );
  }

  updateFuturesTPSLOrder(params: UpdateFuturesTPSLOrderRequest): Promise<
    APIResponse<{
      order_id: string;
    }>
  > {
    return this.postPrivate('contract/private/modify-tp-sl-order', params);
  }

  submitFuturesTrailOrder(params: SubmitFuturesTrailOrderRequest): Promise<
    APIResponse<{
      order_id: number;
    }>
  > {
    return this.postPrivate('contract/private/submit-trail-order', params);
  }

  cancelFuturesTrailOrder(
    params: FuturesAccountOrderRequest,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('contract/private/cancel-trail-order', params);
  }

  /**
   * Set position mode (hedge_mode or one_way_mode)
   */
  setPositionMode(params: {
    position_mode: 'hedge_mode' | 'one_way_mode';
  }): Promise<APIResponse<{ position_mode: 'hedge_mode' | 'one_way_mode' }>> {
    return this.postPrivate('contract/private/set-position-mode', params);
  }

  /**
   * Get current position mode
   */
  getPositionMode(): Promise<
    APIResponse<{ position_mode: 'hedge_mode' | 'one_way_mode' }>
  > {
    return this.getPrivate('contract/private/get-position-mode');
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
   * Get User Rebate Data (KEYED)
   * Used for API affiliates to query contract rebate data within a certain time range
   * Feature: Query up to 60 days of data
   */
  getFuturesAffiliateRebateUser(
    params: FuturesAffiliateRebateUserRequest,
  ): Promise<APIResponse<FuturesAffiliateRebateUserResponse>> {
    return this.getPrivate('contract/private/affiliate/rebate-user', params);
  }

  /**
   * Get API Rebate Data (KEYED)
   * Used for API affiliates to query contract API rebate data within a certain time range
   * Feature: Query up to 60 days of data
   */
  getFuturesAffiliateRebateApi(
    params: FuturesAffiliateRebateApiRequest,
  ): Promise<APIResponse<FuturesAffiliateRebateApiResponse>> {
    return this.getPrivate('contract/private/affiliate/rebate-api', params);
  }

  /**
   * Simulated Claim (SIGNED)
   * Add available funds to the futures account (Only available in the Simulated-Environment)
   *
   * Note: This endpoint is only available in the Simulated Trading environment.
   * To use this endpoint, create a client instance with demoTrading: true
   * Example:
   *   const simulatedClient = new FuturesClientV2({
   *     apiKey: 'your-api-key',
   *     apiSecret: 'your-api-secret',
   *     apiMemo: 'your-api-memo',
   *     demoTrading: true
   *   });
   *
   * Alternatively, you can manually set baseUrl: 'https://demo-api-cloud-v2.bitmart.com'
   */
  submitFuturesSimulatedClaim(
    params?: SubmitFuturesSimulatedClaimRequest,
  ): Promise<APIResponse<FuturesSimulatedClaimResponse>> {
    return this.postPrivate('contract/private/claim', params);
  }
}
