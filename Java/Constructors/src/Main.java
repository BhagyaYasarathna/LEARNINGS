
public class Main {

	public static void main(String[] args) {

		Human human1 = new Human("Bhagya", 25, 48);
		Human human2 = new Human("Hasini", 30, 65);
		
		System.out.println(human1.name);
		System.out.println(human2.name);
		
		human2.eat();
		human1.drink();

	}

}
