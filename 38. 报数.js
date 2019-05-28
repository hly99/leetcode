var countAndSay = function(n) {
    let num = "1";
    let sum = ""
    for(let l=0;l<n-1;l++){
        let sum = ""
        for(let i =0,j=0;i<num.length;){
            if(num[i]==num[i+j]){
                j++;
            }else{
                sum = sum +j+""+num[i]; 
                i += j;
                j=1;
            }
                
            
        }
        num = sum;
    }
        return num;
  };