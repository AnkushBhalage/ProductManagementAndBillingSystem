package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "product")

public class Product extends BaseEntity {

	@Column(name = "product_name", length = 30)
	private String name;
	@Column(length = 8)
	private double rate;
	@Column
	private int quantity;
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn
	private Vendor vendor;
}
