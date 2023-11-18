package com.crown.foods.Repository;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.crown.foods.Class.Food;

@Repository
public interface FoodRepository extends MongoRepository<Food, ObjectId> {
    Optional<Food> findFoodByFoodId(String foodId);
}
