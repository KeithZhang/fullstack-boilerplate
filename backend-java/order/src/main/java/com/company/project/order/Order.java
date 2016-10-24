package com.company.project.order;

import lombok.Data;
import org.springframework.data.annotation.Id;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * Created by keith on 10/12/16.
 */
@Entity
@Data
@Table(name="user")
public class Order implements Serializable {

    @Id
    private String id;

    private Integer status;
}
