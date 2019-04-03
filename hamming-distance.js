var hammingDistance = function(x, y) {
var arr = new Array();
var add = new Array();
for (var i=0;i<32;i++){
    arr[i]=0;
    add[i]=0;
}
var j=0;
while(x>0){
    arr[j]=x%2;
    x=parseInt(x/10);
    j++;
}
var k=0;
while(y>0){
    add[k]=y%2;
    y=parseInt(y/10);
    k++;
}
var js=0;
for(var p=0;p<32;p++){
    if(arr[p]!=add[p]){
        js++;
    }
}
return js;
};
