

function convertToRoman(num) {
  var array=[]; // for testing
  var arr=[]; // for testing
  
  var   roman = ""; // where roman number is to be put as a string
  var  i=0; // for iteration
  var obj = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
  };

  for ( i in obj ) { // iterating through the object with i
    while ( num >= obj[i] ) { // until no. given as paramtr is greater or equal (now, I and IV)
      roman += i;
      array.push(obj[i]);
      arr.push(roman);
      num -= obj[i];
    }
  }
  //return array+ ":"+ arr;
  return roman;
}
// convertToRoman(5);
// convertToRoman(3) should return "III".