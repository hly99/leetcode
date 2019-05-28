var judgeCircle = function(moves) {
    var map = new Map([['R',[-1,0]],['L',[1,0]],['U',[0,1]],['D',[0,-1]]])
    var pd=[0,0]
    for(var i of moves){
        pd=[pd[0]+map.get(i)[0],pd[1]+map.get(i)[1]]
        console.log(pd)
    }
    return pd[0]===0&&pd[1]===0
};
console.log(judgeCircle('UD'))