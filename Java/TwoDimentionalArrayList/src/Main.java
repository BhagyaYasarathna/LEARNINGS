import java.util.* ;

public class Main {

	public static void main(String[] args) {
		
		ArrayList<ArrayList<String>> groceryList = new ArrayList();

		ArrayList<String> bakeryList = new ArrayList();
		bakeryList.add("pasta");
		bakeryList.add("garlic bread");
		bakeryList.add("donuts");
		
		ArrayList<String> productList = new ArrayList();
		productList.add("tomatoes");
		productList.add("zucchini");
		productList.add("peppers");
		
		ArrayList<String> drinkList = new ArrayList();
		drinkList.add("soda");
		drinkList.add("coffee");
		
		groceryList.add(bakeryList);
		groceryList.add(productList);
		groceryList.add(drinkList);
		
		System.out.println(groceryList);
		
		System.out.println(groceryList.get(0).get(0));
	}

}
