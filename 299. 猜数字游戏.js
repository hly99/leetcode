var getHint = function(secret, guess) {
    var a=0
    var b=0
    var set=secret.split("")
    var gue=guess.split("")
    for(var i=0;i<gue.length;i++){
        if(set[i]===gue[i]){
            a++
            set[i]=','
            gue[i]='.'
        }
    }
    for(var j=0;j<gue.length;j++){
        if(set.indexOf(gue[j])!=-1){
            set[set.indexOf(gue[j])]=','
            b++
        }
    }
    return a+'A'+b+'B'
};
console.log(getHint("1122","1222"))