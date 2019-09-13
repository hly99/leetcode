var updateBoard = function(board, click) {
    if(board[click[0]][click[1]]==='M'){
        board[click[0]][click[1]] = 'X'
        return board
    }
    var nx = [1,1,0,-1,-1,-1,0,1]
    var ny = [0,1,1,1,0,-1,-1,-1]
    var r = board.length
    var t = board[0].length
    var arr = []
    for(var a = 0;a < r;a++){
        arr[a] = []
        for(var b = 0;b < t;b++){
            arr[a][b] = 0
        }
    }
    var que = [click]
    arr[click[0]][click[1]] = 1
    while(que.length!=0){
        var num = que.shift()
        var js = 0
        for(var i = 0;i < 8;i++){
            var x = nx[i] + num[0]
            var y = ny[i] + num[1]
            if(x>-1&&x<r&&y>-1&&y<t&&board[x][y]==='M'){
                js++
            }
        }
        if(js>0){
            board[num[0]][num[1]] = js + ''
            js = 0
        }else{
            board[num[0]][num[1]] = 'B'
            for(var j = 0;j < 8;j++){
                var n = nx[j] + num[0]
                var m = ny[j] + num[1]
                if(n>-1&&n<r&&m>-1&&m<t&&board[n][m]==='E'&&arr[n][m]===0){
                    que.push([n,m])
                    arr[n][m] = 1
                }
            }
        }
    }
    return board
};
