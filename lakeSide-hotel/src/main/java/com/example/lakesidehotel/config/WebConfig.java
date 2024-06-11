package com.example.lakesidehotel.config;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @CrossOrigin
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**");
    }
}

