package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.CustomerRepository;
import com.app.pojos.Customer;

@Service
@Transactional
public class CustomerServiceImpl implements ICustomerService {

	@Autowired
	private CustomerRepository customRepo;

	@Override
	public Customer getCustomerByName(String name) {

		return customRepo.findByName(name);
	}
    @Transactional
	@Override
	public Customer addCustomer(Customer transientCustomer) {

		return customRepo.save(transientCustomer);
	}

	@Override
	public List<Customer> getAllCustomers() {

		return customRepo.findAll();
	}

	@Override
	public String deleteCustomerDetails(int id) {
		customRepo.deleteById(id);
		return "Customer deleted having id" + id;
	}

	@Override
	public Customer getCustomerById(int id) {

		return customRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Customer with Id" + id + "Not found"));
	}

}
