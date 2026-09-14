// Allows one class to inherit behavior from another.

public class Animal {

    public void eat() {
        System.out.println("Eating");
    }
}

public class Dog extends Animal {

    public void bark() {
        System.out.println("Barking");
    }
}

Dog dog = new Dog();
dog.eat();
dog.bark(); 

// Automation example

public class BaseTest {

    protected WebDriver driver;

    public void setup() {
        driver = new ChromeDriver();
    }

    public void tearDown() {
        driver.quit();
    }
}

public class LoginTest extends BaseTest {

    public void testLogin() {

        driver.get("https://example.com");
    }
}