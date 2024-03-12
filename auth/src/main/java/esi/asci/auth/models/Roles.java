package esi.asci.auth.models;

import esi.asci.auth.interfaces.ERoles;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Builder
@Table(name = "roles")
public class Roles {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private ERoles name;
    public Roles() {

    }

    public Roles(Integer id,ERoles name) {
        this.name = name;
        this.id = id;
    }

}