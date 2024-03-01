package esi.asci.auth.User;

public class UserRepository {
    private Long id;
    private String name;
    private String email;
    private String password;

    // create constructors
    public UserRepository() {
    }

    public UserRepository(Long id, String name, String email, String password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    // getters and setters
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;

    }

    public void setPassword(String password) {
        // I know that i have to hash the password here :)
        this.password = password;
    }

    // To String
    @Override
    public String toString() {
        return "User {email=" + email + ", id=" + id + ", name=" + name + "}";
    }

}
