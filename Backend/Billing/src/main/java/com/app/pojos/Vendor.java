package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "vendors")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Vendor extends BaseEntity {
	@Column(length = 30)
	@NotBlank
	private String name;
	@Column(length = 30)
	@NotBlank
	private String address;
	@Column(length = 30)
	@NotBlank
	private String firmName;
	@Column(length = 10)
	@NotNull
	private long mobile;
}
