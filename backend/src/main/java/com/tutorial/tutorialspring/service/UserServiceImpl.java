package com.tutorial.tutorialspring.service;

import com.tutorial.tutorialspring.model.User;
import com.tutorial.tutorialspring.repository.StudentRepository;
import com.tutorial.tutorialspring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User Register(User user) {
        return userRepository.save(user);
    }

    @Override
    public Boolean Login(User user) {
        return null;
    }
}
