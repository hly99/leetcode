
public class DailyTemperatures739 {
	public int[] dailyTemperatures(int[] T) {
		int[] arr = new int[T.length];
		for(int i = 0; i < T.length; i ++) {
			for (int j = i + 1; j < T.length; j++) {
				if(T[i] < T[j]) {
					arr[i] = j - i;
					break;
				}
			}
		}
		return arr;
        
    }
}
