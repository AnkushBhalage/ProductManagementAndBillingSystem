package com.app.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.pojos.Product;
import com.app.pojos.PurchaseOrder;

public interface IPurchaseOrderService {

	List<PurchaseOrder> getAllPurchaseOrders();

	PurchaseOrder addNewProduc(PurchaseOrder p);

	String deletePurchaseOrder(int id);

	PurchaseOrder getPurchaseOrderById(int id);

	
	
  void updateQuantity(Product p, int quantity);
}
