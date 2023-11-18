package com.crown.foods.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crown.foods.Class.Food;
import com.crown.foods.Service.FoodService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class FoodController {
    @Autowired
    private FoodService foodService;

    @GetMapping("/foods")
    public ResponseEntity<List<Food>> getAllFoods() {
        return new ResponseEntity<List<Food>>(foodService.allFoods(), HttpStatus.OK);
    }

    @GetMapping("/foods/{foodId}")
    public ResponseEntity<Optional<Food>> getSingleFood(@PathVariable String foodId) {
        return new ResponseEntity<Optional<Food>>(foodService.singleFood(foodId), HttpStatus.OK);
    }
}
