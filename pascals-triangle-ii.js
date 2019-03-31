var getRow = function(rowIndex) {
    var arr=[1];
    for(var i=1;i<=rowIndex;i++){
        var add=[];
        for(var k=0;k<=i;k++){
            if(k==0||k==i){
                add[k]=1;
            }else{
                add[k]=arr[k-1]+arr[k];
            }
        }
        arr=add;
    }
    return arr;
};