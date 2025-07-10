public class Logger {

    private static Logger logger= null;

    private Logger() {

    }
    public static Logger getInstance() {
        if (logger== null) {
            logger= new Logger(); // only if instance doesn't exist
        }
        return logger;
    }
    public void log(String message) {
        System.out.println(message);
    }

}
