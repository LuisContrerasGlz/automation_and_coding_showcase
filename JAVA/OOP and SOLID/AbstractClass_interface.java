/*
An abstract class can contain both:

implemented methods
abstract methods
instance variables
constructors
*/

public abstract class Browser {

    protected String browserName;

    public Browser(String browserName) {
        this.browserName = browserName;
    }

    public void printBrowser() {
        System.out.println(browserName);
    }

    public abstract void start();
}

public class ChromeBrowser extends Browser {

    public ChromeBrowser() {
        super("Chrome");
    }

    @Override
    public void start() {
        System.out.println("Starting Chrome");
    }
}

public interface Browser {

    void start();
}

/*
use an interface when want to define a contract that different implementations can follow. 
Use an abstract class when the implementations share common state or common behavior that I want to reuse. 
*/