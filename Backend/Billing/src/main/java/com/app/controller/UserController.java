package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.Login;
import com.app.pojos.User;
import com.app.service.IUserService;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	@Autowired
	private IUserService userService;

	@GetMapping("/{email}/{password}")
	ResponseEntity<?> getUserDetails(@PathVariable String email, @PathVariable String password) {
		return new ResponseEntity<>(userService.getUser(email, password), HttpStatus.OK);
	}
	
	@PostMapping("/add")
	ResponseEntity<?> addNewUser(@Valid @RequestBody User user){
		return new ResponseEntity<>(userService.addNewUser(user),HttpStatus.ACCEPTED);
	}
}
