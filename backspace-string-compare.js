var backspaceCompare = function(S, T) {
    var s=S.split("")
    var t=T.split("")
    for(var i=0;i<s.length;i++){
        if(s[0]=="#"){
            s.shift()
        }
        if(s[i]=="#"){
            s.splice(i-1,2);
            i=0
        }
    }
    for(var k=0;k<t.length;k++){
        if(t[0]=="#"){
            t.shift()
        }
        if(t[k]=="#"){
            t.splice(k-1,2);
            k=0
        }
    }
    if(s.join("")==t.join("")){
        return true 
    }else{
        return false
    }
};