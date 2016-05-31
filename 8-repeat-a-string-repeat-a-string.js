function repeatStringNumTimes(str, num) {
  return num > 0 ? Array.apply(null, Array(num+1)).join(str) : "";
}

repeatStringNumTimes("abc", 3);
