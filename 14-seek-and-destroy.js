function destroyer(arr) {
  var arg = Array.prototype.slice.call(arguments).splice(1, arguments.length);
  for(var i = 0, len = arg.length; i <len ;i++){
    arr = arr.filter(function(v){return v !== arg[i]})
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);