import request from 'request-promise'

const apiUrl = 'https://api.kraken.com/0/public/Ticker?pair=XXBTZUSD'

const ticker = async () => {
  const jsonData = await request(apiUrl).then(JSON.parse)
  return {
    timestamp: Date.now(),
    ask: jsonData.result.XXBTZUSD.a[0],
    bid: jsonData.result.XXBTZUSD.b[0],
  }
}

export default {ticker}
