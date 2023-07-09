package com.tutorial.tutorialspring.service.Profile;

import com.tutorial.tutorialspring.model.Profile_model.Profile_data;
import com.tutorial.tutorialspring.model.Profile_model.Profile_pagedata;

import java.util.List;
import java.util.Optional;

public interface Profile_data_Service {
    Optional<Profile_data> findById(long id);
    Long addProfileData(Profile_data profile_data);
    Boolean updateProfileData(Profile_data profile_data);

    List<Profile_data> findByNameContaining(String contain);
}
