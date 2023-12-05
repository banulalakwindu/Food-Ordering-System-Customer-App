package com.crown.foods.Class;

import java.util.List;
import java.util.ArrayList;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    private ObjectId id;
    private String userId;
    private String name;
    private String username;
    private String pnumber;
    private String address;
    private String password;
    private String image;
    private List<CartItem> cartitems;
    private List<Order> orders;

    public User(String userId, String name, String username, String pnumber, String address, String password,
            List<CartItem> cartitems, List<Order> orders) {
        this.id = new ObjectId();
        this.userId = userId;
        this.name = name;
        this.username = username;
        this.pnumber = pnumber;
        this.address = address;
        this.password = password;
        this.image = "";
        this.cartitems = cartitems;
        this.orders = orders;
    }
}
