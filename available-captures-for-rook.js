var numRookCaptures = function(board) {
    var n,m
    for(var i=0;i<8;i++){
        for(var j=0;j<8;j++){
            if(board[i][j]=="R"){
                n=i
                m=j
            }
        }
    }
    var k,js=0
    for(k=n-1;k>=0;k--){
        if(board[k][m]=="B"){
            break;
        }
        if(board[k][m]=="p"){
            js++;
            break;
        }
    }
    for(k=n+1;k<8;k++){
        if(board[k][m]=="B"){
            break;
        }
        if(board[k][m]=="p"){
            js++;
            break;
        }
    }
    for(k=m-1;k>=0;k--){
        if(board[n][k]=="B"){
            break;
        }
        if(board[n][k]=="p"){
            js++;
            break;
        }
    }
    for(k=m+1;k<8;k++){
        if(board[n][k]=="B"){
            break;
        }
        if(board[n][k]=="p"){
            js++;
            break;
        }
    }
    return js
};