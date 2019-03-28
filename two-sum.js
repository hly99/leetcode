var twoSum = function(nums, target) {
    var i,k;
    var m=nums.length;
    for(i=0;i<m;i++){
        for(k=1;k<m;k++){
            if(nums[i]+nums[k]==target&&i!=k)
                return [i,k];
        }
    }
};