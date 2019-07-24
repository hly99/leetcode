var smallestRangeI = function(A, K) {
    var a = Math.max(...A)
    var b = Math.min(...A)
    if(a-b<=2*K){
        return 0
    }else{
        return a-b-2*K
    }
};
console.log(smallestRangeI([0,10],2))