var findComplement = function(num) {
    var sum=[]
    while(num>0){
        sum.push(num%2)
        num=parseInt(num/2)
    }
    var js=0
    var c=1
    for(var i=0;i<sum.length;i++){
        if(sum[i]==0){
            js=js+c
        }
        c=c*2
    }
    return js
};