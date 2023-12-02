package com.crown.foods.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crown.foods.Class.CartItem;
import com.crown.foods.Class.LoginRequest;
import com.crown.foods.Class.User;
import com.crown.foods.Service.UserService;

import java.util.Map;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();
        // Call the login method in the UserService
        return userService.login(username, password);
    }

    @PostMapping("/addToCart/{userId}")
    public String addToCart(@PathVariable String userId, @RequestBody CartItem cartItem) {
        userService.addToCart(userId, cartItem);

        return "Added to cart";
    }

    @GetMapping("/{userId}")
    public User getUser(@PathVariable String userId) {
        return userService.getUser(userId);
    }

}
