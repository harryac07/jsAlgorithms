function sumAll(arr) {
var x=0;
 var max= Math.max(arr[0],arr[1]);
  var min=Math.min(arr[0],arr[1]);
  for(var i=min;i<=max;i++){
     x+=i;
  }
  return x;
}

// sumAll([1, 4]);
// sumAll([1, 4]) should return 10.