package com.company.project.goods;

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
@Table(name = "goods")
public class Goods implements Serializable {

    @Id
    private String id;

}
