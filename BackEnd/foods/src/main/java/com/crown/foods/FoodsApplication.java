package com.crown.foods;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class FoodsApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoodsApplication.class, args);
	}
}
