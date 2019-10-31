class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode sum = new ListNode(0);
        ListNode arr = sum;
        int t = 0; 
        while(l1 != null || l2 != null || t != 0){
            int l1val = l1 != null? l1.val : 0;
            int l2val = l2 != null? l2.val : 0;
            int num = l1val + l2val + t;
            t = num / 10;
            ListNode cur = new ListNode(num % 10);
            arr.next = cur;
            arr = cur;
            if(l1!=null){
                l1 = l1.next;
            }
            if(l2!=null){
                l2 = l2.next;
            }
        }
        return sum.next;
    }
}