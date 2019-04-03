var convertToBase7 = function(num) {
    if(num==0){
        return '0';
    }
    var arr = new Array();
    var n = Math.abs(num);
    while(n>0){
        arr.unshift(n%7);
        n=parseInt(n/7);
    }
    arr=arr.join("");
    if(num>0){
        return arr;
    }else{
        return '-'+arr;
    }
};