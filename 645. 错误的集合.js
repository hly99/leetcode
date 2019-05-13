var sum=function(arr){
    var js=0;
    for(i of arr){
        js +=i
    }
    return js
}
var findErrorNums = function(nums) {
    var set=new Set(nums)
    var x=sum(nums)-sum(set)
    var y=nums.length*(nums.length+1)/2-sum(set)
    return [x,y]
};
console.log(findErrorNums([1,2,2,4]))