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
  const n = Number(lines[0])
  for (let i = 1; i <= n; i++) {
    const arr = lines[i].split(' ')
    const A = arr[0]
    const B = arr[1]
    const K = Number(arr[2])
    if (A.length !== B.length && K === 1) {
      (A.length > B.length) ? console.log('A') : console.log('B')
    } else if (A.length !== B.length && K === -1) {
      (A.length > B.length) ? console.log('B') : console.log('A')
    } else {
      for (let j = 0; j <= A.length - 1; j++) {
        if (Number(A[j]) > Number(B[j])) {
          (K === 1) ? console.log('A') : console.log('B')
          break
        } else if (Number(A[j]) < Number(B[j])) {
          (K === 1) ? console.log('B') : console.log('A')
          break
        }
        if (j === A.length - 1) {
          console.log('DRAW')
          break
        }
      }
    }
  }
}
