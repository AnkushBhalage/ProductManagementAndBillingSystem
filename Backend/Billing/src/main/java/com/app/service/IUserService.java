package com.app.service;

import com.app.dto.Login;
import com.app.pojos.User;

public interface IUserService {
	User getUser(Login login);

	User addNewUser(User user);
}
