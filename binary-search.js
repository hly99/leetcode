var search = function(nums, target) {
    var l=0;
    var h=nums.length-1;
    while(l<=h){
        var m=parseInt((l+h)/2);
        if(nums[m]==target){
            return m
        }else if(nums[m]<target){
            l=m+1;
        }else{
            h=m-1;
        }
    }
    return -1
};