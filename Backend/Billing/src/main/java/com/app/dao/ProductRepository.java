package com.app.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
public Product findById(int id);

public Product findByName(String name);

@Transactional
@Modifying
@Query("UPDATE Product SET  quantity=quantity-:quantity where name=:name")
public void updateQuantity(String name, int quantity);
}
