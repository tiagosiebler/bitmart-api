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
  FuturesAffiliateRebatesRequest,
  FuturesAffiliateTradesRequest,
  FuturesKlinesRequest,
  FuturesSubTransfersRequest,
  FuturesSubWalletRequest,
  SetFuturesLeverageRequest,
  SubmitFuturesOrderRequest,
  SubmitFuturesPlanOrderRequest,
  SubmitFuturesSubToMainSubFromSubRequest,
  SubmitFuturesTPSLOrderRequest,
  SubmitFuturesTrailOrderRequest,
  SubmitFuturesTransferRequest,
  TransferFuturesAssetsRequest,
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
  FuturesAccountSetLeverageResult,
  FuturesAccountSubTransfer,
  FuturesAccountTrade,
  FuturesAccountTransfer,
  FuturesContractDepth,
  FuturesContractDetails,
  FuturesFundingRate,
  FuturesFundingRateHistory,
  FuturesKline,
  FuturesOpenInterest,
  FuturesOrderSubmitResult,
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
}
