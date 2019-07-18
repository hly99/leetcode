var lastStoneWeight = function(stones) {
    console.log(stones)
    if(stones.length===1){
        return stones[0]
    }
    if(stones.length===0){
        return 0
    }
    if(stones.length===2){
        return Math.abs(stones[0]-stones[1])
    }
    stones.sort((a,b)=>b-a)
    if(stones[0]>stones[1]){
        stones.push(stones[0]-stones[1])
        return lastStoneWeight(stones.slice(2))
    }else{
        return lastStoneWeight(stones.slice(2))
    }
    
};
console.log(lastStoneWeight([2,7,4,1,8,1]))