function palindrome(str) {
  // Good luck!
   var String= str.toLowerCase(str); // works and changed string to lowercase
  //var noNumber=String.match(/\d+/gi); // works and finds numbers after matching them
  var matchA=String.match(/[A-Z\d+]/gi); // find the match from A to Z ignoring (global) cases.
  
  var requiredString= matchA.join(""); // make it string without 
  
  var reverse=matchA.reverse(); // reverse the match elements.
  reverse= reverse.join(""); // join the match element 
  
 
/* return reverseMatchA ;  these two gives opposite of each other
 return join;
 */
  
 if(requiredString==reverse){
   return true;
 }else{
   return false;
 }
 
  
}



palindrome("1 eye for of 1 eye.");
