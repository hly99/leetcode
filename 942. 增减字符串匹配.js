var diStringMatch = function(S) {
    var s=S.length
    var arr=[]
    var l=0
    for(var i of S){
      if(i==='I'){
        arr.push(l++)
      }else{
        arr.push(s--)
      }
    }
    arr.push(s)
    return arr
};

console.log(diStringMatch("IDID"))