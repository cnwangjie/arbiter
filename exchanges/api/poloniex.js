import request from 'request-promise'

const apiUrl = 'https://poloniex.com/public?command=returnTicker'

const ticker = async () => {
  const jsonData = await request(apiUrl).then(JSON.parse)
  return {
    timestamp: Date.now(),
    ask: jsonData.USDT_BTC.lowestAsk,
    bid: jsonData.USDT_BTC.highestBid,
  }
}

export default {ticker}
