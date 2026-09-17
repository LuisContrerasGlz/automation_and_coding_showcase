public class LoginPage {

    private WebDriver driver;

    public LoginPage(
            WebDriver driver) {

        this.driver = driver;
    }

    public void login(
            String username,
            String password) {

        // UI interactions
    }
}

@Test
public void loginTest() {

    LoginPage loginPage =
        new LoginPage(driver);

    loginPage.login(
        "Luis",
        "1234"
    );
}