package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.UserRepository;
import com.app.dto.Login;
import com.app.pojos.User;

@Service
public class UserServiceImpl implements IUserService {
	@Autowired
	private UserRepository userRepo;

	@Override
	public User getUser(Login login) {

		return userRepo.findByEmailAndPassword(login.getEmail(),login.getPassword());
	}

	@Override
	public User addNewUser(User user) {
		
		return userRepo.save(user);
	}

}
