var rotateString = function(A, B) {
  if(A==B){
    return true
  }
  var arr=A.split("")
  for(var i=0;i<arr.length;i++){
    arr.push(arr[0])
    arr.shift();
    if(arr.join("")==B){
      return true
    }
  }
  return false
};