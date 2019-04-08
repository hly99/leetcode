var generate = function(numRows) {
    var arr=[]
    for(var j=0;j<numRows;j++){
      arr[j]=[]
      for(var k=0;k<=j;k++){
        if(k==0||k==j){
          arr[j][k] = 1
        }else{
          arr[j][k]=arr[j-1][k-1]+arr[j-1][k]
        }
      }
    }
    return arr
};
console.log(generate(5))