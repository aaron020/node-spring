package com.tutorial.tutorialspring.repository.Profile_repository;

import com.tutorial.tutorialspring.model.Profile_model.Profile_ImageData;
import com.tutorial.tutorialspring.model.Profile_model.Profile_pagedata;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface Profile_ImageData_Repo extends JpaRepository<Profile_ImageData,Long> {
    Profile_ImageData findByProfileId(long profileId);
}
