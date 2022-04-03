package com.app.service;

import java.time.LocalDate;
import java.util.List;

import com.app.dto.OrderResponse;
import com.app.pojos.SellOrder;

public interface ISellOrderService {
List< SellOrder> getSellOrderDetails();

void addSellOrder(SellOrder s1);

 List<SellOrder> getMoneyMadeOnDate(LocalDate date);
}
