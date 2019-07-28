var deleteDuplicates = function(head) {
  if(head===null||head.next===null){
    return head
  }
  var node = head
  while(node.next!=null){
    if(node.val==node.next.val){
      node.next = node.next.next
    }else{
      node = node.next
    }
  }
  return head
};