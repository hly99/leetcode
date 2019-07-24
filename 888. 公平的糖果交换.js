var sum = (arr)=>{
    var sum=0
    for(var i of arr){
        sum=sum+i
    }
    return sum
}
var fairCandySwap = function(A, B) {
    var asum,bsum
    A.sort((a,b)=>a-b)
    B.sort((a,b)=>a-b)
    asum = sum(A)
    bsum = sum(B)
    var tiem = (asum-bsum)/2,i=0,j=0
    while(i<A.length&&j<B.length){
        if(A[i]-B[j]===tiem){
            return [A[i],B[j]]
        }else if(A[i]-B[j]>tiem){
            j++
        }else{
            i++
        }
    }
};
console.log(fairCandySwap([1,1],[2,2]))