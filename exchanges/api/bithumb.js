import request from 'request-promise'
import yahoo from './yahoo'

const apiUrl = 'https://api.bithumb.com/public/ticker/BTC'

const ticker = async () => {
  const jsonData = await request(apiUrl).then(JSON.parse)

  const exchangePrice = await yahoo.exchange('USD', 'KRW')

  return {
    timestamp: Date.now(),
    ask: jsonData.data.sell_price / exchangePrice,
    bid: jsonData.data.buy_price / exchangePrice,
  }
}

export default {ticker}
