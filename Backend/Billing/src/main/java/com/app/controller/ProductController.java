package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Customer;
import com.app.pojos.Product;
import com.app.service.IProductService;

@RestController
@RequestMapping("/api/product")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
	@Autowired
	private IProductService productService;

	@GetMapping
	List<Product> getAllProducts() {
		return productService.getAllProducts();
	}
	@GetMapping("/{id}")
	Product getProductById(@PathVariable int id) {
		return productService.getProductById(id);
	}
	@GetMapping("/name/{name}")
	Product getProductById(@PathVariable String name) {
		return productService.getProductByName(name);
	}

	@PostMapping
	public ResponseEntity<?> addNewProduct(@RequestBody Product p) {
		return new ResponseEntity<>(productService.addNewProduc(p), HttpStatus.CREATED);
	}
	@DeleteMapping("/{id}")
	public String deleteProduct(@PathVariable int id){
		
		return productService.deleteProduct(id);
	}
	
}
