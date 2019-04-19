var reverseOnlyLetters = function(S) {
    var arr=S.split("")
    var add=new Array();
    var p=S.match(/[A-Za-z]/g)
    if(p==null){
        return S
    }
    var t=p.length-1;
    for(var i=0;i<arr.length;i++){
        if(!/[A-Za-z]/.test(S[i])){
            add[i]=S[i];
        }else{
            add[i]=p[t];
            t--
        }
    }
    return add.join("")
};