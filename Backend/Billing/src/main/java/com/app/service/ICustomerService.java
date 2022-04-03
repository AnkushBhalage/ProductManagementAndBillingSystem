package com.app.service;

import java.util.List;

import com.app.pojos.Customer;

public interface ICustomerService {
	Customer addCustomer(Customer transientCustomer);

	List<Customer> getAllCustomers();

	String deleteCustomerDetails(int id);

	Customer getCustomerByName(String name);

	Customer getCustomerById(int id);

}
