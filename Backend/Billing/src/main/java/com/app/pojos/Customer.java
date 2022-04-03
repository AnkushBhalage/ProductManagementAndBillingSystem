package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "customer")
public class Customer extends BaseEntity {
	@Column(length = 30)
	private String name;
	@Column(length = 30)
	private String address;
	@Column(length = 10)
	private long mobile;


}
