var numSquares = function(n) {
  var q = []
  q.push([n,0])
  var visited = []
  for(var i=0;i<=n;i++){
    visited.push(true)
  }
  visited[n] = false
  while(q.length!=0){
    var arr = q.shift()
    var num = arr[0]
    var step = arr[1]
    var i = 1
    var tnum = num - i * i
    while(tnum >= 0){
      if(tnum===0){
          return step + 1
      }
      if(visited[tnum]===true){
          q.push([tnum,step+1])
          visited[tnum]=false
      }
      i++
      tnum = num - i * i
    }
  }
};

console.log(numSquares(13))