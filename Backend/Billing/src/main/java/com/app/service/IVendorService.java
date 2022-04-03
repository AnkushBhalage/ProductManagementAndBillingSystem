package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.pojos.Vendor;

public interface IVendorService {

	List<Vendor> getAllVendors();

	Vendor addVendor(Vendor transientVendor);

	String deleteVendorDetaiks(int id);

	Vendor getVendorById(int id);

Vendor getVendorByName(String name);
}
