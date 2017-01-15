
function truthCheck(collection, pre) {
  var arr=[];
  for(var i=0;i<collection.length;i++){
    if(collection[i].hasOwnProperty(pre)){
      if( Boolean(collection[i][pre]) === true){ // if the value is true
        arr.push(collection[i].user);
      }
       
    }
    
  }
  if(collection.length===arr.length){
    return true;
  }else
  return false;
}

// truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");

// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.