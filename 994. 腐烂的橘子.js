var orangesRotting = function(grid) {
  var que = []
  var max = 0
  var r = grid.length
  var l = grid[0].length
  for(var i = 0;i<r;i++){
      for(var j = 0;j<l;j++){
          if(grid[i][j]===2){
              que.push([i,j,max])
          }
      }
  }
  var nx = [1,0,-1,0]
  var ny = [0,1,0,-1]
  while(que.length!=0){
    var sum = que.shift()
    var x = sum[0]
    var y = sum[1]
    var z = sum[2] + 1 
    for(var k = 0;k<4;k++){
        var dx = x+nx[k]
        var dy = y+ny[k]
        if(dx>-1&&dx<r&&dy>-1&&dy<l&&grid[dx][dy]===1){   
            que.push([dx,dy,z])
            grid[dx][dy]=2
            max = z
        }
    }
    
  }
  for(var i = 0;i<r;i++){
    for(var j = 0;j<l;j++){
        if(grid[i][j]===1){
            return -1
        }
    }
  }
  return max
};