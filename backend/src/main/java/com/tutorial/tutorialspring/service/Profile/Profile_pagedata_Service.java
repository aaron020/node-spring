package com.tutorial.tutorialspring.service.Profile;

import com.tutorial.tutorialspring.model.Profile_model.Profile_pagedata;

import java.util.Optional;

public interface Profile_pagedata_Service{
    Profile_pagedata findByProfileId(long Id);
    boolean addProfilePagedata(Profile_pagedata pagedata);

    boolean updateProfilePagedata(Profile_pagedata pagedata);
}
