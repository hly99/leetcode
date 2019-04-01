var transpose = function(A) {
    var p=0;
	var arr=new Array();
	for(var x=0;x<A[p].length;x++){
		arr[x]=new Array();
		for(var y=0;y<A.length;y++){
			arr[x][y]=0;
		}
	}
	for(var i=0;i<A[p].length;i++){
		for(var j=0;j<A.length;j++){
			arr[i][j]=A[j][i];
		}
	}
	return arr;
};