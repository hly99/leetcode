var uniqueMorseRepresentations = function(words) {
    var map=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    var set=new Set()
    for(var i of words){
      var num=''
      for(var j of i){
        num +=map[j.charCodeAt()-97]
      }
      set.add(num)
      num=''
    }
    return [...set].length
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))