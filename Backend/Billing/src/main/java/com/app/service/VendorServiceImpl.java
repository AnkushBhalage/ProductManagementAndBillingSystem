package com.app.service;

import java.beans.Transient;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.VendorsRepository;
import com.app.pojos.Vendor;

@Service
@Transactional
public class VendorServiceImpl implements IVendorService {
	@Autowired
	private VendorsRepository vendorRepo;

	@Override
	public List<Vendor> getAllVendors() {
		return vendorRepo.findAll();
	}

	@Override
	public Vendor addVendor(Vendor transientVendor) {
		return vendorRepo.save(transientVendor);
	}

	@Override
	public String deleteVendorDetaiks(int id) {
		vendorRepo.deleteById(id);
		return "Vendor with id : " + id + "Deleted successfully";
	}

	@Override
	public Vendor getVendorById(int id) {

		return vendorRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("Vendor with Id"+id+"Not found"));
	}

	@Override
	public Vendor getVendorByName(String name) {
		
		return vendorRepo.findByName(name);
	}

}
