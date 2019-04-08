var checkRecord = function(s) {
    var a=0,l=0;
    var arr=s.split("")
    for(var i=0;i<arr.length;i++){
        if(arr[i]=='A'){
            a++
        }
        if(arr[i]=='L'){
            if(arr[i+1]=='L'){
                if(arr[i+2]=='L'){
                    return false;
                }
            }
        }
    }
    if(a<=1){
        return true
    }else{
        return false
    }
};