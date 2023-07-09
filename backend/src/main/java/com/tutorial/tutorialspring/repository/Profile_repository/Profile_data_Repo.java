package com.tutorial.tutorialspring.repository.Profile_repository;


import com.tutorial.tutorialspring.model.Profile_model.Profile_data;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Profile_data_Repo extends JpaRepository<Profile_data,Long> {
    List<Profile_data> findByNameContaining(String contains);
}
