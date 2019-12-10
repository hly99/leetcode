class Solution {
    public int lengthOfLongestSubstring(String s) {
        char[] str = s.toCharArray();
        int max = 0;
        int init = 0;
        for (int i = 0; i < str.length; i++) {
			for (int j = init; j < i; j++) {
				if(str[i] == str[j]) {
					max = Math.max(max, i - init);
					init = j + 1;
					break;
				}
			}
		}
    }
}