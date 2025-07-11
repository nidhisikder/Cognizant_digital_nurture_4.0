package com.cognizant.jwt;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import java.util.Base64;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public String authenticate(@RequestHeader("Authorization") String authHeader) {
        // Decode the Authorization header (Basic base64encoded(user:password))
        String base64Credentials = authHeader.substring("Basic ".length());
        byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
        String credentials = new String(decodedBytes);

        String[] values = credentials.split(":", 2);
        String username = values[0];

        // Here you would generate a real JWT token; for now we return dummy
        return "{\"token\":\"JWT-TOKEN-FOR-" + username + "\"}";
    }
}
