package com.app.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jackson.JsonObjectDeserializer;
import org.springframework.stereotype.Service;

import com.app.dao.SellOrderRepository;
import com.app.dto.OrderResponse;
import com.app.pojos.SellOrder;
import com.fasterxml.jackson.databind.util.JSONPObject;
@Service

public class SellOrderService implements ISellOrderService {
	@Autowired
	private SellOrderRepository sellOrderRepo;

	@Override
	public List<SellOrder> getSellOrderDetails() {

		return sellOrderRepo.findAll();
	}

	@Override
	public void addSellOrder(SellOrder s1) {
		sellOrderRepo.save(s1);
		
	}

	@Override
	public List<SellOrder> getMoneyMadeOnDate(LocalDate date) {
		
		return sellOrderRepo.findByDate(date);
	}
	


}
