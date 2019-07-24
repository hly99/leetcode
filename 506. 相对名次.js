var findRelativeRanks = function(nums) {
    var set=new Map()
    var sort=[...nums].sort((a,b)=>b-a)
    var num=[]
    for(var i=0;i<sort.length;i++){
        if(i===0){
            set.set(sort[i],"Gold Medal")
        }else if(i===1){
            set.set(sort[i],"Silver Medal")
        }else if(i===2){
            set.set(sort[i],"Bronze Medal")
        }else{
            set.set(sort[i],String(i+1))
        }
    }
    for(var j=0;j<nums.length;j++){
        num.push(set.get(nums[j]))
    }
    return num
};
console.log(findRelativeRanks([10,3,8,9,4]))