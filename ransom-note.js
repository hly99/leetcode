var canConstruct = function(ransomNote, magazine) {
    for(var i=0;i<ransomNote.length;i++){
        var pd=0;
        for(var k=0;k<magazine.length;k++){
            if(ransomNote[i]==magazine[k]){
                magazine=magazine.replace(magazine[k],"");
                pd=1;
                break;
            }
        }
        if(pd==0){
            return false;
        }
    }
    return true;
};