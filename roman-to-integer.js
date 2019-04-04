var romanToInt = function(s) {
    var m = new Map([['I',1],['V',5],['X',10],['L',50],['C',100],['D',500],['M',1000]]);
    var arr=s.split("");
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum=sum+m.get(arr[i]);
        if((arr[i-1]=='I')&&(arr[i]=='V'||arr[i]=='X')){
            sum=sum-2;
        }else if((arr[i-1]=='X')&&(arr[i]=='L'||arr[i]=='C')){
            sum=sum-20;
        }else if((arr[i-1]=='C')&&(arr[i]=='D'||arr[i]=='M')){
            sum=sum-200;
        }
    }
    return sum;
};