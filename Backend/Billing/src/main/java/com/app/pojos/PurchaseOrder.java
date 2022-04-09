package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "purchaseorder")

public class PurchaseOrder extends BaseEntity {
	@OneToOne
	@JoinColumn
	private Product product;
	@Column(length = 8)
	private double rate;
	@Column
	@NotNull
	private int quantity;
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn
	private Vendor vendor;
}
