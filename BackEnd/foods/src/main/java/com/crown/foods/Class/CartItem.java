package com.crown.foods.Class;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "cartitems")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartItem {
    @Id
    private ObjectId id;
    private String cartitemId;
    private String foodId;
    private String name;
    private String size;
    private String price;
    private String quantity;
    private String totalPrice;
    private List<Addon> addons;

    public CartItem(String cartitemId, String foodId, String name, String size, String price, String quantity,
            String totalPrice, List<Addon> addons) {
        this.id = new ObjectId(); // or generate a unique ID as per your requirements
        this.cartitemId = cartitemId;
        this.foodId = foodId;
        this.name = name;
        this.size = size;
        this.price = price;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
        this.addons = addons;
    }
}
