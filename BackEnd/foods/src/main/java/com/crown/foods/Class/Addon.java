package com.crown.foods.Class;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "addons")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Addon {
    @Id
    private String id;
    private String name;
    private int price;
}
