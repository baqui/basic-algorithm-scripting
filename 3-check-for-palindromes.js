function palindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  var str1 = str.substring(0, Math.floor(str.length/2)),
      str2 = str.split('').reverse().join('').substring(0, Math.floor(str.length/2));
  return str1 === str2;
}