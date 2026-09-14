// Overloading = Same method name, different parameters.
public void login(String username, String password) {
}

public void login(String token) {
}

// Complite-time polymorphism
login("Luis", "1234");

login("jwt-token");

// Overriding = A child class changes the implementation of a parent method, runtime polymorphism.

public class Browser {

    public void start() {
        System.out.println("Starting browser");
    }
}

public class ChromeBrowser extends Browser {

    @Override
    public void start() {
        System.out.println("Starting Chrome");
    }
}

