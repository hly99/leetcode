var canThreePartsEqualSum = function(A) {
  var sum = 0
  for(var p of A){
      sum = sum + p
  }  
  if(sum%3!=0){
      return false
  }
  var js = sum / 3
  var j = 0
  var num=0
  for(var i of A){
    num = num + i
    if(num === js){
        j ++
        num = 0
    }
  }
  return j === 3 
};