var reachNumber = function(target) {
  target = Math.abs(target);
  var sum = 0;
  var res = 1;
  while(target > sum || (target - sum) % 2 !== 0){
      sum += res++;
  } 
  return res-1;
};