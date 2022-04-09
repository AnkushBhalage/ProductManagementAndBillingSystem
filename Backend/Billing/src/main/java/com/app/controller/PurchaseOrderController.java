package com.app.controller;

import java.util.List;

import javax.validation.Valid;

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

import com.app.pojos.PurchaseOrder;
import com.app.service.IProductService;
import com.app.service.IPurchaseOrderService;
import com.fasterxml.jackson.annotation.JsonIgnore;

@RestController
@RequestMapping("/api/purchaseorder")
@CrossOrigin(origins = "http://localhost:3000")
public class PurchaseOrderController {
	@Autowired
	private IPurchaseOrderService PurchaseOrderService;
	@Autowired
	private IProductService productService;

	@GetMapping
	List<PurchaseOrder> getAllPurchaseOrders() {
		return PurchaseOrderService.getAllPurchaseOrders();
	}

	@GetMapping("/{id}")
	PurchaseOrder getPurchaseOrderById(@PathVariable int id) {
		return PurchaseOrderService.getPurchaseOrderById(id);
	}

	@JsonIgnore
	@PostMapping
	public ResponseEntity<?> addNewPurchaseOrder(@Valid @RequestBody PurchaseOrder p) {
		System.out.println(p);
		System.out.println(p.getProduct());
		productService.addProduct(p.getProduct());

		return new ResponseEntity<>(PurchaseOrderService.addNewProduc(p), HttpStatus.CREATED);
	}

	@DeleteMapping("/{id}")
	public String deletePurchaseOrder(@PathVariable int id) {

		return PurchaseOrderService.deletePurchaseOrder(id);
	}

}
