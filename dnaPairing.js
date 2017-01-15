
function pairElement(str) {
  var arr=[];
  for(var i=0;i<str.length;i++){
    arr.push([str[i]]);
  }
  for(var j=0;j<arr.length;j++){
   if(arr[j]=="G"){
     arr[j].push("C");
   }else if(arr[j]=="C"){
     arr[j].push("G");
   }else if(arr[j]=="A"){
     arr[j].push("T");
   }else if(arr[j]=="T"){
     arr[j].push("A");
   }
  }
  return arr;
}

// pairElement("GCG");
// pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].