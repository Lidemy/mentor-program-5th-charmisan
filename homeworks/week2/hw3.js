function reverse(str) {
  var n = str.length
  var new_str =''
  for (var i = n - 1; i >= 0; i--){
    new_str += str[i]   
  }
  console.log(new_str)
}

reverse('hello');
