var firstUniqChar = function(s) {
    var arr=new Map()
    for(var i=0;i<s.length;i++){
        if(arr.has(s[i])){
            var t=arr.get(s[i])+1
            arr.set(s[i],t)
        }else{
            arr.set(s[i],1)
        }
    }
    for(var x of arr){
        if(x[1]==1){
            return s.indexOf(x[0])
        }
    }
    return -1
};
console.log(firstUniqChar("loveleetcode"))