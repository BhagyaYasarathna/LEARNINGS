import java.util.Random;

public class DiceRoller {
	
	Random random = new Random(); // this is a global variable
	int number; // this is a global variable
	
	DiceRoller(){
		roll();
	}
	
	void roll() {
		number = random.nextInt(6) + 1;
		System.out.println(number);
	}

}
