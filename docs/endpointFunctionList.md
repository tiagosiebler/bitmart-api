
# Endpoint maps

<p align="center">
  <a href="https://www.npmjs.com/package/bitmart-api">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/tiagosiebler/bitmart-api/blob/master/docs/images/logoDarkMode2.svg?raw=true#gh-dark-mode-only">
      <img alt="SDK Logo" src="https://github.com/tiagosiebler/bitmart-api/blob/master/docs/images/logoBrightMode2.svg?raw=true#gh-light-mode-only">
    </picture>
  </a>
</p>

Each REST client is a JavaScript class, which provides functions individually mapped to each endpoint available in the exchange's API offering. 

The following table shows all methods available in each REST client, whether the method requires authentication (automatically handled if API keys are provided), as well as the exact endpoint each method is connected to.

This can be used to easily find which method to call, once you have [found which endpoint you're looking to use](https://github.com/tiagosiebler/awesome-crypto-examples/wiki/How-to-find-SDK-functions-that-match-API-docs-endpoint).

All REST clients are in the [src](/src) folder. For usage examples, make sure to check the [examples](/examples) folder.

List of clients:
- [RestClient](#RestClientts)
- [FuturesClientV2](#FuturesClientV2ts)


If anything is missing or wrong, please open an issue or let us know in our [Node.js Traders](https://t.me/nodetraders) telegram group!

## How to use table

Table consists of 4 parts:

- Function name
- AUTH
- HTTP Method
- Endpoint

**Function name** is the name of the function that can be called through the SDK. Check examples folder in the repo for more help on how to use them!

**AUTH** is a boolean value that indicates if the function requires authentication - which means you need to pass your API key and secret to the SDK.

**HTTP Method** shows HTTP method that the function uses to call the endpoint. Sometimes endpoints can have same URL, but different HTTP method so you can use this column to differentiate between them.

**Endpoint** is the URL that the function uses to call the endpoint. Best way to find exact function you need for the endpoint is to search for URL in this table and find corresponding function name.


# RestClient.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [RestClient.ts](/src/RestClient.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getSystemTime()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L201) |  | GET | `system/time` |
| [getSystemStatus()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L205) |  | GET | `system/service` |
| [getSpotCurrenciesV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L215) |  | GET | `spot/v1/currencies` |
| [getSpotTradingPairsV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L221) |  | GET | `spot/v1/symbols` |
| [getSpotTradingPairDetailsV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L225) |  | GET | `spot/v1/symbols/details` |
| [getSpotTickersV3()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L231) |  | GET | `spot/quotation/v3/tickers` |
| [getSpotTickerV3()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L235) |  | GET | `spot/quotation/v3/ticker` |
| [getSpotLatestKlineV3()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L241) |  | GET | `spot/quotation/v3/lite-klines` |
| [getSpotHistoryKlineV3()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L247) |  | GET | `spot/quotation/v3/klines` |
| [getSpotOrderBookDepthV3()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L253) |  | GET | `spot/quotation/v3/books` |
| [getSpotRecentTrades()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L260) |  | GET | `spot/quotation/v3/trades` |
| [getSpotTickersV2()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L276) |  | GET | `spot/v2/ticker` |
| [getSpotTickerV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L283) |  | GET | `spot/v1/ticker_detail` |
| [getSpotKLineStepsV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L292) |  | GET | `spot/v1/steps` |
| [getSpotKlinesV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L299) |  | GET | `spot/v1/symbols/kline` |
| [getSpotOrderBookDepthV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L308) |  | GET | `spot/v1/symbols/book` |
| [getAccountBalancesV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L320) | :closed_lock_with_key:  | GET | `account/v1/wallet` |
| [getAccountCurrenciesV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L326) |  | GET | `account/v1/currencies` |
| [getSpotWalletBalanceV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L332) | :closed_lock_with_key:  | GET | `spot/v1/wallet` |
| [getAccountDepositAddressV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L338) | :closed_lock_with_key:  | GET | `account/v1/deposit/address` |
| [getAccountWithdrawQuotaV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L344) | :closed_lock_with_key:  | GET | `account/v1/withdraw/charge` |
| [submitWithdrawalV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L350) | :closed_lock_with_key:  | POST | `account/v1/withdraw/apply` |
| [getWithdrawAddressList()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L356) | :closed_lock_with_key:  | GET | `account/v1/withdraw/address/list` |
| [getDepositWithdrawHistoryV2()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L364) | :closed_lock_with_key:  | GET | `account/v2/deposit-withdraw/history` |
| [getDepositWithdrawDetailV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L370) | :closed_lock_with_key:  | GET | `account/v1/deposit-withdraw/detail` |
| [getMarginAccountDetailsV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L376) | :closed_lock_with_key:  | GET | `spot/v1/margin/isolated/account` |
| [submitMarginAssetTransferV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L382) | :closed_lock_with_key:  | POST | `spot/v1/margin/isolated/transfer` |
| [getBasicSpotFeeRateV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L388) | :closed_lock_with_key:  | GET | `spot/v1/user_fee` |
| [getActualSpotTradeFeeRateV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L392) | :closed_lock_with_key:  | GET | `spot/v1/trade_fee` |
| [submitSpotOrderV2()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L404) | :closed_lock_with_key:  | POST | `spot/v2/submit_order` |
| [submitMarginOrderV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L410) | :closed_lock_with_key:  | POST | `spot/v1/margin/submit_order` |
| [submitSpotBatchOrdersV2()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L419) | :closed_lock_with_key:  | POST | `spot/v2/batch_orders` |
| [cancelSpotOrderV3()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L425) | :closed_lock_with_key:  | POST | `spot/v3/cancel_order` |
| [submitSpotBatchOrdersV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L431) | :closed_lock_with_key:  | POST | `spot/v4/batch_orders` |
| [cancelSpotBatchOrdersV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L442) | :closed_lock_with_key:  | POST | `spot/v4/cancel_orders` |
| [cancelAllSpotOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L448) | :closed_lock_with_key:  | POST | `spot/v4/cancel_all` |
| [cancelSpotOrdersV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L458) | :closed_lock_with_key:  | POST | `spot/v1/cancel_orders` |
| [getSpotOrderByIdV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L468) | :closed_lock_with_key:  | POST | `spot/v4/query/order` |
| [getSpotOrderByClientOrderIdV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L477) | :closed_lock_with_key:  | POST | `spot/v4/query/client-order` |
| [getSpotOpenOrdersV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L483) | :closed_lock_with_key:  | POST | `spot/v4/query/open-orders` |
| [getSpotHistoricOrdersV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L489) | :closed_lock_with_key:  | POST | `spot/v4/query/history-orders` |
| [getSpotAccountTradesV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L498) | :closed_lock_with_key:  | POST | `spot/v4/query/trades` |
| [getSpotAccountOrderTradesV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L507) | :closed_lock_with_key:  | POST | `spot/v4/query/order-trades` |
| [marginBorrowV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L520) | :closed_lock_with_key:  | POST | `spot/v1/margin/isolated/borrow` |
| [marginRepayV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L526) | :closed_lock_with_key:  | POST | `spot/v1/margin/isolated/repay` |
| [getMarginBorrowRecordV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L532) | :closed_lock_with_key:  | GET | `spot/v1/margin/isolated/borrow_record` |
| [getMarginRepayRecordV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L538) | :closed_lock_with_key:  | GET | `spot/v1/margin/isolated/repay_record` |
| [getMarginBorrowingRatesV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L547) | :closed_lock_with_key:  | GET | `spot/v1/margin/isolated/pairs` |
| [submitMainTransferSubToMainV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L562) | :closed_lock_with_key:  | POST | `account/sub-account/main/v1/sub-to-main` |
| [submitSubTransferSubToMainV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L571) | :closed_lock_with_key:  | POST | `account/sub-account/sub/v1/sub-to-main` |
| [submitMainTransferMainToSubV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L577) | :closed_lock_with_key:  | POST | `account/sub-account/main/v1/main-to-sub` |
| [submitMainTransferSubToSubV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L583) | :closed_lock_with_key:  | POST | `account/sub-account/main/v1/sub-to-sub` |
| [submitSubTransferSubToSubV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L589) | :closed_lock_with_key:  | POST | `account/sub-account/sub/v1/sub-to-sub` |
| [getSubTransfersV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L595) | :closed_lock_with_key:  | GET | `account/sub-account/main/v1/transfer-list` |
| [getAccountSubTransfersV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L601) | :closed_lock_with_key:  | GET | `account/sub-account/v1/transfer-history` |
| [getSubSpotWalletBalancesV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L607) | :closed_lock_with_key:  | GET | `account/sub-account/main/v1/wallet` |
| [getSubAccountsV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L613) | :closed_lock_with_key:  | GET | `account/sub-account/main/v1/subaccount-list` |
| [getFuturesContractDetails()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L634) |  | GET | `contract/public/details` |
| [getFuturesContractDepth()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L643) |  | GET | `contract/public/depth` |
| [getFuturesOpenInterest()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L652) |  | GET | `contract/public/open-interest` |
| [getFuturesFundingRate()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L661) |  | GET | `contract/public/funding-rate` |
| [getFuturesKlines()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L670) |  | GET | `contract/public/kline` |
| [getFuturesAccountAssets()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L685) | :closed_lock_with_key:  | GET | `contract/private/assets-detail` |
| [getFuturesAccountOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L698) | :closed_lock_with_key:  | GET | `contract/private/order` |
| [getFuturesAccountOrderHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L707) | :closed_lock_with_key:  | GET | `contract/private/order-history` |
| [getFuturesAccountOpenOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L716) | :closed_lock_with_key:  | GET | `contract/private/get-open-orders` |
| [getFuturesAccountPlanOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L725) | :closed_lock_with_key:  | GET | `contract/private/current-plan-order` |
| [getFuturesAccountPositions()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L734) | :closed_lock_with_key:  | GET | `contract/private/position` |
| [getPositionRiskDetails()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L743) | :closed_lock_with_key:  | GET | `contract/private/position-risk` |
| [getFuturesAccountTrades()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L752) | :closed_lock_with_key:  | GET | `contract/private/trades` |
| [getFuturesTransfers()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L761) | :closed_lock_with_key:  | GET | `account/v1/transfer-contract-list` |
| [submitFuturesOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L772) | :closed_lock_with_key:  | POST | `contract/private/submit-order` |
| [cancelFuturesOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L780) | :closed_lock_with_key:  | POST | `contract/private/cancel-order` |
| [cancelAllFuturesOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L789) | :closed_lock_with_key:  | POST | `contract/private/cancel-orders` |
| [submitFuturesPlanOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L798) | :closed_lock_with_key:  | POST | `contract/private/submit-plan-order` |
| [cancelFuturesPlanOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L809) | :closed_lock_with_key:  | POST | `contract/private/cancel-plan-order` |
| [submitFuturesTransfer()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L818) | :closed_lock_with_key:  | POST | `account/v1/transfer-contract` |
| [setFuturesLeverage()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L827) | :closed_lock_with_key:  | POST | `contract/private/submit-leverage` |
| [submitFuturesSubToMainTransferFromMain()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L842) | :closed_lock_with_key:  | POST | `account/contract/sub-account/main/v1/sub-to-main` |
| [submitFuturesMainToSubTransferFromMain()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L854) | :closed_lock_with_key:  | POST | `account/contract/sub-account/main/v1/main-to-sub` |
| [submitFuturesSubToMainSubFromSub()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L866) | :closed_lock_with_key:  | POST | `account/contract/sub-account/sub/v1/sub-to-main` |
| [getFuturesSubWallet()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L878) | :closed_lock_with_key:  | GET | `account/contract/sub-account/main/v1/wallet` |
| [getFuturesSubTransfers()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L892) | :closed_lock_with_key:  | GET | `account/contract/sub-account/main/v1/transfer-list` |
| [getFuturesSubTransferHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L904) | :closed_lock_with_key:  | GET | `account/contract/sub-account/v1/transfer-history` |
| [getFuturesAffiliateRebates()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L922) | :closed_lock_with_key:  | GET | `contract/private/affiliate/rebate-list` |
| [getFuturesAffiliateTrades()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L931) | :closed_lock_with_key:  | GET | `contract/private/affiliate/trade-list` |
| [getBrokerRebate()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L943) | :closed_lock_with_key:  | GET | `spot/v1/broker/rebate` |

# FuturesClientV2.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [FuturesClientV2.ts](/src/FuturesClientV2.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getSystemTime()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L97) |  | GET | `system/time` |
| [getSystemStatus()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L101) |  | GET | `system/service` |
| [getFuturesContractDetails()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L122) |  | GET | `contract/public/details` |
| [getFuturesContractDepth()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L128) |  | GET | `contract/public/depth` |
| [getFuturesMarketTrade()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L134) |  | GET | `contract/public/market-trade` |
| [getFuturesOpenInterest()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L141) |  | GET | `contract/public/open-interest` |
| [getFuturesFundingRate()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L147) |  | GET | `contract/public/funding-rate` |
| [getFuturesKlines()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L153) |  | GET | `contract/public/kline` |
| [getFuturesMarkPriceKlines()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L159) |  | GET | `contract/public/markprice-kline` |
| [getFuturesFundingRateHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L165) |  | GET | `contract/public/funding-rate-history` |
| [getFuturesLeverageBracket()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L181) |  | GET | `contract/public/leverage-bracket` |
| [getFuturesAccountAssets()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L195) | :closed_lock_with_key:  | GET | `contract/private/assets-detail` |
| [getFuturesTradeFeeRate()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L205) | :closed_lock_with_key:  | GET | `contract/private/trade-fee-rate` |
| [getFuturesAccountOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L215) | :closed_lock_with_key:  | GET | `contract/private/order` |
| [getFuturesAccountOrderHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L221) | :closed_lock_with_key:  | GET | `contract/private/order-history` |
| [getFuturesAccountOpenOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L227) | :closed_lock_with_key:  | GET | `contract/private/get-open-orders` |
| [getFuturesAccountPlanOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L233) | :closed_lock_with_key:  | GET | `contract/private/current-plan-order` |
| [getFuturesAccountPositions()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L239) | :closed_lock_with_key:  | GET | `contract/private/position` |
| [getFuturesAccountPositionsV2()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L246) | :closed_lock_with_key:  | GET | `contract/private/position-v2` |
| [getPositionRiskDetails()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L256) | :closed_lock_with_key:  | GET | `contract/private/position-risk` |
| [getFuturesAccountTrades()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L263) | :closed_lock_with_key:  | GET | `contract/private/trades` |
| [getFuturesAccountTransactionHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L269) | :closed_lock_with_key:  | GET | `contract/private/transaction-history` |
| [getFuturesTransfers()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L275) | :closed_lock_with_key:  | GET | `account/v1/transfer-contract-list` |
| [submitFuturesOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L283) | :closed_lock_with_key:  | POST | `contract/private/submit-order` |
| [updateFuturesLimitOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L289) | :closed_lock_with_key:  | POST | `contract/private/modify-limit-order` |
| [cancelFuturesOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L298) | :closed_lock_with_key:  | POST | `contract/private/cancel-order` |
| [cancelAllFuturesOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L304) | :closed_lock_with_key:  | POST | `contract/private/cancel-orders` |
| [cancelAllFuturesOrdersAfter()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L310) | :closed_lock_with_key:  | POST | `contract/private/cancel-all-after` |
| [submitFuturesPlanOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L317) | :closed_lock_with_key:  | POST | `contract/private/submit-plan-order` |
| [cancelFuturesPlanOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L325) | :closed_lock_with_key:  | POST | `contract/private/cancel-plan-order` |
| [submitFuturesTransfer()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L331) | :closed_lock_with_key:  | POST | `account/v1/transfer-contract` |
| [setFuturesLeverage()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L337) | :closed_lock_with_key:  | POST | `contract/private/submit-leverage` |
| [submitFuturesTPSLOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L343) | :closed_lock_with_key:  | POST | `contract/private/submit-tp-sl-order` |
| [updateFuturesPlanOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L352) | :closed_lock_with_key:  | POST | `contract/private/modify-plan-order` |
| [updateFuturesPresetPlanOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L360) | :closed_lock_with_key:  | POST | `contract/private/modify-preset-plan-order` |
| [updateFuturesTPSLOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L373) | :closed_lock_with_key:  | POST | `contract/private/modify-tp-sl-order` |
| [submitFuturesTrailOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L381) | :closed_lock_with_key:  | POST | `contract/private/submit-trail-order` |
| [cancelFuturesTrailOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L389) | :closed_lock_with_key:  | POST | `contract/private/cancel-trail-order` |
| [setPositionMode()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L398) | :closed_lock_with_key:  | POST | `contract/private/set-position-mode` |
| [getPositionMode()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L407) | :closed_lock_with_key:  | GET | `contract/private/get-position-mode` |
| [submitFuturesSubToMainTransferFromMain()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L419) | :closed_lock_with_key:  | POST | `account/contract/sub-account/main/v1/sub-to-main` |
| [submitFuturesMainToSubTransferFromMain()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L428) | :closed_lock_with_key:  | POST | `account/contract/sub-account/main/v1/main-to-sub` |
| [submitFuturesSubToMainSubFromSub()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L437) | :closed_lock_with_key:  | POST | `account/contract/sub-account/sub/v1/sub-to-main` |
| [getFuturesSubWallet()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L446) | :closed_lock_with_key:  | GET | `account/contract/sub-account/main/v1/wallet` |
| [getFuturesSubTransfers()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L457) | :closed_lock_with_key:  | GET | `account/contract/sub-account/main/v1/transfer-list` |
| [getFuturesSubTransferHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L466) | :closed_lock_with_key:  | GET | `account/contract/sub-account/v1/transfer-history` |
| [getFuturesAffiliateRebates()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L481) | :closed_lock_with_key:  | GET | `contract/private/affiliate/rebate-list` |
| [getFuturesAffiliateTrades()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L487) | :closed_lock_with_key:  | GET | `contract/private/affiliate/trade-list` |
| [getFuturesAffiliateRebateUser()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L498) | :closed_lock_with_key:  | GET | `contract/private/affiliate/rebate-user` |
| [getFuturesAffiliateRebateApi()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L509) | :closed_lock_with_key:  | GET | `contract/private/affiliate/rebate-api` |
| [submitFuturesSimulatedClaim()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L531) | :closed_lock_with_key:  | POST | `contract/private/claim` |