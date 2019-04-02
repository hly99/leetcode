var toGoatLatin = function(S) {
    var s=new Array();
    s=S.split(" ");
    for(var i=0;i<s.length;i++){
        if (s[i][0]=='a'||s[i][0]=='e'||s[i][0]=='i'||s[i][0]=='o'||s[i][0]=='u'||s[i][0]=='A'||s[i][0]=='E'||s[i][0]=='I'||s[i][0]=='O'||s[i][0]=='U'){
            s[i]=s[i]+'ma';
        }
        else{
            arr=s[i][0];
            s[i]=s[i].substr(1);
            s[i]=s[i]+arr+'ma';
        }
        for(var j=0;j<i+1;j++){
            s[i]=s[i]+'a';
        }
    }
    var num=s.join(" ");
    return num;
};