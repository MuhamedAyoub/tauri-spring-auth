package esi.asci.auth.dtos;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@Setter
@Getter
@NoArgsConstructor
public class RegisterRequest {
    @NotNull(message = "Name is required")
    private String name;
    @NotNull(message = "Email is required")
    private String email;
    @NotNull(message = "Password is required")
    private String password;
}