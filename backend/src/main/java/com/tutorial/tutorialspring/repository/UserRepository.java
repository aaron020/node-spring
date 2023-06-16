package com.tutorial.tutorialspring.repository;

import com.tutorial.tutorialspring.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
}
