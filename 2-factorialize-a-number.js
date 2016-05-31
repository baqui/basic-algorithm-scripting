function factorialize(num) {
  return num !== 0 ? Array.apply(null,Array(num)).map(function(v, i){return i+1}).reduce(function(a,b){return a*b}) : 1;
}