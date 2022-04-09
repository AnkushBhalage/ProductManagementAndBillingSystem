package com.app.controller;

import java.time.LocalDate;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.Order;
import com.app.pojos.Customer;
import com.app.pojos.Product;
import com.app.pojos.SellOrder;
import com.app.service.ICustomerService;
import com.app.service.IProductService;
import com.app.service.IPurchaseOrderService;
import com.app.service.ISellOrderService;
import com.fasterxml.jackson.annotation.JsonIgnore;

@RestController
@RequestMapping("/api/sellorder")
@CrossOrigin(origins = "http://localhost:3000")
public class SellOrderController {
	@Autowired
	private ISellOrderService sellOrderService;
	@Autowired
	private IPurchaseOrderService purchaseOrderService;
	@Autowired
	private ICustomerService customerService;
	@Autowired
	private IProductService productService;

	public SellOrderController() {
		System.out.println("In SellOrder cintroller");
	}

	@GetMapping
	public List<SellOrder> getAllSellOrder() {
		return sellOrderService.getSellOrderDetails();
	}

	@JsonIgnore
	@PostMapping("/{custId}/{d}")
	public String addSellOrders(@Valid @RequestBody List<Order> sellorder, @PathVariable int custId, @PathVariable String d) {
		LocalDate date = LocalDate.parse(d);
		System.out.println("CustId and date" + custId + " " + date);
		// System.out.println(date);
		sellorder.forEach((p) -> System.out.println(p));
		Customer c = customerService.getCustomerById(custId);
		for (Order s : sellorder) {
			System.out.println(s);
			Product p = productService.getProductByName(s.getProductName());
			System.out.println(p);

			SellOrder s1 = new SellOrder();
			s1.setPrice(s.getPrice());
			s1.setQuantity(s.getQuantity());
			s1.setRate(s.getRate());
			s1.setProduct(p);
			s1.setDate(date);
			s1.setCustomer(c);
			// PurchaseOrder p = productService.getProductByName(s.getProductName());
			// s1.setProduct(p);
			System.out.println("hello" + s1);
			sellOrderService.addSellOrder(s1);
			purchaseOrderService.updateQuantity(p, s.getQuantity());
		}
		return "added successfully";
	}

	@GetMapping("/money/{date}")
	public List<SellOrder> getMoneyMadeOnDate(@PathVariable String date) {
		LocalDate d = LocalDate.parse(date);
		return sellOrderService.getMoneyMadeOnDate(d);
	}
}
