package com.tutorial.tutorialspring.service;

import com.tutorial.tutorialspring.model.Profile_model.Profile_data;

import java.util.List;
import java.util.Map;

public interface ProfileService {

    Boolean addAll(Map<String,Object> allData);
    Map<String, Object> findAllById(Long id);
    Boolean updateAll(Long profileId, Map<String,Object> allData);

    List<Profile_data> findProfile(String contains);
}
