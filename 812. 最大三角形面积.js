var largestTriangleArea = function(points) {
    var max=0
    for(var i=0;i<points.length;i++){
        for(var j=i+1;j<points.length;j++){
            for(var k=j+1;k<points.length;k++){
                max=Math.max(max,Math.abs(points[i][0] * points[j][1] 
                                        + points[j][0] * points[k][1] 
                                        + points[k][0] * points[i][1] 
                                        - points[i][0] * points[k][1] 
                                        - points[j][0] * points[i][1] 
                                        - points[k][0] * points[j][1]) / 2.0)
            }
        }
    }
    return max
};