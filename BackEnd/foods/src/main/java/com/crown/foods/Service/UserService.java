package com.crown.foods.Service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crown.foods.Class.CartItem;
import com.crown.foods.Class.Order;
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
            response.put("userId", user.getUserId());
        } else {
            response.put("status", "failure");
            response.put("message", "Invalid username or password");
            response.put("userId", "0");
        }

        return response;
    }

    public void register(User user) {
        userRepository.save(user);
    }

    public void updateUser(String userId, User updatedUser) {
        // Find the user by userId
        User existingUser = userRepository.findByUserId(userId);

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
            userRepository.save(existingUser);
        }
    }

    public void addToCart(String userId, CartItem cartItem) {
        // Find the user by userId
        User user = userRepository.findByUserId(userId);

        // Add the cart item to the user's cartitems list
        if (user != null) {
            user.getCartitems().add(cartItem);
            userRepository.save(user);
        }
    }

    public void addToOrder(String userId, Order order) {
        // Find the user by userId
        User user = userRepository.findByUserId(userId);

        // Add the order to the user's orders list
        if (user != null) {
            user.getOrders().add(order);
            userRepository.save(user);
        }
    }

    public User getUser(String userId) {
        return userRepository.findByUserId(userId);
    }

    public void deleteCartItem(String userId, String cartItemId) {
        // Find the user by userId
        User user = userRepository.findByUserId(userId);

        // Remove the cart item from the user's cartitems list based on cartItemId
        if (user != null) {
            user.getCartitems().removeIf(cartItem -> cartItem.getCartitemId().equals(cartItemId));
            userRepository.save(user);
        }
    }

    public void deleteOrder(String userId, String orderId) {
        // Find the user by userId
        User user = userRepository.findByUserId(userId);

        // Remove the order from the user's orders list based on orderId
        if (user != null) {
            user.getOrders().removeIf(order -> order.getOrderId().equals(orderId));
            userRepository.save(user);
        }
    }
}
