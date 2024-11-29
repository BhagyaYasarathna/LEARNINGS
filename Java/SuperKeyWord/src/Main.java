
public class Main {

	public static void main(String[] args) {

		Hero hero1 = new Hero("Batman", 42, "$$$");
		
		System.out.println(hero1.name);
		System.out.println(hero1.age);
		System.out.println(hero1.power);
		
		System.out.println(hero1.toString());

	}

}
