import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class AccessControlTest {

    @Autowired
    private KeyCloakService keyCloakService;

    @Test
    void testAdminAccess() {
        String adminToken = "sampleAdminToken"; // Mock an admin token
        boolean hasAccess = keyCloakService.hasAccess(adminToken, "ADMIN_RESOURCE");
        assertTrue(hasAccess, "Admin should have access to the resource");
    }

    @Test
    void testUserAccessDenied() {
        String userToken = "sampleUserToken"; // Mock a regular user token
        boolean hasAccess = keyCloakService.hasAccess(userToken, "ADMIN_RESOURCE");
        assertFalse(hasAccess, "Regular user should not have access to the admin resource");
    }
}
