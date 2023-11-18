package com.crown.foods.Class;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "orderItems")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderItem {
    @Id
    private String id;
    private String name;
    private String quantity;
    private String size;
    private List<String> addons;
}
