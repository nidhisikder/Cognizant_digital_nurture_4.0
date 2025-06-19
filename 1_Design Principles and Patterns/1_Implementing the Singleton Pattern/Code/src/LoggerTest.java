
public class LoggerTest {
    public static void main(String[] args) {
        // Get logger instance 1
        Logger logger1 = Logger.getInstance();
        logger1.log("This is the first log message.");

        // Get logger instance 2
        Logger logger2 = Logger.getInstance();
        logger2.log("This is the second log message.");

        // Check if both instances are the same
        if (logger1 == logger2) {
            System.out.println("Only one Logger instance exists. Singleton works!");
        } else {
            System.out.println("Different Logger instances exist. Singleton failed!");
        }
    }
}