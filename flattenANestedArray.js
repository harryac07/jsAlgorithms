
function steamrollArray(arr) {
arr=JSON.parse("[" + JSON.stringify(arr).replace(/[\[\]]+/g,"").replace(/,,/g,",") +
               "]");
  return arr;
}

// steamrollArray([1, [2], [3, [[4]]]]);
// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].