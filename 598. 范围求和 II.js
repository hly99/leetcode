var maxCount = function(m, n, ops) {
    if(ops.length===0){
        return n*m
    }
    var a = m;
    var b = n;
    for(var i=0;i<ops.length;i++){
        a=Math.min(a,ops[i][0])
        b=Math.min(b,ops[i][1])
    }
    return a*b
};