package com.app.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Product;
import com.app.pojos.PurchaseOrder;
import com.fasterxml.jackson.annotation.JsonIgnore;

public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrder, Integer> {
public PurchaseOrder findById(int id);


@JsonIgnore
@Transactional
@Modifying
//@Query("UPDATE Product SET  quantity=quantity-:quantity where product=:product")
@Query("UPDATE PurchaseOrder SET  quantity=quantity-:quantity where product=:product")
public void updateQuantity(Product product, int quantity);
}
