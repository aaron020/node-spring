package com.tutorial.tutorialspring.service.Profile;

import com.tutorial.tutorialspring.model.Profile_model.Profile_data;
import com.tutorial.tutorialspring.repository.Profile_repository.Profile_data_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Profile_data_Impl implements Profile_data_Service{
    @Autowired
    private Profile_data_Repo profile_data_repo;

    @Override
    public Optional<Profile_data> findById(long id){
        return profile_data_repo.findById(id);
    }


    @Override
    public Long addProfileData(Profile_data profile_data) {
        // save the profile data to the db
        Profile_data savedData = profile_data_repo.save(profile_data);

        // grab the id of this saved profile
        Long savedId = savedData.getProfileId();

        return savedId;
    }

    @Override
    public Boolean updateProfileData(Profile_data profile_data) {
        profile_data_repo.save(profile_data);
        return true;
    }

    @Override
    public List<Profile_data> findByNameContaining(String contain) {
        return profile_data_repo.findByNameContaining(contain);
    }
}
