var lengthOfLastWord = function(s) {
    var t=0
    for(var i=s.length-1;i>=0;i--){
        if(/[A-Za-z]/.test(s[i])){
            t++;
        }else{
            if(t>0){
                break
            }
        }
    }
    return t
};