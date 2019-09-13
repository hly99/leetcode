var floodFill = function(image, sr, sc, newColor) {
    var initial = image[sr][sc]
    image[sr][sc] = newColor
    var jg = []
    var s = image.length
    var r = image[0].length
    for(var j=0;j<s;j++){
        jg[j] = []
        for(var k=0;k<r;k++){
            jg[j][k]=true
        }
    }
    jg[sr][sc]=false
    var que = [[sr,sc]]
    var nx = [1,0,-1,0]
    var ny = [0,1,0,-1]
    while(que.length!=0){
        var num = que.shift()
        for(var i=0;i<4;i++){
            var x = num[0] + nx[i]
            var y = num[1] + ny[i]
            if(x>-1&&x<s&&y>-1&&y<r&&image[x][y]===initial&&jg[x][y]===true){
                image[x][y] = newColor
                jg[x][y] = false
                que.push([x,y])
            }
        }
    }
    return image
}; 
