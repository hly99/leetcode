class Solution {
    public int countPrimes(int n) {
        int sum = 0;
        boolean[] arr = new boolean[n];
        for(int i = 2; i < n; i++){
            if(arr[i] == false){
                sum++;
                for(int j = 2; i * j < n; j++){
                    arr[i * j] = true;
                }
            }
        }
        return sum;
    }
}