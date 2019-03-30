var isHappy = function(n) {
    var arr=[];
    var p=0;
  while(true){
      var sum=0;
        while(n>0){
            sum=sum+(n%10)*(n%10);
            n=parseInt(n/10);
        }
        if(sum==1){
            return true;
        }
        n=sum;
        for(var i=0;i<p;i++){
          if(arr[i]==n){
            return false;
          }
        }
        arr[p]=n;
        p++;
  }  
};