var wordPattern = function(pattern, str) {
    str=str.split(" ")
    if(pattern.length!=str.length){
        return false
    }
    var map=new Map()
    for(var i=0;i<str.length;i++){
        if(map.has(pattern[i])){
            if(str[i]!=map.get(pattern[i])){
                return false
            }
        }else{
            map.set(pattern[i],str[i])
        }
    }
    var m=new Map()
    for(var i=0;i<str.length;i++){
        if(m.has(str[i])){
            if(pattern[i]!=m.get(str[i])){
                return false
            }
        }else{
            m.set(str[i],pattern[i])
        }
    }
    return true
};
console.log(wordPattern("abba","dog cat cat fish"))