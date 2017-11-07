import Koa from 'koa'
import bitfinex from '../exchanges/api/bitfinex'
import bithumb from '../exchanges/api/bithumb'
import kraken from '../exchanges/api/kraken'
import poloniex from '../exchanges/api/poloniex'
import fs from 'fs'
import path from 'path'

const data = {}
const getTickers = async () => {
  data.bitfinex = await bitfinex.ticker()
  data.bithumb = await bithumb.ticker()
  data.kraken = await kraken.ticker()
  data.poloniex = await poloniex.ticker()
}

setInterval(async () => {
  await getTickers()
}, 1000)

const app = new Koa()

app.use(async ctx => {
  if (ctx.path === '/tickers')
    ctx.body = Object.assign({}, data)
  else if (ctx.path === '/') {
    ctx.type = 'text/html'
    ctx.body = fs.readFileSync(path.join(__dirname, '../test/dynamicChart.html'))
  } else
    ctx.status = 404
})

app.listen(7201)
