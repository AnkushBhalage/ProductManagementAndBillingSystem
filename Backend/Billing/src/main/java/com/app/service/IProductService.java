package com.app.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.pojos.Product;

public interface IProductService {

	List<Product> getAllProducts();

	Product addNewProduc(Product p);

	String deleteProduct(int id);

	Product getProductById(int id);

	Product getProductByName(String name);
	
  void updateQuantity(String name,int quantity);
}
