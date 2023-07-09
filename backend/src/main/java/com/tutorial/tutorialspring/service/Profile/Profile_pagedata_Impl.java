package com.tutorial.tutorialspring.service.Profile;

import com.tutorial.tutorialspring.model.Profile_model.Profile_pagedata;
import com.tutorial.tutorialspring.repository.Profile_repository.Profile_pagedata_Repo;
import com.tutorial.tutorialspring.service.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Optional;

@Service
public class Profile_pagedata_Impl implements Profile_pagedata_Service{
    @Autowired
    private Profile_pagedata_Repo profile_pagedata_repo;


    @Override
    public Profile_pagedata findByProfileId(long Id) {

        return profile_pagedata_repo.findByProfileId(Id);
    }

    @Override
    public boolean addProfilePagedata(Profile_pagedata pagedata) {
        profile_pagedata_repo.save(pagedata);
        return true;
    }

    @Override
    public boolean updateProfilePagedata(Profile_pagedata pagedata) {
        // find the val via the profile id
        Profile_pagedata foundData = findByProfileId(pagedata.getProfileId());

        // add the found Id to the new data
        pagedata.setProfile_pagedata_id(foundData.getProfile_pagedata_id());

        profile_pagedata_repo.save(pagedata);
        return true;
    }
}
