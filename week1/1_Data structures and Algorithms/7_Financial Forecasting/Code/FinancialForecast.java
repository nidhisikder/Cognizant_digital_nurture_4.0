import java.util.Scanner; 
public class FinancialForecast {
    public static double forecastFutureValue(double presentValue, double rate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return forecastFutureValue(presentValue * (1 + rate), rate, years - 1);
    }

    public static void main(String[] args) {
        
        Scanner sc= new Scanner(System.in);

        System.out.print("Enter Present Value: ");
        double presentValue = sc.nextDouble();
        
        System.out.print("Enter the Growth Rate ");
        double rate = sc.nextDouble();

        System.out.print("Enter the number of years: ");
        int years = sc.nextInt();

        double futureValue = forecastFutureValue(presentValue, rate, years);
        
        System.out.printf("Future Value after "+ years + " will be "+ futureValue);
    }
}
