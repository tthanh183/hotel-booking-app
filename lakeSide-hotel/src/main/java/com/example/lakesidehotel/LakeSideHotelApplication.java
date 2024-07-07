package com.example.lakesidehotel;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class LakeSideHotelApplication {

    public static void main(String[] args) {
        SpringApplication.run(LakeSideHotelApplication.class, args);
    }

}
 