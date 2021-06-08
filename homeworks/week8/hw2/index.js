const URL = 'https://api.twitch.tv/kraken'
const ClientID = 'axdp8afifeh04jhdgw099zhfel6473'
// 錯誤處理
const errMes = '系統不穩定，請再試一次'
getGame((err, data) => {
  if (err) {
    alert(err)
    return
  }
  for (const game of data) {
    const element = document.createElement('li')
    element.innerText = game.game.name
    document.querySelector('.navbar__list').appendChild(element)
  }
  document.querySelector('h1').innerText = data[0].game.name
  getStream(data[0].game.name, (err, data) => {
    if (err) {
      alert(err)
      return
    }
    for (const stream of data) {
      addStream(stream)
    }
  })
})

document.querySelector('.navbar').addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'li') {
    const gameName = e.target.innerText
    document.querySelector('h1').innerText = gameName
    document.querySelector('.stream__site').innerHTML = ''
    getStream(gameName, (err, data) => {
      if (err) {
        alert(err)
        return
      }
      for (const stream of data) {
        addStream(stream)
      }
    })
  }
})

// 抓取遊戲
function getGame(cb) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', `${URL}/games/top?limit=5`, true)
  xhr.setRequestHeader('Client-ID', ClientID)
  xhr.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 400) {
      let games
      try {
        games = JSON.parse(xhr.response).top
      } catch (err) {
        cb(errMes)
        return
      }
      if (!games) {
        cb(errMes)
        return
      }
      cb(null, games)
    } else {
      cb(errMes)
    }
  }
  xhr.onerror = function() {
    cb(errMes)
  }
  xhr.send()
}

// 抓取streams
function getStream(name, cb) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', `${URL}/streams?game=${encodeURIComponent(name)}&limit=20`, true)
  xhr.setRequestHeader('Client-ID', ClientID)
  xhr.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 400) {
      let streams
      try {
        streams = JSON.parse(xhr.response).streams
      } catch (err) {
        cb(errMes)
        return
      }
      if (!streams) {
        cb(errMes)
        return
      }
      cb(null, streams)
    } else {
      cb(errMes)
    }
  }
  xhr.onerror = function() {
    cb(errMes)
  }
  xhr.send()
}

// 加上20個stream
function addStream(stream) {
  const element = document.createElement('div')
  document.querySelector('.stream__site').appendChild(element)
  element.outerHTML = `<div class="stream__single">
                        <img src="${stream.preview.large}" />
                        <div class="stream__data">
                            <div class="stream__avatar">
                                <img src="${stream.channel.logo}">
                            </div>
                            <div class="stream__info">
                                <div class="stream__chanel__name">${stream.channel.status}</div>
                                <div class="stream__holder">${stream.channel.name}</div>
                            </div>
                        </div>
                      </div>`
}
