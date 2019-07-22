var findOcurrences = function(text, first, second) {
  text = text.split(" ")
  var arr = []
  for(var i=0;i<text.length;i++){
      if(text[i]===first&&text[i+1]===second){
          arr.push(text[i+2])
      }
  }
  return arr
};

console.log(findOcurrences("alice is a good girl she is a good student","a","good"))