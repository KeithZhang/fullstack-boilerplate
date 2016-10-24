package com.company.project.user.xsite;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

/**
 * Created by keith on 9/1/16.
 */
@Data
@Document(collection = "xsite")
public class XSiteConfig {

    @Id
    private String id;

    @Indexed(unique = true, name = "userId")
    private String userId;

    /**
     * 楼层配置
     */
    private List floors;

    @LastModifiedDate
    private Date lastModifiedDate;

}
