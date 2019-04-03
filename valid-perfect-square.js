var isPerfectSquare = function(num) {
    for(var i=1;i<=num;i++){
        var sum=i*i;
        if(sum==num){
            return true;
        }
        if(sum>num){
            return false;
        }
    }
};