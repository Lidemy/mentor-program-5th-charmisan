const request = require('request')

const process = require('process')

const name = process.argv[2]

function main() {
  request(
    `https://restcountries.eu/rest/v2/name/${name}`,
    (error, response, body) => {
      if (response.statusCode === 404) {
        console.log('找不到國家資訊')
        return
      }
      let country
      try {
        country = JSON.parse(body)
      } catch (error) {
        console.log(error)
        return
      }
      for (let i = 0; i < country.length; i++) {
        console.log('============')
        console.log('國家 :', country[i].name)
        console.log('首都 :', country[i].capital)
        console.log('貨幣 :', country[i].currencies[0].code)
        console.log('國碼 :', country[i].callingCodes[0])
      }
    }
  )
}

main()
