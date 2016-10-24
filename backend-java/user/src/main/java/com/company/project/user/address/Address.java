package com.company.project.user.address;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Data
@Table(name = "address")
public class Address implements Serializable {

    @Id
    @GeneratedValue
    private Long Id;

    /**
     * 省
     */
    private String province;

    /**
     * 市
     */
    private String City;

    /**
     * 区
     */
    private String region;
}
