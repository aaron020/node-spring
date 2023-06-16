package com.tutorial.tutorialspring.service;

import com.tutorial.tutorialspring.model.User;

import java.util.List;

public interface UserService {
    public User Register(User user);
    public Boolean Login(User user);
}
