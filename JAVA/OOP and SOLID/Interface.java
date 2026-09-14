// An interface defines a contract, Different implementations can implement it:
public interface PaymentService {

    void pay(double amount);
}

public class CreditCardPayment implements PaymentService {

    public void pay(double amount) {
        System.out.println("Credit card payment: " + amount);
    }
}

public class PayPalPayment implements PaymentService {

    public void pay(double amount) {
        System.out.println("PayPal payment: " + amount);
    }
}

PaymentService payment = new CreditCardPayment();

payment.pay(100);