var countPrimes = function(n) {
    var js=0
    for(var i=2;i<n;i++){
    var pd=1
        for(var j=2;j<i;j++){
            if(i%j==0){
                pd=0
                break
            }
        }
        if(pd==1){
            js++
        }
    }
    return js
};