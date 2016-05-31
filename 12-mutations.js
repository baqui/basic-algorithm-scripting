function mutation(arr) {
  return arr[1].toLowerCase().split('').map(function(v){return arr[0].toLowerCase().indexOf(v) > -1}).indexOf(false) > -1 ? false : true;
}

mutation(["hello", "hey"]);