package com.tutorial.tutorialspring.service;

import com.tutorial.tutorialspring.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudent();
}
