package com.company.project.controller;

import com.company.project.service.HelloService;
import com.company.project.user.info.User;
import com.company.project.user.info.UserService;
import com.company.project.user.xsite.TestConfig;
import com.company.project.user.xsite.XSiteConfig;
import com.company.project.user.xsite.XSiteService;
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
public class HelloController extends BaseController {
    private static final Logger logger = LoggerFactory.getLogger(HelloController.class);

    @Autowired
    private HelloService helloService;

    @Autowired
    private UserService userService;

    @Autowired
    private XSiteService xsiteService;

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
        return "info";
    }

    @RequestMapping("/test")
    @ResponseBody
    public List<TestConfig> test() {
        return xsiteService.test();
    }

    @RequestMapping("/test/all")
    @ResponseBody
    public List<TestConfig> testAll() {
        return xsiteService.testAll();
    }

    @RequestMapping("/xsite/all")
    @ResponseBody
    public List<XSiteConfig> xSiteConfigs() {
        return xsiteService.xsiteAll();
    }

    @RequestMapping("/xsite")
    @ResponseBody
    public XSiteConfig xSiteConfigByUserId() {
        return xsiteService.xsiteByUserId();
    }

    @RequestMapping("/userList")
    @ResponseBody
    public List<User> userList() {
        return userService.findAll();
    }
}
