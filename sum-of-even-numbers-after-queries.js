var sumEvenAfterQueries = function(A, queries) {
    var sum=0;
    var arr=[]
    for(var i=0;i<A.length;i++){
        if(A[i]%2==0){
            sum = sum + A[i]
        }
    }
    for(var k=0;k<queries.length;k++){
        if(A[queries[k][1]]%2==0){
            sum = sum - A[queries[k][1]]
        }
        A[queries[k][1]] = A[queries[k][1]] + queries[k][0]
         if(A[queries[k][1]]%2==0){
            sum = sum + A[queries[k][1]]
        }
        arr[k]=sum
    }
    return arr;
};
