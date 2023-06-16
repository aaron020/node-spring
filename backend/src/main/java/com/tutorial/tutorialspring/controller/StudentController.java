package com.tutorial.tutorialspring.controller;

import com.tutorial.tutorialspring.model.Student;
import com.tutorial.tutorialspring.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;


    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "New Student Added";
    }

    @GetMapping("/get")
    public List<Student> getAll(){
        return studentService.getAllStudent();
    }
}
