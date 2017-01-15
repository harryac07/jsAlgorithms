function findLongestWord(str) {
  var array=[];
  var i; 
  var count="";
  var maxlen=0;
  str=str.split(" "); // split the array elements by space and make it array
  
 //
  for (i = 0; i < str.length; i++) {
    //count += str[i].length ;
    if(str[i].length>maxlen){ // if length of str is greater than length,
      maxlen=str[i].length;
    }
  }
  return maxlen;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
