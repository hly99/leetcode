var commonChars = function(A) {
    var arr= new Array();
    for(var k=0;k<A.length;k++){
        arr[k]=A[k].split("")
    }
    var n=arr[0].length;
    var add=new Array();
    var t=0;
    for(var i=0;i<n;i++){
        var pd=0;
        for(var j=1;j<A.length;j++){
            for(var p=0;p<arr[j].length;p++){
                if(arr[0][i]==arr[j][p]){
                    arr[j].splice(p,1);
                    pd=1;
                    break;
                }else{
                    pd=0;
                }
            }
            if(pd==0){
                break;
            }
        }
        if(pd==1){
            add[t]=arr[0][i];
            t++;
        }
    }
    return add;
};
console.log(commonChars(["bella","label","roller"]))