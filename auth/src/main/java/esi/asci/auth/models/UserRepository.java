package esi.asci.auth.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class UserRepository {
    @Id
    @SequenceGenerator(name = "user_sequence", sequenceName = "user_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_sequence")
    private Long id;
    @Column(columnDefinition = "VARCHAR(30)", nullable = false)
    private String name;
    @Column(unique = true, columnDefinition = "VARCHAR(30)", nullable = false)
    private String email;
    @Column(nullable = false)
    private String password;

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
