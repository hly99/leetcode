var compress = function(chars) {
    var t=1
    for(var i=1;i<chars.length;i++){
        if(chars[i]==chars[i-1]){
            chars.splice(i,1)
            i--
            t++
        }else if(t>1){
            console.log(t)
            chars.splice(i,0,...(t.toString()).split(""))
            t=1
            i++
        }
    }
    if(t>1){
        chars.splice(i,0,...(t.toString()).split(""))
    }
    return chars.length
};