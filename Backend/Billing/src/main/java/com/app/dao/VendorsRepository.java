package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Vendor;

public interface VendorsRepository extends JpaRepository<Vendor, Integer> {

	Vendor findByName(String name);

}
