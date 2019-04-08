var findTheDifference = function(s, t) {
    var arr=s.split("")
    var add=t.split("")
    for(var i=0;i<arr.length;i++){
        for(var k=0;k<add.length;k++){
            if(arr[i]==add[k]){
                add.splice(k,1)
                break
            }
        }
    }
    return add.join("")
};