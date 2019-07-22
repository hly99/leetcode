var isIsomorphic = function(s, t) {
    if(s.length!=t.length){
        return false
    }
    for(var i=0;i<s.length;i++){
        if(s.indexOf(s[i])!=t.indexOf(t[i])){
            return false
        }
    }
    return true
};