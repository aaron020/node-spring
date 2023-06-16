package com.tutorial.tutorialspring.controller;

import com.tutorial.tutorialspring.model.Student;
import com.tutorial.tutorialspring.model.User;
import com.tutorial.tutorialspring.service.StudentService;
import com.tutorial.tutorialspring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;


    @PostMapping("/register")
    public String Register(@RequestBody User user){
        userService.Register(user);
        return "Registed";
    }
}
