var isRobotBounded = function(instructions) {
  var x=0,y=0
  var nx=[1,0,-1,0],ny=[0,1,0,-1]
  var g=0
  for(var i=0;i<4;i++){
    for(var k=0;k<instructions.length;k++){
      if(instructions[k]==='G'){
        x=x+nx[g]
        y=y+ny[g]
      }else if(instructions[k]==='L'){
        g=(g+1)%4
      }else{
        g=g===0?3:g-1
      }
    }
    if(x===0&&y===0){
      return true
    }
  }
  return false
};