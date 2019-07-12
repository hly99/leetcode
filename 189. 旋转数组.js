var rotate = function(nums, k) {
    for(var i=0;i<k;i++){
        var a=nums.pop()
        nums.unshift(a)
    }
    return nums
};
console.log(rotate([1,2,3,4,5,6,7],3))