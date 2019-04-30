var singleNumber = function(nums) {
     var a=0
     for (var num of nums){
       a=a^num
     }
     return a
};