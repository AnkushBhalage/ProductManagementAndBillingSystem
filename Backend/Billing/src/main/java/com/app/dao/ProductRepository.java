package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Product;
import com.app.pojos.PurchaseOrder;

public interface ProductRepository extends JpaRepository<Product, Integer>{

	Product findByName(String name);

}
