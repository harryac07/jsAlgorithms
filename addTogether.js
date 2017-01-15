
function addTogether(x) {
  if(typeof arguments[0]==='number'){ // if arguments is a number
    if(arguments.length>1){ // if parameter is more than 2
      if(typeof arguments[0] === typeof arguments[1]){
        return arguments[0]+arguments[1];
      }

    }else{ // if parameter is less than 2 or 1
      return function(y){
          if(typeof x === typeof y && typeof x==='number'&& typeof y==='number'){
            return  x+y;
          }

      };
    }
  }
}



  
// addTogether(2)(1);
// addTogether(2, 3) should return 5.
// addTogether(2)(3) should return 5.
// addTogether("http://bit.ly/IqT6zt") should return undefined.