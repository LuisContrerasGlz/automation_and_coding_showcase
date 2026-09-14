// Exposing what something does while hiding unnecessary implementation details.

public abstract class Animal {

    public abstract void sound();
}       

// Example of abstraction with Selenium.

loginPage.login("user", "password");


/*
The test doesn't care whether login internally uses:
findElement()
sendKeys()
click()
WebDriverWait()

 */