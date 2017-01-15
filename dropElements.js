
function dropElements(arr, func) {
  var array=[];
   for(var i=0;i<arr.length;i++){
     if(func(arr[i])===true){
       array.push(arr.indexOf(arr[i])); // required number saved in array
       break;
     }
   }
  // if function checked is pass it checks array whether it is null or not.
  if(array.length>0){ 
    //if array is not empty(function test is passed)
      var required=arr.slice(array[0],arr.length);
      return required;
  }else{
    return array; // if array is empty then returns
  }

}

// dropElements([1, 2, 3, 4], function(n) {return n > 5;});
// dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
// dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].

// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

// The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

// Return the rest of the array, otherwise return an empty array.