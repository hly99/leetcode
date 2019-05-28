var intToRoman = function(num) {
  var sum=''
  var value=[1000,900,500,400,100,90,50,40,10,9,5,4,1]
  var key=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
  for(var i=0;i<13;i++){
    while(num>=value[i]){
      sum += key[i]
      num -=value[i]
    }
  }
  return sum
};
