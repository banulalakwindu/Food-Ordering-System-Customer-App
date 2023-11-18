package com.crown.foods.Service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crown.foods.Class.User;
import com.crown.foods.Repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Map<String, String> login(String username, String password) {
        Map<String, String> response = new HashMap<>();

        User user = userRepository.findByUsernameAndPassword(username, password);

        if (user != null) {
            response.put("status", "success");
            response.put("message", "Login successful");
        } else {
            response.put("status", "failure");
            response.put("message", "Invalid username or password");
        }

        return response;
    }
}
