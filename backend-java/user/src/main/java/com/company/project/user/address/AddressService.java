package com.company.project.user.address;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;


    public Page<Address> findAll() {
        return addressRepository.findAll(new PageRequest(0, 10));
    }
}
