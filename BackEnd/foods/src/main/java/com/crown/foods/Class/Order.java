package com.crown.foods.Class;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "orders")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    @Id
    private ObjectId id;
    private String orderId;
    private String total;
    private String orderTime;
    private String status;
    private List<OrderItem> orderItems;

    public Order(String orderId, String total, String orderTime, String status, List<OrderItem> orderItems) {
        this.id = new ObjectId();
        this.orderId = orderId;
        this.total = total;
        this.orderTime = orderTime;
        this.status = status;
        this.orderItems = orderItems;
    }
}
