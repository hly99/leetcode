var flipAndInvertImage = function(A) {
  var arr=[]
  for(var i=0;i<A.length;i++){
    arr[i]=[]
    A[i].reverse()
    console.log(A[i])
    for(var j=0;j<A[i].length;j++){
      if(A[i][j]===1){
        arr[i].push(0)
      }else{
        arr[i].push(1)
      }
    }
  }
  return arr
};
console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))