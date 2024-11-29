import java.util.ArrayList;

public class Main {

	public static void main(String[] args) {

		String[] animals = {"cat", "dog", "rat", "bird"};
		
		for(String i : animals) {
			System.out.println(i);
		}
		
		ArrayList<String> beings = new ArrayList();
		
		beings.add("cat");
		beings.add("dog");
		beings.add("rat");
		beings.add("bird");
		
		for(String i : beings) {
			System.out.println(i);
		}

	}

}
