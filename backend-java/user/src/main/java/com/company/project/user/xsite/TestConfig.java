package com.company.project.user.xsite;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by keith on 8/31/16.
 */
@Document(collection = "test")
@Data
public class TestConfig {

    @Id
    private String id;

    private String name;

    private int age;
}
