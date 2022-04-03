package com.app.service;

import com.app.pojos.User;

public interface IUserService {
	User getUser(String email, String password);
}
