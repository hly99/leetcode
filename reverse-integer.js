var reverse = function(x) {
    if(x<0){
        var arr = -1*parseInt(x.toString().split("").reverse().join(""))
    }else{
        var arr = parseInt(x.toString().split("").reverse().join(""))
    }
    if(arr>2147483647||arr<-2147483648){
        return 0
    }
    return arr
};