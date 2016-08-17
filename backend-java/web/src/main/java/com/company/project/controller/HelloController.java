package com.company.project.controller;

import com.company.project.Application;
import com.company.project.service.HelloService;
import com.company.project.users.user.User;
import com.company.project.users.user.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by keith on 8/5/16.
 */
@RestController
public class HelloController {
    private static final Logger logger = LoggerFactory.getLogger(Application.class);

    @Autowired
    private HelloService helloService;

    @Autowired
    private UserService userService;

    @RequestMapping("/")
    public String index() {
        logger.debug("HelloController index...");
        User user = new User();
        user.setId(Long.valueOf(1));
        user.setName("keith");
        return helloService.hello();
    }

    @RequestMapping("/user")
    public String user() {
        logger.debug("HelloController index...");
        User user = new User();
        user.setId(Long.valueOf(1));
        user.setName("keith");
        return "user";
    }

    @RequestMapping("/userList")
    @ResponseBody
    public List<User> userList() {
        return userService.findAll();
    }
}
