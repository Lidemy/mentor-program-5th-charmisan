const request = require('request')

const options = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': 'axdp8afifeh04jhdgw099zhfel6473'
  }
}

function callback(error, response, body) {
  if (response.statusCode === 503) {
    console.log('Service Unavailable')
    return
  }
  let result
  try {
    result = JSON.parse(body)
  } catch (error) {
    console.log(error)
    return
  }
  for (let i = 0; i < result.top.length; i++) {
    console.log(result.top[i].viewers, result.top[i].game.name)
  }
}
request(options, callback)
