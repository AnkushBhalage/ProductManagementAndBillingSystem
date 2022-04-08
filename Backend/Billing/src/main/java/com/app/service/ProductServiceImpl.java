package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ProductRepository;
import com.app.pojos.Product;
import com.app.pojos.PurchaseOrder;

@Service
public class ProductServiceImpl implements IProductService{
	@Autowired
	private ProductRepository productRepo;

	@Override
	public Product  getProductByName(String name) {
		
		return productRepo.findByName(name);
	}

	@Override
	public void addProduct(Product p) {
		
		productRepo.save(p);
		
	}

	@Override
	public List<Product> getAllProducts() {
		
		return productRepo.findAll();
	}

}
