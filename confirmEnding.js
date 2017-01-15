
function confirmEnding(str, target) {
  var x="";
  for(var i=0;i<str.length;i++){
    x=str.charAt(str.length-target.length)+str.substr(str.length-target.length+1);
    if(x==target){
      return true;
    }else{
      return false;
    }
  }
}

confirmEnding("He has to give me a new name", "name");
