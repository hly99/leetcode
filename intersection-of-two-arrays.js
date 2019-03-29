var intersection = function(nums1, nums2) {
    var n=nums1.length;
    var m=nums2.length;
    var num=[];
    for (var i=0;i<n;i++){
        for (var k=0;k<m;k++){
            if (nums1[i]==nums2[k]){
                num.push(nums1[i]);
                break;
            }
        }
    }
    var s = new Set(num)
    return Array.from(s);
};