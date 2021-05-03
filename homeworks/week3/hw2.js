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
  const arr = lines[0].split(' ')
  const n = Number(arr[0])
  const m = Number(arr[1])
  for (let i = n; i >= n && i <= m; i++) {
    const str = String(i)
    const digit = str.length
    let sum = 0
    for (let j = 0; j <= digit - 1; j++) {
      sum += Number(str[j]) ** digit
    }
    if (sum === i) {
      console.log(i)
    }
  }
}
