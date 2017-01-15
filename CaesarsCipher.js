function rot13(str) { 
  var code=0;
  var word="";
  var newWord="";
  var x="";
  var num=13;
  for(var i=0;i<str.length;i++){
    word+=str[i];
    for(var j=0;j<word.length;j++){
      code=word.charCodeAt(j); 
     }
     if(code >= 65 && code <= 77){  // +13 for A-M, -13 for N-Z, +0 for any other character.
        newWord+=String.fromCharCode(code+13);
      }else if(code >= 78 && code <= 90){
        newWord+=String.fromCharCode(code-13);
      }else{
        newWord+=String.fromCharCode(code+0);
      }
    }
  return newWord;
}

// Change the inputs below to test
// rot13("SERR CVMMN!");
// rot13("SERR CVMMN!") should decode to "FREE PIZZA!"