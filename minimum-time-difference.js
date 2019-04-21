var findMinDifference = function(timePoints) {
    var pointFormat = (point) => {
      var [hour, minute] = point.split(':');
      return (+hour) * 60 + (+minute)
    }
    var minutes = timePoints.map(pointFormat)
    minutes.sort((a,b)=>(a-b))
    var len = minutes.length
    var min = 24 * 60 - minutes[len-1] + minutes[0];
    for(let i = 1;i < len;i++) {
      min = Math.min(minutes[i] - minutes[i-1], min)
    }
    return min;
};