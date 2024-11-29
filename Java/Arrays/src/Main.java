
public class Main {

	public static void main(String[] args) {

		//Method 1
		String[] cars = {"Camaro", "Corvette", "Tesla", "BMW"};
		cars[0] = "Mustang";
		String car = cars[0];
		System.out.println(car);
		
		//Method 2
		String[] food = new String[3];
		food[0] = "pizza";
		food[1] = "drumsticks";
		food[2] = "bbq";
		
		//Iterating through an array
		for(int i=0; i<cars.length; i++) {
			System.out.println(cars[i]);
		}
		
		//2D Arrays
		
		//Method 1
		String[][] wheels = {
								{"Camaro", "Corvette", "Silverado"}, 
								{"Mustang", "Ranger", "F-150"}, 
								{"Ferrari", "Lambo", "Tesla"}
							 };
		
		//Method 2
		String[][] vehicles = new String[3][3];
		vehicles[0][0] = "Camaro";
		vehicles[0][1] = "Corvette";
		vehicles[0][2] = "Silverado";
		vehicles[1][0] = "Mustang";
		vehicles[1][1] = "Ranger";
		vehicles[1][2] = "F-150";
		vehicles[2][0] = "Ferrari";
		vehicles[2][1] = "Lambo";
		vehicles[2][2] = "Tesla";
		
		for(int i=0; i<vehicles.length; i++) {
			System.out.println();
			for(int j=0; j<vehicles[0].length; j++) {
				System.out.print(vehicles[i][j] + " ");
			}
		}
						
	}
}
