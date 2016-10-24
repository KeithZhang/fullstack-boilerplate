package com.company.project.controller;

import com.company.project.user.info.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * Created by keith on 10/11/16.
 */
@RestController
public class UserController extends BaseController {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @ResponseBody
    @RequestMapping("/login")
    public Map<String, Object> login() {
        return null;
    }

    @ResponseBody
    @RequestMapping("/logout")
    public Map<String, Object> logout() {
        return null;
    }

    @ResponseBody
    @RequestMapping("/register")
    public Map<String, Object> register() {
        return null;
    }
}
