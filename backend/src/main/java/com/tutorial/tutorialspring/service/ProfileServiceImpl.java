package com.tutorial.tutorialspring.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tutorial.tutorialspring.model.Profile_model.Profile_data;
import com.tutorial.tutorialspring.model.Profile_model.Profile_pagedata;
import com.tutorial.tutorialspring.service.Profile.Profile_data_Service;
import com.tutorial.tutorialspring.service.Profile.Profile_pagedata_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
@Service
public class ProfileServiceImpl implements ProfileService{

    @Autowired
    private Profile_pagedata_Service profile_pagedata_service;

    @Autowired
    private Profile_data_Service profile_data_service;

    final String profiledata = "profiledata";
    final String pageData = "pagedata";


    @Override
    public Map<String, Object> findAllById(Long id){
        Profile_pagedata profile_pagedata = profile_pagedata_service.findByProfileId(id);
        Optional<Profile_data> profile_data_optional = profile_data_service.findById(id);

        Profile_data profile_data = profile_data_optional.orElse(null);

        // map the data
        Map<String, Object> mapper = new HashMap<>();
        // add page data and profile data
        mapper.put("pagedata",profile_pagedata);
        mapper.put("profiledata",profile_data);

        return mapper;
    }


    @Override
    public Boolean addAll(Map<String, Object> allData) {
        // map objects from json to correct format
        ObjectMapper mapper = new ObjectMapper();

        // create entites
        Profile_data profile_data = null;
        Profile_pagedata profile_pagedata = null;


        if (allData.containsKey(profiledata) && allData.containsKey(pageData)) {
            // extract page data info
            profile_data = mapper.convertValue(allData.get(profiledata), Profile_data.class);

            // add page data to database and capture the generated id
            Long ProfileId = profile_data_service.addProfileData(profile_data);

            // extract the page data info
            profile_pagedata = mapper.convertValue(allData.get(pageData),Profile_pagedata.class);

            // add ProfileId to the page data
            profile_pagedata.setProfileId(ProfileId);

            // add profile data to the database
            profile_pagedata_service.addProfilePagedata(profile_pagedata);
        }

        return true;
    }

    @Override
    public Boolean updateAll(Long Id, Map<String, Object> allData) {
        ObjectMapper mapper = new ObjectMapper();

        // create entites
        Profile_data profile_data = null;
        Profile_pagedata profile_pagedata = null;

        if (allData.containsKey(profiledata) && allData.containsKey(pageData)) {
            // extract page data info
            profile_data = mapper.convertValue(allData.get(profiledata), Profile_data.class);

            // add the profile id
            profile_data.setProfileId(Id);

            // update the profile data in the database
            profile_data_service.updateProfileData(profile_data);

            // extract the page data info
            profile_pagedata = mapper.convertValue(allData.get(pageData),Profile_pagedata.class);

            // add the profile id
            profile_pagedata.setProfileId(Id);

            // update the page data in the database
            profile_pagedata_service.updateProfilePagedata(profile_pagedata);
        }
        return true;
    }


    @Override
    public List<Profile_data> findProfile(String contains) {
        return profile_data_service.findByNameContaining(contains);
    }
}
