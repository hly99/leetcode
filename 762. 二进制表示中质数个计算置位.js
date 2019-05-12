var prime=function(e){
    if(e===1){
        return false
    }
    for(var j=2;j<e;j++){
        if(e%j==0){
            return false
        }
    }
    return true
}
var countPrimeSetBits = function(L, R) {
    var js=0
    for(var i=L;i<=R;i++){
        var num=0
        for(h of i.toString(2)){
            if(h==1){
                num+=1
            }
        }
        if(prime(num)){
           // console.log(num,prime(num))
            js++
        }
    }
    return js
};
console.log(countPrimeSetBits(6,10))