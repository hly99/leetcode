class Solution {
    public int countServers(int[][] grid) {
    	int r = grid.length;
    	int c = grid[0].length;
        int[] nx = new int[r];
    	int[] ny = new int[c];
    	int num = 0;
    	for(int i = 0; i < r; i++) {
    		for(int j = 0; j < c; j++) {
    			if(grid[i][j] == 1) {
    				nx[i]++;
    				ny[j]++;
    			}
    		}
    	}
    	
    	for(int i = 0; i < r; i++) {
    		for(int j = 0; j < c; j++) {
    			if(grid[i][j] == 1 && (nx[i] > 1 || ny[j] > 1)) {
    				num++;
    			}
    		}
    	}
    	return num;
    }
}