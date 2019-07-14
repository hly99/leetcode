var validMountainArray = function(A) {
    if(A.length<3){
        return false
    }
    var max=-1,k,i
    for(i=0;i<A.length;i++){
        if(A[i]>max){
            max=A[i]
            k=i
        }else if(A[i]===max){
            return false
        }
    }
    var x=0,y=0
    for(i=0;i<k;i++){
        if(A[i]>=A[i+1]){
            return false
        }else{
            x++
        }
    }
    for(i=k+1;i<A.length;i++){
        if(A[i]<=A[i+1]){
            return false
        }else{
            y++
        }
    }
    return x>0&&y>0
};
console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9]))