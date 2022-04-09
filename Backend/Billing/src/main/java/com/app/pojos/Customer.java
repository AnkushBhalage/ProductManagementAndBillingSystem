package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "customer")
public class Customer extends BaseEntity {
	@NotBlank(message = "Customer Name is mandatory")
	@Column(length = 30)
	private String name;
	@NotBlank(message = "Customer Address is mandatory")
	@Column(length = 30)
	private String address;
	@NotNull
	@Column(length = 10)
	private long mobile;

}
