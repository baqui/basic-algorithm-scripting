function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(v){return v[0].toUpperCase() + v.substring(1, v.length)}).join(' ');
}