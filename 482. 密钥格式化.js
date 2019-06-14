var licenseKeyFormatting = function(S, K) {
    var s = S.split("-").join("").toUpperCase()
    var num=[]
    for(var i=s.length-1;i>=0;i--){
        for(var j=0;j<K;j++){
            num.unshift(s[i--])
        }
        i++
        num.unshift("-")
    }
    num.splice(0,1)
    return num.join("")
};
console.log(licenseKeyFormatting("5F3Z-2e-9-w",4))

// 5F3Z2e9w