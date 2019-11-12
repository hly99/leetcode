import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Solution {
    public String addBinary(String a, String b) {
        List<String> list = new ArrayList<String>();
        String[] x = a.split("");
        String[] y = b.split("");
        int nx = x.length - 1, ny = y.length - 1;
        int num = 0;
        while( nx > 0 || ny > 0 || num != 0) {
        	int n = nx >= 0? Integer.parseInt(x[nx]) : 0;
        	int m = ny >= 0? Integer.parseInt(y[ny]) : 0;
        	System.out.println(n);
        	System.out.println(m);
        	nx --;
        	ny --;
        	if(n + m + num == 0) {
        		list.add("0");
        		num = 0;
        	}else if(n + m + num == 1) {
        		list.add("1");
        		num = 0;
        	}else if(n + m + num == 2){
        		list.add("0");
        		num = 1;
        	}else {
        		list.add("1");
        		num = 1;
        	}
        }
        Collections.reverse(list);
        return String.join("", list);
    }
}