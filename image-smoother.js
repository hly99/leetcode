var imageSmoother = function(M) {
    var nx=[0,-1,0,1,1,1,0,-1,-1];
    var ny=[0,1,1,1,0,-1,-1,-1,0];
    var arr=new Array();
    for(var x=0;x<M.length;x++){
        arr[x]=new Array();
        for(var y=0;y<M[x].length;y++){
            arr[x][y]=0;
        }
    }
    for(var i=0;i<M.length;i++){
        for(var j=0;j<M[i].length;j++){
            var sum=0;
             var js=0;
            for(var k=0;k<9;k++){
                if((i+nx[k]>=0&&j+ny[k]>=0)&&(i+nx[k]<=M.length-1&&j+ny[k]<=M[i].length-1)){
                    sum=sum+M[i+nx[k]][j+ny[k]];
                    js++;
                }
                arr[i][j]=parseInt(sum/js);
            }
        }
    }
    return arr;
};