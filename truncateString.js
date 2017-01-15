function truncate(str, num) {
  // Clear out that junk in your trunk
  var len=3;
  if(num>3){
    if(str.length>num){
      return str.slice(0,num-len)+"...";
    }else{
      return str;
    }
  }else{
    if(str.length>num){
      return str.slice(0,num)+"...";
    }else{
      return str;
    }
  }
  
  
}
// truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
// truncateString("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket...".