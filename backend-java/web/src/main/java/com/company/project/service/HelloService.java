package com.company.project.service;

import org.springframework.stereotype.Service;

/**
 * Created by keith on 8/15/16.
 */
@Service
public class HelloService {

    public String hello() {
        return "Greetings from Spring Boot!";
    }
}
