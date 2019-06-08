var peakIndexInMountainArray = function(A) {
    for(var i=0;i<A.length;i++){
        if(A[i]>A[i+1]){
            return i
        }
    }
};