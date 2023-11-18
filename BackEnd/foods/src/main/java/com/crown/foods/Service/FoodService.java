package com.crown.foods.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crown.foods.Class.Food;
import com.crown.foods.Repository.FoodRepository;

@Service
public class FoodService {

    @Autowired
    private FoodRepository foodRepository;

    public List<Food> allFoods() {
        return foodRepository.findAll();
    }

    public Optional<Food> singleFood(String foodId) {
        return foodRepository.findFoodByFoodId(foodId);
    }
}
