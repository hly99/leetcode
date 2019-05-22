var largestPerimeter = function(A) {
    A.sort(function(a,b){ 
        return a-b;})
    for(var i=A.length;i>=0;i--){
        var a=A[i]
        var b=A[i-1]
        var c=A[i-2]
        if(c+b>a){
            return a+b+c
        }
    }
    return 0
};
console.log(largestPerimeter([1,2,2,4,18,8]))