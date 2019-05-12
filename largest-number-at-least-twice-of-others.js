var dominantIndex = function(nums) {
  let maxstep=Math.max(...nums)
  let inof
  for(let i=0;i<nums.length;i++){
    if(nums[i]===maxstep){
      inof=i
      break
    }
  }
  for(let j=0;j<nums.length;j++){
    if(nums[j]*2>maxstep&&j!=inof){
      return -1
    }
  }
  return nums.indexOf(maxstep)
};
console.log(dominantIndex([0,0,0,1]))