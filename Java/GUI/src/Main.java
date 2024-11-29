/*
import java.awt.Color;
import javax.swing.ImageIcon;
import javax.swing.JFrame;
*/

public class Main {

	public static void main(String[] args) {
		
		// JFrame  = a GUI window to add components to 
		
		
		/*
		JFrame frame = new JFrame(); //creates a frame
		frame.setTitle("JFrame title goes here"); //sets title of frame
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); //exit out of application
//		frame.setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE); 
//		frame.setDefaultCloseOperation(JFrame.HIDE_ON_CLOSE);
		frame.setResizable(false); //prevent frame from being resized
		frame.setSize(420, 420); //sets the x-dimension, and y-dimension
		frame.setVisible(true); //make frame visible
		
		ImageIcon image = new ImageIcon("logo.png"); //create an ImageIcon
		frame.setIconImage(image.getImage()); //change icon of frame
		
		frame.getContentPane().setBackground(new Color(180,0,25)); //change color of background
//		frame.getContentPane().setBackground(Color.green); 
		*/
		
		
		new MyFrame();

	}

}
