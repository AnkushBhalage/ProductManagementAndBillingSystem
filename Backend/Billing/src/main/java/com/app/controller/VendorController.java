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
import com.app.pojos.Vendor;
import com.app.service.IVendorService;

@RestController
@RequestMapping("/api/vendors")
@CrossOrigin(origins = "http://localhost:3000")
public class VendorController {

	
	@Autowired
	private IVendorService vendorService;

	public VendorController() {
		System.out.println("In Vendors constructor");
	}

	@GetMapping
	public List<Vendor> getAllVendors() {
		return vendorService.getAllVendors();
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getVendorById(@PathVariable int id){
		return new ResponseEntity<>( vendorService.getVendorById(id),HttpStatus.OK);
	}
	@GetMapping("/name/{name}")
	public ResponseEntity<?> getVendorByName(@PathVariable String name){
		return new ResponseEntity<>( vendorService.getVendorByName(name),HttpStatus.OK);
	}

	@PostMapping
	public Vendor addVendor(@RequestBody Vendor v) {
		return vendorService.addVendor(v);
	}
	@PutMapping
	public ResponseEntity<?> updateVendor(@RequestBody Vendor v){
		return new ResponseEntity<>(vendorService.addVendor(v),HttpStatus.ACCEPTED);
	}

	@DeleteMapping("/{id}")
	public String deleteVendor(@PathVariable int id) {
		return vendorService.deleteVendorDetaiks(id);
	}
}
