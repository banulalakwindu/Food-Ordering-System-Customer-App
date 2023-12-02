package com.crown.foods.Class;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "foods")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Food {
    @Id
    private ObjectId id;
    private String foodId;
    private String name;
    private String type;
    private String image;
    private int halfprice;
    private int fullprice;
    @DBRef
    private List<Addon> addons;
}
