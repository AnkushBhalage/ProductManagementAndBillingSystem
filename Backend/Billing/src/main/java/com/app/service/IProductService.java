package com.app.service;

import java.util.List;

import com.app.pojos.Product;
import com.app.pojos.PurchaseOrder;

public interface IProductService {

	Product getProductByName(String name);

	void addProduct(Product p);

	List<Product> getAllProducts();

}
