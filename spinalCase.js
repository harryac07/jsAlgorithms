
function spinalCase(str) {
 //return str.match(/[A-Z]||[a-z]/gi); good one
  var newArr=[];
  var arr=str.match(/[A-Z]||[a-z]/gi);
    /*
     * replacing the blank with -
     */  
  for(var i=1;i<arr.length-1;i++){ // using 1 to ignore first and last
    if(arr[i].length===0){
      arr[i]='-';
    }
    /*
     * putting - infront of Uppercase letter if there is not any already
     */
    if(arr[i].match(/[A-Z]/g) && !arr[i-1].match('-')){ 
       arr[i]='-'+arr[i];
       }
  }
  arr=arr.join("").toLowerCase();
  return arr;
  
  
}

// spinalCase('AllThe-small Things');
// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".

