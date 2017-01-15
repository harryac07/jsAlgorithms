function destroyer(arr) {
  // Remove all the values
 
  var array=[];
  var newArray=[];
  var z="";
  for(var k=1;k<arguments.length;k++){ //for  putting arguments other than array in new array.
    array.push(arguments[k]); 
  }
 
  
  for(var i=0;i<arr.length;i++){ //  for pusshing all the matched elements in newArray
    for(var j=0;j<array.length;j++){
      if(arr[i]==array[j]){
       
      newArray.push(arr[i]); // pushed to new array
       
      }
    }
   
  }
 
 arr = arr.filter( function( val ) { 
  return newArray.indexOf( val ) < 0;
} );
    return arr;
}

// destroyer([1, 2, 3,2, 7, 2, 3], 7, 3);
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
