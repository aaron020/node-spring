package com.tutorial.tutorialspring.repository.Profile_repository;

import com.tutorial.tutorialspring.model.Profile_model.Profile_pagedata;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Profile_pagedata_Repo extends JpaRepository<Profile_pagedata,Long> {
    Profile_pagedata findByProfileId(long profileId);
}
