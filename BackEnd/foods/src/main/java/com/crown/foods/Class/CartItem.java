package com.crown.foods.Class;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
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
    @DocumentReference
    private List<Addon> addons;
}
