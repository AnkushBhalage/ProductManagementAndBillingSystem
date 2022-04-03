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
	@Column
	private String name;
	@Column
	private String email;
	@Column
	private String password;
	@Column
	private long mobile;
	@Enumerated
	@Column
	private UserRole role;
}
