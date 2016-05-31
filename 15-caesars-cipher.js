function rot13(str) {
  return str.split('').map(function(v){
    if(v.charCodeAt() > 90 || v.charCodeAt() < 65){ return v;}
    else{ return v.charCodeAt() < 78 ? String.fromCharCode( 13 + v.charCodeAt()) : String.fromCharCode( v.charCodeAt() - 13) }
  }).join('')
}

rot13("SERR PBQR PNZC");