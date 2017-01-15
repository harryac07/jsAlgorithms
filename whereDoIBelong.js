function where(arr, num) {
  // Find my place in this sorted array.
  var array=[];
  for(var i=1;i<arguments.length;i++){
    arr.push(arguments[i]);
    //arr.sort();
  }
 arr=arr.sort(function(a,b){
     return a-b; 
          });
  return arr.indexOf(num);
}

where([3, 10, 5], 2);
// getIndexToIns([10, 20, 30, 40, 50], 30) should return 2
