var detectCapitalUse = function(word) {
    var regSuper = /^[A-Z]*$/
    var regLower = /^[a-z]*$/
    var regFirst = /^[A-Z]{1}[a-z]*$/
    
    return regSuper.test(word) || regLower.test(word) || regFirst.test(word)
    
 };