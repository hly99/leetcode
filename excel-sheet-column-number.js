var titleToNumber = function(s) {
    var sum=0;
    var js=1;
    var m=s.length;
    for(m=m-1;m>=0;m--){
        sum=sum+(s[m].charCodeAt()-64)*js;
        js=js*26;
    }
    return sum;
};