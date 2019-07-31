var reverseList = function(head) {
  var node = null
  var cur = head
  while(cur!=null){
    var lis = cur.next
    cur.next = node
    node = cur
    cur = lis
  }
  return node
};