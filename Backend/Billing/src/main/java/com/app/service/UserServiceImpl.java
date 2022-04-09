package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.UserRepository;
import com.app.pojos.User;

@Service
public class UserServiceImpl implements IUserService {
	@Autowired
	private UserRepository userRepo;

	@Override
	public User getUser(String email, String password) throws ResourceNotFoundException{
		User u = userRepo.findByEmailAndPassword(email, password);
		if(u==null)
			throw new ResourceNotFoundException("User Not Found");
		
		System.out.println(u);
		return u;
	}

	@Override
	public User addNewUser(User user) {

		return userRepo.save(user);
	}

}
