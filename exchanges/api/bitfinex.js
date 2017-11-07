import request from 'request-promise'

const apiUrl = 'https://api.bitfinex.com/v2/ticker/tBTCUSD'

const ticker = async () => {
  const jsonData = await request(apiUrl).then(JSON.parse)
  return {
    timestamp: Date.now(),
    ask: jsonData[2],
    bid: jsonData[0],
  }
}

export default {ticker}
