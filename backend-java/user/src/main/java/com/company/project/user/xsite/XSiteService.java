package com.company.project.user.xsite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

/**
 * Created by keith on 8/31/16.
 */
@Service
public class XSiteService {

    @Autowired
    private XSiteRepository xsiteRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<TestConfig> test() {
        List<TestConfig> result = xsiteRepository.findByName("linda");
        System.out.println(result);
        return result;
    }

    public List<TestConfig> testAll() {
        return mongoTemplate.findAll(TestConfig.class);
    }

    public List<XSiteConfig> xsiteAll() {
        return mongoTemplate.findAll(XSiteConfig.class);
    }

    public XSiteConfig xsiteByUserId() {
        return mongoTemplate.findOne(query(where("userId").is("A123")), XSiteConfig.class);
    }
}
