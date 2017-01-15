
function smallestCommons(arr) {
  arr=arr.sort();
  var common = 0; 
  //take a multiple number to tha max value
  var multiple=arr[1];
  	while(common === 0) {
		//test all the number from our list
		for(var i = arr[0]; i <= arr[1]; i++ ){
			if(multiple % i !== 0 ){
              //if number is not divisible, break it
				break;
			}
            //if the number reaches upto last value, multiple is divisble by all values
			if(i == arr[1]){
				common = multiple;
			}

		}

		//move to the next multiple, we can just add the highest number.
		multiple += arr[1];
	}
  return common;
}


// smallestCommons([1,5]);
// smallestCommons([5, 1]) should return 60.
// smallestCommons([1, 13]) should return 360360.