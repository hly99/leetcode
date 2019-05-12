var like=function(num){
    var js=0
    for(i of num){
        js+=i.length
    }
    return js
}
var matrixReshape = function(nums, r, c) {
  if(like(nums)!=r*c){
      return nums
  }
  var arr=new Array()
  for(var x=0;x<nums.length;x++){
    for(var y=0;y<nums[x].length;y++){
      arr.push(nums[x][y])
    }
  }
  var add=new Array()
  var pd=0
  for(var i=0;i<r;i++){
    add[i]=new Array()
    for(var j=0;j<c;j++){
      add[i].push(arr[pd])
      pd++
    }
  }
  return add
};
console.log(matrixReshape([[1,2],[3,4]],4,1))