

//check the prime numbers
function primes(num){
    if(num<2){
      return false;
    }else{
      for(var i=2;i<num;i++){
        if(num%i===0){
          return false;
        }
      }   
    }
  return true;
}

//return sum of all prices
function sumPrimes(num) {
  var total=0;

  for(var j=0;j<=num;j++){
    if(primes(j)){
      total+=j;
    }
  }
  return total;
  
}
// sumPrimes(7);
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.
