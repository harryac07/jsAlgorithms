function reverseString(str) {
  var array=[];
  array= str.split(""); // String is splited with comma and put into Array
  var arrayReversed=array.reverse(); // array is reversed
  var String=arrayReversed.join(""); //reversed array element is joined to make string again.
  return String;
  
}

reverseString("hello");
