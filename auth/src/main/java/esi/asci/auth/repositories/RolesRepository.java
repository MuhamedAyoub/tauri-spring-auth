package esi.asci.auth.repositories;


import esi.asci.auth.interfaces.ERoles;
import esi.asci.auth.models.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RolesRepository extends JpaRepository<Roles, Long> {
    Optional<Roles> findByName(ERoles name);
}