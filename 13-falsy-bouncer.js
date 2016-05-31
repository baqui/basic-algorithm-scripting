function bouncer(arr) {
  return arr.filter(function(v){return v && true });
}

bouncer([7, "ate", "", false, 9]);