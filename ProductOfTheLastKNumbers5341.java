import java.util.ArrayList;
import java.util.List;

public class ProductOfTheLastKNumbers5341 {
	List<Integer> list = new ArrayList<Integer>();
	public ProductOfNumbers() {
        
    }
    
    public void add(int num) {
        list.add(num);
    }
    
    public int getProduct(int k) {
        int sum = 1;
        for(int i = list.size() - 1; i >= list.size() - k; i--) {
        	sum = sum * list.get(i);
        }
        return sum;
    }
}
