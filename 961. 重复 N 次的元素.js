var repeatedNTimes = function(A) {
    var ojs = new Map()
    for(var i of A){
        if(ojs.has(i)){
            return i
        }else{
            ojs.set(i,1)
        }
    }
};