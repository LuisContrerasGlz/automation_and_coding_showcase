// The same interface or parent type can represent different implementations.

public class Animal {

    public void sound() {
        System.out.println("Animal sound");
    }
}

public class Dog extends Animal {

    @Override
    public void sound() {
        System.out.println("Bark");
    }
}

public class Cat extends Animal {

    @Override
    public void sound() {
        System.out.println("Meow");
    }
}

Animal animal1 = new Dog();
Animal animal2 = new Cat();

animal1.sound();
animal2.sound();

// concept with Selenium.

WebDriver driver = new ChromeDriver();
WebDriver driver = new FirefoxDriver();

