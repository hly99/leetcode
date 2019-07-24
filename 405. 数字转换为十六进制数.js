var toHex = function(num) {
  if(num===0){
    return '0'
  }  
  var map = new Map([[0,'0'],[1,'1'],[2,'2'],[3,'3'],[4,'4'],[5,'5'],[6,'6'],[7,'7'],[8,'8'],[9,'9'],[10,'a'],[11,'b'],[12,'c'],[13,'d'],[14,'e'],[15,'f']])
  var arr = ''
  if(num<0){
    num = num + 4294967296
  }
  while(num>0){
    arr = arr + map.get(num%16)
    num = parseInt(num/16)
  }
  return arr.split("").reverse().join("")
};
console.log(toHex(16))