public class LoginPage {

    private WebDriver driver;

    private By username =
        By.id("username");

    private By password =
        By.id("password");

    private By login =
        By.id("login");

    public LoginPage(
            WebDriver driver) {

        this.driver = driver;
    }

    public void login(
            String user,
            String pass) {

        driver
            .findElement(username)
            .sendKeys(user);

        driver
            .findElement(password)
            .sendKeys(pass);

        driver
            .findElement(login)
            .click();
    }
}

LoginPage loginPage =
    new LoginPage(driver);

loginPage.login(
    "testuser",
    "password123"
);

/*

Encapsulation:

    locators are private

Abstraction:

    test calls login()

Constructor dependency:

    WebDriver is injected

Single Responsibility:

    LoginPage handles login-page behavior

*/