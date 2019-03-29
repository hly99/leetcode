var addDigits = function(num) {
    while (num>9){
        var sum=0;
        while (num>0){
            sum=sum+num%10;
            num=parseInt(num/10);
        }
        num=sum;
    }
    return num;
};