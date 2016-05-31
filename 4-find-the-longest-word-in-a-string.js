function findLongestWord(str) {
  return Math.max.apply(null, str.split(' ').map(function(v){return v.length}));
}