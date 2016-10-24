package com.company.project.user.xsite;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

/**
 * Created by keith on 8/31/16.
 */
public interface XSiteRepository extends MongoRepository<TestConfig, String> {

    @Query("{ 'name' : ?0 }")
    List<TestConfig> findByName(String name);


    @Query("{ 'userId' : ?0 }")
    XSiteConfig findByUserId(String userId);
}
