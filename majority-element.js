var majorityElement = function(nums) {
    var x=nums.length;
    var js;
    for(var i=0;i<x;i++){
        js=0;
        for(var k=0;k<x;k++){
            if(nums[i]==nums[k]){
                js++;
            }
        }
        if(js>x/2){
            return nums[i];
        }
    }  
};