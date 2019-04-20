var longestCommonPrefix = function(strs) {
  if(strs.length==0){
      return ""
  }
  var arr=strs[0].split("")
  var add=[]
  for(var i=0;i<strs.length;i++){
      add[i]=strs[i].split("")
  }
  var t=[]
  for(var j=0;j<arr.length;j++){
      var pd=1
      for(var k=0;k<add.length;k++){
          if(arr[j]!=add[k][j]){
              pd=0
              break
          }
      }
      if(pd==1){
          t.push(arr[j])
      }else{
        break
      }
  }
      return t.join("")
};
console.log(longestCommonPrefix([""]))