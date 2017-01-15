
function myReplace(str, before, after) {
  var arr=[];
  var cb=before.charAt(0); // first char of before
   var ca=after.charAt(0); // first char of after
  if(cb==cb.toUpperCase()){ // check if first char is uppercase and convert after accordingly
    ca=ca.toUpperCase();
    after=ca+after.substr(1);// forming new after word with first character Uppercase
  }else if(cb==cb.toLowerCase()){// check if first char is lowercase and convert after accordingly
    ca=ca.toLowerCase();
     after=ca+after.substr(1);// forming new after word with first character lowercase
  }
 var newstr=str.replace(before,after);
 return newstr;
}

// myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");
// myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
