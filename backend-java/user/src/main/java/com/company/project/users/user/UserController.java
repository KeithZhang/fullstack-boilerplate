package com.company.project.users.user;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by keith on 8/4/16.
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @RequestMapping("/user")
    String user() {
        return "welcome to user!";
    }
}
