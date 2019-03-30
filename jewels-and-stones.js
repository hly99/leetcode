var numJewelsInStones = function(J, S) {
    var js=0;
    for(var i=0;i<S.length;i++){
        for(var k=0;k<J.length;k++){
            if(S[i]==J[k]){
                js++;
                break;
            }
        }
    }
    return js;
};