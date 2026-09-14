public class User {

    String name;
    int age;

    public void printInfo() {
        System.out.println(name + " - " + age);
    }
}

User user = new User("Luis");