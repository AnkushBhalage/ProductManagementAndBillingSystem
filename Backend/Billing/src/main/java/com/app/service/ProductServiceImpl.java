package com.app.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import javax.websocket.Session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.app.dao.ProductRepository;
import com.app.pojos.Product;

@Service
public class ProductServiceImpl implements IProductService {
	@Autowired
	private ProductRepository productRepo;

	@Transactional
	@Override
	public List<Product> getAllProducts() {

	
				
		return productRepo.findAll();
	}

	@Override
	public Product addNewProduc(Product p) {

		return productRepo.save(p);
	}

	@Override
	public String deleteProduct(int id) {
		productRepo.deleteById(id);
		return "Product Deleted Successfully";
	}

	@Override
	public Product getProductById(int id) {

		return productRepo.findById(id);
	}

	@Override
	public Product getProductByName(String name) {
		
		return productRepo.findByName(name);
	}

	@Override
	public void updateQuantity(String name, int quantity) {
		productRepo.updateQuantity(name,quantity);
		
	}

}
