var calPoints = function(ops) {
    var sum = []
    var js = 0
    for(var i = 0;i <ops.length;i++){
        if(ops[i]==='+'){
            sum.push(sum[js-1]+sum[js-2])
            js++
        }else if(ops[i]==='D'){
            sum.push(sum[js-1]*2)
            js++
        }else if(ops[i]==='C'){
            sum.splice(js-1,1)
            js--
        }else{
            sum.push(parseInt(ops[i]))
            js++
        }
    }
    var s = 0
    for(var j of sum){
        s = s + j
    }
    return s 
};
console.log(calPoints(["5","-2","4","C","D","9","+","+"]))