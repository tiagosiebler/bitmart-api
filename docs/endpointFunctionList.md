
# Endpoint maps

[![connector logo](https://github.com/tiagosiebler/bitmart-api/blob/master/docs/images/logo1.png?raw=true)][1]

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
| `getSystemTime()` |  | GET | `system/time` |
| `getSystemStatus()` |  | GET | `system/service` |
| `getSpotCurrenciesV1()` |  | GET | `spot/v1/currencies` |
| `getSpotTradingPairsV1()` |  | GET | `spot/v1/symbols` |
| `getSpotTradingPairDetailsV1()` |  | GET | `spot/v1/symbols/details` |
| `getSpotTickersV3()` |  | GET | `spot/quotation/v3/tickers` |
| `getSpotTickerV3()` |  | GET | `spot/quotation/v3/ticker` |
| `getSpotLatestKlineV3()` |  | GET | `spot/quotation/v3/lite-klines` |
| `getSpotHistoryKlineV3()` |  | GET | `spot/quotation/v3/klines` |
| `getSpotOrderBookDepthV3()` |  | GET | `spot/quotation/v3/books` |
| `getSpotRecentTrades()` |  | GET | `spot/quotation/v3/trades` |
| `getSpotTickersV2()` |  | GET | `spot/v2/ticker` |
| `getSpotTickerV1()` |  | GET | `spot/v1/ticker_detail` |
| `getSpotKLineStepsV1()` |  | GET | `spot/v1/steps` |
| `getSpotKlinesV1()` |  | GET | `spot/v1/symbols/kline` |
| `getSpotOrderBookDepthV1()` |  | GET | `spot/v1/symbols/book` |
| `getAccountBalancesV1()` | :closed_lock_with_key:  | GET | `account/v1/wallet` |
| `getAccountCurrenciesV1()` |  | GET | `account/v1/currencies` |
| `getSpotWalletBalanceV1()` | :closed_lock_with_key:  | GET | `spot/v1/wallet` |
| `getAccountDepositAddressV1()` | :closed_lock_with_key:  | GET | `account/v1/deposit/address` |
| `getAccountWithdrawQuotaV1()` | :closed_lock_with_key:  | GET | `account/v1/withdraw/charge` |
| `submitWithdrawalV1()` | :closed_lock_with_key:  | POST | `account/v1/withdraw/apply` |
| `getDepositWithdrawHistoryV2()` | :closed_lock_with_key:  | GET | `account/v2/deposit-withdraw/history` |
| `getDepositWithdrawDetailV1()` | :closed_lock_with_key:  | GET | `account/v1/deposit-withdraw/detail` |
| `getMarginAccountDetailsV1()` | :closed_lock_with_key:  | GET | `spot/v1/margin/isolated/account` |
| `submitMarginAssetTransferV1()` | :closed_lock_with_key:  | POST | `spot/v1/margin/isolated/transfer` |
| `getBasicSpotFeeRateV1()` | :closed_lock_with_key:  | GET | `spot/v1/user_fee` |
| `getActualSpotTradeFeeRateV1()` | :closed_lock_with_key:  | GET | `spot/v1/trade_fee` |
| `submitSpotOrderV2()` | :closed_lock_with_key:  | POST | `spot/v2/submit_order` |
| `submitMarginOrderV1()` | :closed_lock_with_key:  | POST | `spot/v1/margin/submit_order` |
| `submitSpotBatchOrdersV2()` | :closed_lock_with_key:  | POST | `spot/v2/batch_orders` |
| `cancelSpotOrderV3()` | :closed_lock_with_key:  | POST | `spot/v3/cancel_order` |
| `submitSpotBatchOrdersV4()` | :closed_lock_with_key:  | POST | `spot/v4/batch_orders` |
| `cancelSpotBatchOrdersV4()` | :closed_lock_with_key:  | POST | `spot/v4/cancel_orders` |
| `cancelAllSpotOrders()` | :closed_lock_with_key:  | POST | `spot/v4/cancel_all` |
| `cancelSpotOrdersV1()` | :closed_lock_with_key:  | POST | `spot/v1/cancel_orders` |
| `getSpotOrderByIdV4()` | :closed_lock_with_key:  | POST | `spot/v4/query/order` |
| `getSpotOrderByClientOrderIdV4()` | :closed_lock_with_key:  | POST | `spot/v4/query/client-order` |
| `getSpotOpenOrdersV4()` | :closed_lock_with_key:  | POST | `spot/v4/query/open-orders` |
| `getSpotHistoricOrdersV4()` | :closed_lock_with_key:  | POST | `spot/v4/query/history-orders` |
| `getSpotAccountTradesV4()` | :closed_lock_with_key:  | POST | `spot/v4/query/trades` |
| `getSpotAccountOrderTradesV4()` | :closed_lock_with_key:  | POST | `spot/v4/query/order-trades` |
| `marginBorrowV1()` | :closed_lock_with_key:  | POST | `spot/v1/margin/isolated/borrow` |
| `marginRepayV1()` | :closed_lock_with_key:  | POST | `spot/v1/margin/isolated/repay` |
| `getMarginBorrowRecordV1()` | :closed_lock_with_key:  | GET | `spot/v1/margin/isolated/borrow_record` |
| `getMarginRepayRecordV1()` | :closed_lock_with_key:  | GET | `spot/v1/margin/isolated/repay_record` |
| `getMarginBorrowingRatesV1()` | :closed_lock_with_key:  | GET | `spot/v1/margin/isolated/pairs` |
| `submitMainTransferSubToMainV1()` | :closed_lock_with_key:  | POST | `account/sub-account/main/v1/sub-to-main` |
| `submitSubTransferSubToMainV1()` | :closed_lock_with_key:  | POST | `account/sub-account/sub/v1/sub-to-main` |
| `submitMainTransferMainToSubV1()` | :closed_lock_with_key:  | POST | `account/sub-account/main/v1/main-to-sub` |
| `submitMainTransferSubToSubV1()` | :closed_lock_with_key:  | POST | `account/sub-account/main/v1/sub-to-sub` |
| `submitSubTransferSubToSubV1()` | :closed_lock_with_key:  | POST | `account/sub-account/sub/v1/sub-to-sub` |
| `getSubTransfersV1()` | :closed_lock_with_key:  | GET | `account/sub-account/main/v1/transfer-list` |
| `getAccountSubTransfersV1()` | :closed_lock_with_key:  | GET | `account/sub-account/v1/transfer-history` |
| `getSubSpotWalletBalancesV1()` | :closed_lock_with_key:  | GET | `account/sub-account/main/v1/wallet` |
| `getSubAccountsV1()` | :closed_lock_with_key:  | GET | `account/sub-account/main/v1/subaccount-list` |
| `getFuturesContractDetails()` |  | GET | `contract/public/details` |
| `getFuturesContractDepth()` |  | GET | `contract/public/depth` |
| `getFuturesOpenInterest()` |  | GET | `contract/public/open-interest` |
| `getFuturesFundingRate()` |  | GET | `contract/public/funding-rate` |
| `getFuturesKlines()` |  | GET | `contract/public/kline` |
| `getFuturesAccountAssets()` | :closed_lock_with_key:  | GET | `contract/private/assets-detail` |
| `getFuturesAccountOrder()` | :closed_lock_with_key:  | GET | `contract/private/order` |
| `getFuturesAccountOrderHistory()` | :closed_lock_with_key:  | GET | `contract/private/order-history` |
| `getFuturesAccountOpenOrders()` | :closed_lock_with_key:  | GET | `contract/private/get-open-orders` |
| `getFuturesAccountPlanOrders()` | :closed_lock_with_key:  | GET | `contract/private/current-plan-order` |
| `getFuturesAccountPositions()` | :closed_lock_with_key:  | GET | `contract/private/position` |
| `getPositionRiskDetails()` | :closed_lock_with_key:  | GET | `contract/private/position-risk` |
| `getFuturesAccountTrades()` | :closed_lock_with_key:  | GET | `contract/private/trades` |
| `getFuturesTransfers()` | :closed_lock_with_key:  | GET | `account/v1/transfer-contract-list` |
| `submitFuturesOrder()` | :closed_lock_with_key:  | POST | `contract/private/submit-order` |
| `cancelFuturesOrder()` | :closed_lock_with_key:  | POST | `contract/private/cancel-order` |
| `cancelAllFuturesOrders()` | :closed_lock_with_key:  | POST | `contract/private/cancel-orders` |
| `submitFuturesPlanOrder()` | :closed_lock_with_key:  | POST | `contract/private/submit-plan-order` |
| `cancelFuturesPlanOrder()` | :closed_lock_with_key:  | POST | `contract/private/cancel-plan-order` |
| `submitFuturesTransfer()` | :closed_lock_with_key:  | POST | `account/v1/transfer-contract` |
| `setFuturesLeverage()` | :closed_lock_with_key:  | POST | `contract/private/submit-leverage` |
| `submitFuturesSubToMainTransferFromMain()` | :closed_lock_with_key:  | POST | `account/contract/sub-account/main/v1/sub-to-main` |
| `submitFuturesMainToSubTransferFromMain()` | :closed_lock_with_key:  | POST | `account/contract/sub-account/main/v1/main-to-sub` |
| `submitFuturesSubToMainSubFromSub()` | :closed_lock_with_key:  | POST | `account/contract/sub-account/sub/v1/sub-to-main` |
| `getFuturesSubWallet()` | :closed_lock_with_key:  | GET | `account/contract/sub-account/main/v1/wallet` |
| `getFuturesSubTransfers()` | :closed_lock_with_key:  | GET | `account/contract/sub-account/main/v1/transfer-list` |
| `getFuturesSubTransferHistory()` | :closed_lock_with_key:  | GET | `account/contract/sub-account/v1/transfer-history` |
| `getFuturesAffiliateRebates()` | :closed_lock_with_key:  | GET | `contract/private/affiliate/rebate-list` |
| `getFuturesAffiliateTrades()` | :closed_lock_with_key:  | GET | `contract/private/affiliate/trade-list` |
| `getBrokerRebate()` | :closed_lock_with_key:  | GET | `spot/v1/broker/rebate` |

# FuturesClientV2.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [FuturesClientV2.ts](/src/FuturesClientV2.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| `getSystemTime()` |  | GET | `system/time` |
| `getSystemStatus()` |  | GET | `system/service` |
| `getFuturesContractDetails()` |  | GET | `contract/public/details` |
| `getFuturesContractDepth()` |  | GET | `contract/public/depth` |
| `getFuturesOpenInterest()` |  | GET | `contract/public/open-interest` |
| `getFuturesFundingRate()` |  | GET | `contract/public/funding-rate` |
| `getFuturesKlines()` |  | GET | `contract/public/kline` |
| `getFuturesAccountAssets()` | :closed_lock_with_key:  | GET | `contract/private/assets-detail` |
| `getFuturesAccountOrder()` | :closed_lock_with_key:  | GET | `contract/private/order` |
| `getFuturesAccountOrderHistory()` | :closed_lock_with_key:  | GET | `contract/private/order-history` |
| `getFuturesAccountOpenOrders()` | :closed_lock_with_key:  | GET | `contract/private/get-open-orders` |
| `getFuturesAccountPlanOrders()` | :closed_lock_with_key:  | GET | `contract/private/current-plan-order` |
| `getFuturesAccountPositions()` | :closed_lock_with_key:  | GET | `contract/private/position` |
| `getPositionRiskDetails()` | :closed_lock_with_key:  | GET | `contract/private/position-risk` |
| `getFuturesAccountTrades()` | :closed_lock_with_key:  | GET | `contract/private/trades` |
| `getFuturesTransfers()` | :closed_lock_with_key:  | GET | `account/v1/transfer-contract-list` |
| `submitFuturesOrder()` | :closed_lock_with_key:  | POST | `contract/private/submit-order` |
| `cancelFuturesOrder()` | :closed_lock_with_key:  | POST | `contract/private/cancel-order` |
| `cancelAllFuturesOrders()` | :closed_lock_with_key:  | POST | `contract/private/cancel-orders` |
| `submitFuturesPlanOrder()` | :closed_lock_with_key:  | POST | `contract/private/submit-plan-order` |
| `cancelFuturesPlanOrder()` | :closed_lock_with_key:  | POST | `contract/private/cancel-plan-order` |
| `submitFuturesTransfer()` | :closed_lock_with_key:  | POST | `account/v1/transfer-contract` |
| `setFuturesLeverage()` | :closed_lock_with_key:  | POST | `contract/private/submit-leverage` |
| `submitFuturesSubToMainTransferFromMain()` | :closed_lock_with_key:  | POST | `account/contract/sub-account/main/v1/sub-to-main` |
| `submitFuturesMainToSubTransferFromMain()` | :closed_lock_with_key:  | POST | `account/contract/sub-account/main/v1/main-to-sub` |
| `submitFuturesSubToMainSubFromSub()` | :closed_lock_with_key:  | POST | `account/contract/sub-account/sub/v1/sub-to-main` |
| `getFuturesSubWallet()` | :closed_lock_with_key:  | GET | `account/contract/sub-account/main/v1/wallet` |
| `getFuturesSubTransfers()` | :closed_lock_with_key:  | GET | `account/contract/sub-account/main/v1/transfer-list` |
| `getFuturesSubTransferHistory()` | :closed_lock_with_key:  | GET | `account/contract/sub-account/v1/transfer-history` |
| `getFuturesAffiliateRebates()` | :closed_lock_with_key:  | GET | `contract/private/affiliate/rebate-list` |
| `getFuturesAffiliateTrades()` | :closed_lock_with_key:  | GET | `contract/private/affiliate/trade-list` |