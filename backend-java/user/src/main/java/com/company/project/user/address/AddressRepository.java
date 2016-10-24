package com.company.project.user.address;

import com.company.project.user.info.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.Repository;

public interface AddressRepository extends Repository<User, Long> {

    Page<Address> findAll(Pageable pageable);
}
