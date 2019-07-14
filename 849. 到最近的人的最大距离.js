var maxDistToClosest = function(seats) {
    var max=0,js=0,i=0,set=-1
    for(;i<seats.length;i++){
        if(seats[i]===0){
            js++
        }else{
            max=Math.max(js,max)
            if(set===-1){
                set=js
            }
            js=0
        }
    }
    return Math.max(parseInt((max+1)/2),set,js)
};
console.log(maxDistToClosest([1,0,0,0,1,0,1]))