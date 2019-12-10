class Solution {
    public int subtractProductAndSum(int n) {
        int x = 1, y = 0;
        while(n > 0) {
        	int t = n % 10;
        	x = x * t;
        	y = y + t;
        	n = n / 10;
        }
        return x - y;
    }
}