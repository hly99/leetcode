var mergeTwoLists = function(l1, l2) {
    var li = new ListNode()
    var cur = li
    while(l1!=null&&l2!=null){
      if(l1.val < l2.val){
        cur.next = l1
        cur = cur.next
        l1 = l1.next
    }else{
        cur.next = l2
        cur = cur.next
        l2 = l2.next
    }
    }
    cur.next = l1==null?l2:l1
    return li.next
};