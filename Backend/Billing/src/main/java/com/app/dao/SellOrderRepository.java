package com.app.dao;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.dto.OrderResponse;
import com.app.pojos.SellOrder;

public interface SellOrderRepository extends JpaRepository<SellOrder,String>{
	public List<SellOrder>findByDate(LocalDate date);


}
