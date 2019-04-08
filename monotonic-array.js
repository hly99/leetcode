var isMonotonic = function(A) {
    var arr=1,add=1
    for(var i=0;i<A.length-1;i++){
        if(A[i]<=A[i+1]){
            arr++;
        }
        if(A[i]>=A[i+1]){
            add++;
        }
    }
    if(arr==A.length||add==A.length){
        return true
    }else{
        return false
    }
};