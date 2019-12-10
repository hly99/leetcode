import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<List<Integer>> groupThePeople(int[] groupSizes) {
    	int[] arr = new int[groupSizes.length];
    	for (int i = 0; i < arr.length; i++) {
			arr[i] = 1;
		}
    	List<List<Integer>> list = new ArrayList<List<Integer>>();
        for(int i = 0; i < groupSizes.length; i++) {
        	if(arr[i] == 1) {
        		arr[i] = 0;
        		List<Integer> add = new ArrayList<Integer>();
        		add.add(i);
        		for(int j = 1; j < groupSizes[i]; j++) {
        			for(int k = i + 1; k < groupSizes.length; k++) {
        				if(groupSizes[k] == groupSizes[i] && arr[k] == 1) {
        					add.add(k);
        					arr[k] = 0;
        					break;
        				}
        			}
        		}
        		list.add(add);
        	}
        }
        return list;
    }

}