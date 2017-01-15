// compare array and find the unmatched array from both array : using array.indexOf
function diffArray(arr1, arr2) {
  var newArr = [];
  var i=0; // for iteration
  var j=0; // for iteration
  if((arr1.length>0 && arr2.length>0)){ // if arr1 and arr2 is not empty
          for(i=0;i<arr1.length;i++){
            for(j=0;j<arr2.length;j++){
              if(arr1.indexOf(arr2[j])===-1){ // if elements are not matched,push the elements
                newArr.push(arr2[j]);
              }
              if(arr2.indexOf(arr1[i])===-1){// if elements are not matched,push the elements

                newArr.push(arr1[i]);
                }
            }
          }
   
  }else{
    newArr=(arr1.concat(arr2));
  }
 
newArr = newArr.filter(function(n){ // filter all the null or undefined values
  return n !== undefined ;
});
  return newArr;
  
}

// diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
// [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4]
