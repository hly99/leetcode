
var numIslands = function(grid) {
    var dfs = function(x,y){
        // console.log(x,y)
        if(grid[x][y]==='0'){
            return
        }
        if(grid[x][y]==='1'){
            grid[x][y] = '0'
        }
        if(x+1>-1&&x+1<grid.length){
            dfs(x+1,y)
        }
        if(x-1>-1&&x-1<grid.length){
            dfs(x-1,y)
        }
        if(y+1>-1&&y+1<grid[0].length){
            dfs(x,y+1)
        }
        if(y-1>-1&&y-1<grid[0].length){
            dfs(x,y-1)
        }
        
    }
    var sum = 0
    for(var i=0;i<grid.length;i++){
        for(var j=0;j<grid[i].length;j++){
            if(grid[i][j]==='1'){
                dfs(i,j)
                // console.log(grid)
                sum++
            }
        }
    }
    return sum
};
