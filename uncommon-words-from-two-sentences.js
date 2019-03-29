var uncommonFromSentences = function(A, B) {
    var x=A.split(" ");
    var y=B.split(" ");
    var z=x+","+y;
    var n=z.split(",");
    var m=[];
    var p=0;
    for(var i=0;i<n.length;i++){
        var js=0;
        for(var k=0;k<n.length;k++){
            if(n[i]==n[k]){
                js++;
            }
        }
        if(js<=1){
            m[p]=n[i];
            p++;
        }
    }
    return m;
};
console.log(uncommonFromSentences("this apple is sweet","this apple is sour"));