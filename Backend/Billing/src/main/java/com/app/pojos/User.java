package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "user")
public class User extends BaseEntity {

	@Column(length = 30)

	private String name;

	@Column(length = 30)

	private String email;

	@Column(length = 30)
	private String password;

	@Column(length = 10)
	private long mobile;

	@Enumerated
	@Column
	private UserRole role;
}
