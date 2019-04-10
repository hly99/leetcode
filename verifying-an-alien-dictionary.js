var isAlienSorted = function(words, order) {
    var num=new Map;
    var arr=order.split("")
    for(var i=0;i<arr.length;i++){
      num.set(arr[i],i)
    }
    var add=[]
    for(var p=0;p<words.length;p++){
      add[p]=words[p].split("")
    }
    for(var t=1;t<words.length;t++){
      var pd=0
      for(var j=0;j<add[t-1].length;j++){
        if(num.get(add[t-1][j])<num.get(add[t][j])){
          pd=1
          break;
        }
        if(num.get(add[t-1][j])>num.get(add[t][j])){
          return false;
        }
      }
      if(add[t-1].length > add[t].length&&pd==0){
        return false;
      }
    }
    return true
};
console.log(isAlienSorted(["hello","leetcode"],"hlabcdefgijkmnopqrstuvwxyz"))