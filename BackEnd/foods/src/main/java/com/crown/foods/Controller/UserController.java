package com.crown.foods.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crown.foods.Class.CartItem;
import com.crown.foods.Class.LoginRequest;
import com.crown.foods.Class.User;
import com.crown.foods.Class.Order;
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

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        userService.register(user);

        return "Registered";
    }

    @PutMapping("/{userId}")
    public String updateUser(@PathVariable String userId, @RequestBody User updatedUser) {
        // Find the user by userId
        User existingUser = userService.getUser(userId);

        if (existingUser != null) {
            // Update only the fields that are not null in the updatedUser
            if (updatedUser.getName() != null) {
                existingUser.setName(updatedUser.getName());
            }
            if (updatedUser.getPnumber() != null) {
                existingUser.setPnumber(updatedUser.getPnumber());
            }
            if (updatedUser.getAddress() != null) {
                existingUser.setAddress(updatedUser.getAddress());
            }

            // Save the updated user
            userService.updateUser(userId, existingUser);

            return "Updated";
        } else {
            return "User not found";
        }
    }

    @PostMapping("/addToCart/{userId}")
    public String addToCart(@PathVariable String userId, @RequestBody CartItem cartItem) {
        userService.addToCart(userId, cartItem);

        return "Added to cart";
    }

    @PostMapping("/addToOrder/{userId}")
    public String addToOrder(@PathVariable String userId, @RequestBody Order order) {
        userService.addToOrder(userId, order);

        return "Order added";
    }

    @DeleteMapping("/deleteOrder/{userId}/{orderId}")
    public String deleteOrder(@PathVariable String userId, @PathVariable String orderId) {
        userService.deleteOrder(userId, orderId);

        return "Order deleted";
    }

    @GetMapping("/{userId}")
    public User getUser(@PathVariable String userId) {
        return userService.getUser(userId);
    }

    @DeleteMapping("/deleteCartItem/{userId}/{cartItemId}")
    public String deleteCartItem(@PathVariable String userId, @PathVariable String cartItemId) {
        userService.deleteCartItem(userId, cartItemId);

        return "Cart item deleted";
    }

}
