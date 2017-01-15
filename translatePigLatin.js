
function translatePigLatin(str) {
  
  var arr=[];
  var firstchar=str.charAt(0);
  var vowel=["a","e","i","o","u"];
  for(var j=0;j<str.length;j++){
    for(var i=0;i<vowel.length;i++){
      if(str.charAt(0).match(vowel[i])){
        str=str+"way";
        arr.push(str.charAt(j));
        return str;
      }else if(str.charAt(j).match(vowel[i]) ){
        var index=str.indexOf(str.charAt(j));
        var removedChar=str.slice(0,index);// cutting the string from 0 until index
          str=str.slice(index); // str is equal to string ater index(i.e ight)
          return str+removedChar+"ay";
      }
    }

    
     // str=str.replace(firstchar,"")+firstchar+"ay";
    
  }

  
  
}

// translatePigLatin("fsaight");
// translatePigLatin("paragraphs") should return "aragraphspay".
// translatePigLatin("algorithm") should return "algorithmway".