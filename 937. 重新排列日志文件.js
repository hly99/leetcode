var reorderLogFiles = function (logs) {
  const sorts = function (s1, s2) {
      const S1 = s1.slice(s1.indexOf(' ') + 1);
      const S2 = s2.slice(s2.indexOf(' ') + 1);
      if(S1===S2){
        return 1
      }else{
        return S1 > S2 ? 1 : -1;
      }
  };
  let stringLog = [];
  let numberLog = [];
  for (let log of logs) {
      if (log[log.indexOf(' ') + 1].charCodeAt() < 97) {
          numberLog.push(log);
      } else {
          stringLog.push(log);
      }
  }
  stringLog.sort(sorts);
  return [...stringLog,...numberLog];
};
console.log(reorderLogFiles(["g1 act car","a2 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]))
