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
        // Get username
        String email = user.getEmail();
        // Get password
        String password = user.getPassword();

        // Search for user within the db
        User findUser = userRepository.findByEmail(email);

        // Check if the user has been found
        if(findUser != null){
            // The user has been found
            return true;
        }else{
            // The user has not been found
            return false;
        }

    }
}
