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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Customer;
import com.app.service.ICustomerService;

@RestController
@RequestMapping("/api/customer")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {
	@Autowired
	private ICustomerService customerService;

	public CustomerController() {
		System.out.println(" in constructor of " + getClass());

	}

	@GetMapping
	public List<Customer> getAllCustomers() {
		return customerService.getAllCustomers();
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getCustomerById(@PathVariable int id) {
		return new ResponseEntity<>(customerService.getCustomerById(id), HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<?> addCustomerDetails(@RequestBody Customer c) {
		return new ResponseEntity<Customer>(customerService.addCustomer(c), HttpStatus.CREATED);
	}

	@PutMapping
	public ResponseEntity<?> updateCustomer(@RequestBody Customer c){
		return new ResponseEntity<Customer>(customerService.addCustomer(c),HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{id}")
	public String deleteCustomer(@PathVariable int id) {
		return customerService.deleteCustomerDetails(id);
	}

	@GetMapping("/name/{name}")
	public ResponseEntity<?> getCustomerByName(@PathVariable String name) {
		return new ResponseEntity<>(customerService.getCustomerByName(name), HttpStatus.OK);
	}
	

}
