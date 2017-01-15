function titleCase(str) {
  var String=str.split(" "); // now string is an array 
  var i;
  var newArr=[];
  var newstr="";
  for(i=0;i<String.length;i++){
    newArr[i] = String[i].charAt(0).toUpperCase() + String[i].substr(1).toLowerCase(); // need to glue the rest of each string back on:using substr
    newstr=newArr.join(" ");
  }
  return newstr;
  
}

titleCase("I'm a little tea pot");
