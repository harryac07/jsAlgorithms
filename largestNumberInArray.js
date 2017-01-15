function largestOfFour(arr) {
  // You can do this!
  var element=0;
  var solution = [];
  
  for(var i=0;i<arr.length;i++){
    var max=0;
    for(var j=0;j<arr[i].length;j++){
        if(arr[i][j]>max){
          max=arr[i][j];
          
        }
     }
    solution.push(max);
  }
  return solution;
  
  // Another Solution using math.apply
  
 /*   var newArr=[]; // Another Solution using math.apply
  // Only change code below this line
 for(var i=0; i<arr.length; ++i)     // Iterate array
  newArr.push(                      // Store ...
    Math.max.apply(Math, arr[i])    // ... the maximum of the subarray
  );
return newArr;*/

}

//largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001]