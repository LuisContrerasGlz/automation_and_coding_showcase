// static belongs to the class rather than to individual objects.

public class Config {

    public static String BASE_URL =
            "https://example.com";
}

// access it without creating an object:
System.out.println(Config.BASE_URL);

public static void printMessage() {
    System.out.println("Hello");
}

Config.printMessage();

public static String generateRandomEmail() {
    return "test" + System.currentTimeMillis() + "@test.com";
}
Config.generateRandomEmail();