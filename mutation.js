function mutation(arr) {
  var str1=arr[0].toLowerCase();
  var str2=arr[1].toLowerCase();
for(var i = 0; i < str2.length; i++){
  if(str1.indexOf(str2[i])<0){ //not found returns -1
    return false;
  }
  
}
  return true;
}
// mutation(["hello", "neo"]);
// mutation(["hello", "Hello"]) should return true.
