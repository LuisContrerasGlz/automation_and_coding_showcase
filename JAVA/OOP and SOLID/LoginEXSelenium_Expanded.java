public class LoginPage {

    private WebDriver driver;
    private WebDriverWait wait;

    private By username =
        By.id("username");

    private By password =
        By.id("password");

    private By loginButton =
        By.cssSelector(
            "[data-testid='login']"
        );

    private By errorMessage =
        By.id("login-error");

    public LoginPage(
            WebDriver driver) {

        this.driver = driver;

        this.wait =
            new WebDriverWait(
                driver,
                Duration.ofSeconds(10)
            );
    }

    public void login(
            String user,
            String pass) {

        wait.until(
            ExpectedConditions
                .visibilityOfElementLocated(
                    username
                )
        ).sendKeys(user);

        driver.findElement(password)
              .sendKeys(pass);

        wait.until(
            ExpectedConditions
                .elementToBeClickable(
                    loginButton
                )
        ).click();
    }

    public String
        getErrorMessage() {

        return wait.until(
            ExpectedConditions
                .visibilityOfElementLocated(
                    errorMessage
                )
        ).getText();
    }
}

// Test

public class LoginTest {

    private WebDriver driver;

    @BeforeEach
    public void setup() {

        driver =
            new ChromeDriver();

        driver.get(
            "https://example.com/login"
        );
    }

    @Test
    public void
        invalidLoginShowsError() {

        LoginPage loginPage =
            new LoginPage(driver);

        loginPage.login(
            "invalid",
            "invalid"
        );

        Assertions.assertEquals(
            "Invalid credentials",
            loginPage
                .getErrorMessage()
        );
    }

    @AfterEach
    public void tearDown() {

        driver.quit();
    }
}