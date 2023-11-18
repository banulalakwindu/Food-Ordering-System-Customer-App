package com.crown.foods.Class;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    private String id;
    private String userId;
    private String name;
    private String username;
    private String pnumber;
    private String address;
    private String password;
    private String image;
    @DocumentReference
    private List<CartItem> cartitems;
    @DocumentReference
    private List<Order> orders;
}
