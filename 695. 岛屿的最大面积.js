var maxAreaOfIsland = function(grid) {
    var sum = 0
    var dfs = function(x,y){
        if(grid[x][y]===1){
            sum++
            grid[x][y] = 0
        }else{
            return
        }
        if(x+1<grid.length){
            dfs(x+1,y)
        }
        if(x-1>-1){
            dfs(x-1,y)
        }
        if(y+1<grid[0].length){
            dfs(x,y+1)
        }
        if(y-1>-1){
            dfs(x,y-1)
        }
    }
    var max = 0
    for(var i=0;i<grid.length;i++){
        for(var j=0;j<grid[i].length;j++){
            if(grid[i][j]===1){
                dfs(i,j)
                max = Math.max(sum,max)
                sum = 0
            }
        }
    }
    return max
};