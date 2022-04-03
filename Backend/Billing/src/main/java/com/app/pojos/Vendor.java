package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "vendors")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Vendor extends BaseEntity {

	private String name;
	@Column(length = 30)
	private String address;
	@Column(length = 30)
	private String firmName;
	@Column(length = 10)
	private long mobile;
}
