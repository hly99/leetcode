var isBoomerang = function(points) {
    var x1=points[0][0]-points[1][0]
    var y1=points[0][1]-points[1][1]
    var x2=points[0][0]-points[2][0]
    var y2=points[0][1]-points[2][1]
    return x1*y2!=x2*y1
};