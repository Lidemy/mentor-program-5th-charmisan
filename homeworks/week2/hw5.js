function join(arr, concatStr) {
  var n = arr.length
  if ( n === 1 ) return arr[0]
  var new_arr = '' 
  for(var i = 0; i < n-1; i++ ){
    new_arr +=  arr[i] + concatStr
  }
  return new_arr + arr[n-1]   
}

function repeat(str, times) {
  var new_arr = ''
  for(var i = 0; i < times; i++){
    new_arr += str
  }
  return new_arr   
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
