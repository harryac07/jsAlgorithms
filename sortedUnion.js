
function uniteUnique(arr) {
  var newArr=[];
  
  for(var i=0;i<arguments.length;i++){ // arguments.length: to check length of parameter passed
    newArr=newArr.concat(arguments[i]);
  }
  
  var result=[];// where new arr is put
  
  for(var j=0;j<newArr.length;j++){
     if(result.indexOf(newArr[j]) == -1){ //if no duplicates 
        result.push(newArr[j]);
     }
  }
 return result;
}

// uniteUnique([1, 2, 3], [5, 2, 1]);
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].