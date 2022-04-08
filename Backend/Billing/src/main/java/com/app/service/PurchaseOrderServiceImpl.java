package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.PurchaseOrderRepository;
import com.app.pojos.Product;
import com.app.pojos.PurchaseOrder;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Service
public class PurchaseOrderServiceImpl implements IPurchaseOrderService {
	@Autowired
	private PurchaseOrderRepository PurchaseOrderRepo;

	@JsonIgnore
	@Transactional
	@Override
	public List<PurchaseOrder> getAllPurchaseOrders() {

		return PurchaseOrderRepo.findAll();
	}

	@Override
	public PurchaseOrder addNewProduc(PurchaseOrder p) {

		return PurchaseOrderRepo.save(p);

	}

	@Override
	public String deletePurchaseOrder(int id) {
		PurchaseOrderRepo.deleteById(id);
		return "PurchaseOrder Deleted Successfully";
	}

	@Override
	public PurchaseOrder getPurchaseOrderById(int id) {

		return PurchaseOrderRepo.findById(id);
	}

	@Override
	public void updateQuantity(Product p, int quantity) {
		PurchaseOrderRepo.updateQuantity(p, quantity);

	}

}
