
public class Main {

	public static void main(String[] args) {

		String name = "Bro";
		
		Boolean result = name.equals("Bro");
		Boolean eq = name.equalsIgnoreCase("bro");
		
		int len = name.length();
		
		char letter = name.charAt(0);
		
		int ind = name.indexOf('B');
		
		Boolean res = name.isEmpty();
		
		String upper = name.toUpperCase();
		
		String lower = name.toLowerCase();
		
		String re = name.trim(); //remove all the whitespace of the string
		
		String replaced = name.replace('o', 'e');
	}

}
