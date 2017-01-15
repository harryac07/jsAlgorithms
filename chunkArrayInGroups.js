function chunk(arr, size) {
  // Break it up.
  var array=[];
  var j,temparray,chunk = size;
    for (i=0,j=arr.length; i<j; i+=size) {
    temparray = arr.slice(i,i+size);
    array.push(temparray);
}
  
  return array;
}

// chunk(["a", "b", "c", "d"], 2);
// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]
