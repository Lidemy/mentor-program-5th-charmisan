const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', (line) => {
  lines.push(line)
})

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines)
})

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(lines) {
  const n = lines[0].length
  const str = lines[0]
  let strReverse = ''
  for (let i = n - 1; i >= 0; i--) {
    strReverse += str[i]
  }
  if (strReverse === str) {
    console.log('True')
  } else {
    console.log('False')
  }
}
