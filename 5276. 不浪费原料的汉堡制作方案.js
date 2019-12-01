/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function(tomatoSlices, cheeseSlices) {
    var x = parseInt(tomatoSlices/2) - cheeseSlices
    var y = cheeseSlices*2 - parseInt(tomatoSlices/2)
    if(x + y == cheeseSlices&&x*4+y*2==tomatoSlices&&x>=0&&y>=0){
        return [x,y]
    }else{
        return []
    }
};