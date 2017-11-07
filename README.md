


bitcoin:

#### poloniex

website: https://poloniex.com/
chart: https://poloniex.com/exchange#usdt_btc
api doc: https://poloniex.com/exchange#usdt_btc
ticker: https://poloniex.com/public?command=returnTicker

#### kraken

website: https://www.kraken.com/
chart: https://www.kraken.com/charts
api doc: https://www.kraken.com/en-us/help/api
ticker: https://api.kraken.com/0/public/Ticker?pair=XXBTZUSD

```
<pair_name> = pair name
  a = ask array(<price>, <whole lot volume>, <lot volume>),
  b = bid array(<price>, <whole lot volume>, <lot volume>),
  c = last trade closed array(<price>, <lot volume>),
  v = volume array(<today>, <last 24 hours>),
  p = volume weighted average price array(<today>, <last 24 hours>),
  t = number of trades array(<today>, <last 24 hours>),
  l = low array(<today>, <last 24 hours>),
  h = high array(<today>, <last 24 hours>),
  o = today's opening price
```

#### bitfinex

website: https://www.bitfinex.com/
trading: https://www.bitfinex.com/trading
api doc: https://bitfinex.readme.io/v2/reference
ticker: https://api.bitfinex.com/v2/ticker/tBTCUSD

```
// on trading pairs (ex. tBTCUSD)
[
  BID,
  BID_SIZE,
  ASK,
  ASK_SIZE,
  DAILY_CHANGE,
  DAILY_CHANGE_PERC,
  LAST_PRICE,
  VOLUME,
  HIGH,
  LOW
]
```

#### bithumb

website: https://www.bithumb.com/
api doc: https://www.bithumb.com/u1/US127
ticker: https://api.bithumb.com/public/ticker/BTC

#### korbit

website: https://www.korbit.co.kr
trading: https://www.korbit.co.kr/market/btc_krw

汇率 https://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=json
