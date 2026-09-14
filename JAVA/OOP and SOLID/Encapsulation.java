// Hiding the internal state of an object and controlling access to it.

public class User {

    private String password;

    public void setPassword(String password) {

        if (password.length() >= 8) {
            this.password = password;
        }
    }

    public String getPassword() {
        return password;
    }
}

// Automation example

public class LoginPage {

    private WebDriver driver;

    private By username = By.id("username");
    private By password = By.id("password");
    private By loginButton = By.id("login");

    public void login(String user, String pass) {

        driver.findElement(username).sendKeys(user);
        driver.findElement(password).sendKeys(pass);
        driver.findElement(loginButton).click();
    }
}

loginPage.login("admin", "password");