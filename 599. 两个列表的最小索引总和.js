var findRestaurant = function(list1, list2) {
    var min = 999999
    var list = []
    for(var i = 0;i < list1.length;i++){
        for(var j = 0;j < list2.length;j++){
            if(list1[i]===list2[j]&&i + j < min){
                min = i+j
            }
        }
    }
    for(var i = 0;i < list1.length;i++){
        for(var j = 0;j < list2.length;j++){
            if(list1[i]===list2[j]&&i + j === min){
                list.push(list1[i])
            }
        }
    }
    return [list]
};