
function fearNotLetter(str) {
  var arr=[];
  var odd=[];
  var word="abcdefghijklmnopqrstuvwxyz";
  var start=str.charAt(0);
  var end=str.charAt(str.length-1);
  // find word characters between start and end chars
  var neededWord =start+ word.match(new RegExp(start + "(.*)" + end)).pop()+end;
  neededWord=neededWord.split("");
  //arr.push(neededWord);
  str=str.split(""); // split into array(now str is an array )
  
  // comparing str and neededWord to find unmatched letter.
  for(var i=0;i<str.length;i++){
    for(var j=0;j<neededWord.length;j++){
      if(str.indexOf(neededWord[j])===-1){ // find unmatched from string
        if(arr.length===0){
          arr.push(neededWord[j]);
        }
      }
    }
    if(arr.length===0){ // if array didnt matched the elements
      return undefined;
    }
    
  }

  
  
  return arr.toString();
  
}

// fearNotLetter("abce");
// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghjklmno") should return "i".