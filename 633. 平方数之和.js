var judgeSquareSum = function(c) {
    var s = parseInt(Math.sqrt(c))
    var n = 0
    while(n<=s){
        if(s*s+n*n===c){
            return true
        }else if(s*s+n*n>c){
            s--
        }else{
            n++
        }
    }
    return false
}
console.log(judgeSquareSum(5))