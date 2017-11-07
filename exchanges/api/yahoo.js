import request from 'request-promise'

const currencies = {
  time: 0,
  data: {},
}

const apiUrl = 'https://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=json'

const exchange = async (src, dst) => {
  if (Date.now() - currencies.time > 6E5) {
    currencies.data = await request(apiUrl).then(JSON.parse)
    currencies.time = Date.now()
  }

  const resource = currencies.data.list.resources.filter(data => {
    return data.resource.fields.name === `${src}/${dst}`
  }).pop()

  if (!resource) {
    throw new Error(`currency data not exists: ${src}/${dst}`)
  }

  return resource.resource.fields.price
}

export default {exchange}
