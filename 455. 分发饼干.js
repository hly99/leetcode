var findContentChildren = function(g, s) {
  var x=0,y=0,sum=0
  g.sort((a,b)=>a-b)
  s.sort((a,b)=>a-b)
  while(x<s.length){
      if(g[y]<=s[x]){
          sum++
          x++
          y++
      }else{
          x++
      }
  }
  return sum  
};