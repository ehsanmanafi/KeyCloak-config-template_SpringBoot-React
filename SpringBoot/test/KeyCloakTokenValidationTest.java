import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class KeyCloakTokenValidationTest {

    @Autowired
    private KeyCloakService keyCloakService;

    @Test
    void testValidateToken() {
        String validToken = "sampleValidToken"; // Mock or generate a sample valid token
        boolean isValid = keyCloakService.validateToken(validToken);
        assertTrue(isValid, "The token should be valid");

        String invalidToken = "invalidToken";
        boolean isInvalid = keyCloakService.validateToken(invalidToken);
        assertFalse(isInvalid, "The token should be invalid");
    }
}
