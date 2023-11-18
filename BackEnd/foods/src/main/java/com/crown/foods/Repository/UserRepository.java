package com.crown.foods.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.crown.foods.Class.User;

public interface UserRepository extends MongoRepository<User, String> {
    User findByUsernameAndPassword(String username, String password);
}
