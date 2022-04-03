package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.UserRepository;
import com.app.pojos.User;

@Service
public class UserServiceImpl implements IUserService {
	@Autowired
	private UserRepository userRepo;

	@Override
	public User getUser(String email, String password) {

		return userRepo.findByEmailAndPassword(email, password);
	}

}
