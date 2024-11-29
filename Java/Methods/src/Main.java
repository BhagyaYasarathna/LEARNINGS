
public class Main {

	public static void main(String[] args) {
		
		String name = "Bhagya";
		int age = 25;
		
		hello(name, age);
		
		int x = 5;
		int y = 20;
		
		int z = add(x, y);
		System.out.println(z);

	}
	
	static void hello(String name, int age) {
		System.out.println("Hello " + name);
		System.out.println("You are " + age + " years old");
	}
	
	static int add(int x, int y) {
		int z = x + y;
		return z;
	}

}
