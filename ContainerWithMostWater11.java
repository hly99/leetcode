class Solution {
    public int maxArea(int[] height) {
    	int j = 0, k = height.length - 1;
    	int max = -1, min;
    	while(j < k) {
    		min = Math.min(height[j], height[k]);
    		max = min * (k - j) > max?  min * (k - j) : max;
    		if (height[j] < height[k]) {
				j++;
			}else {
				k--;
			}
    	}
        return max;
    }
}