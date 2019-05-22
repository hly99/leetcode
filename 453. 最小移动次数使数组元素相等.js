var minMoves = function(nums) {
    var sum=0
    var min=Math.min(...nums)
    for(var i of nums){
        sum=sum+(i-min)
    }
    return sum
};
console.log(minMoves([1,2,3]))