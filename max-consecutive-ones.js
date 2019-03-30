var findMaxConsecutiveOnes = function(nums) {
    var max=-1;
    var js=0;
    for(var i=0;i<nums.length;i++){
      if(nums[i]==1){
        js++;
      }
      if(js>max){
        max=js;
      }
      if(nums[i]==0){
        js=0;
      }
    }
    return max;
};