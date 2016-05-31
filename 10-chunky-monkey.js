function chunkArrayInGroups(arr, size) {
  var temp = [];
  while(arr.length >= size){temp.push(arr.splice(0, size))}
  if(arr.length%size !== 0) temp.push(arr)
  return temp
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);