package esi.asci.auth.repositories;


import java.util.Optional;
import esi.asci.auth.models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserModel, Long> {

    Optional<UserModel> findByEmail(String email);

}