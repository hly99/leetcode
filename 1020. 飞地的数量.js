var numEnclaves = function(A) {
    var dfs = function(x,y){
        if(A[x][y]===0){
            return
        }
        if(A[x][y]===1){
            A[x][y]=0
        }
        if(x+1<A.length){
            dfs(x+1,y)
        }
        if(x-1>-1){
            dfs(x-1,y)
        }
        if(y+1<A[0].length){
            dfs(x,y+1)
        }
        if(y-1>-1){
            dfs(x,y-1)
        }
    }
    for(var i=0;i<A.length;i++){
        for(var j=0;j<A[i].length;j++){
            if(i===0||j===0||i===A.length-1||j===A[i].length-1){
                dfs(i,j)
            }
        }
    }
    var sum = 0
    for(var i=0;i<A.length;i++){
        for(var j=0;j<A[i].length;j++){
            if(A[i][j]===1){
                sum++
            }
        }
    }
    return sum
};