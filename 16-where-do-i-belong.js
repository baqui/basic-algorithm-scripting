function getIndexToIns(arr, num) {
  var number;
  arr.sort(function(a,b){return a - b}).map(function(v,i){ if(v >= num && number === undefined){ number = i} })
  return number === undefined ? arr.length : number
}

getIndexToIns([40, 60], 50);