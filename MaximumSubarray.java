class Solution {
    public int maxSubArray(int[] nums) {
        int n = nums[0];
        int max = 0;
        for(int num : nums) {
        	if(max > 0) {
        		max = max + num;
        	}else {
        		max = num;
        	}
        	n = Math.max(n, max);
        }
        return n;
    }
}