var rotated=function(num){
  var pd=0
  while(num>0){
    var t=num%10
    if(t===1||t===0||t===8||t===2||t===5||t===6||t===9){
      if(t===2||t===5||t===6||t===9){
        pd=1
      }
    }else{
      return false
    }
    num=parseInt(num/10)
  }
  return pd===1
}
var rotatedDigits = function(N) {
  var js=0
  for(var y=1;y<=N;y++){
    if(rotated(y)){
      js++
    }
  }
  return js
};
console.log(rotatedDigits(10))