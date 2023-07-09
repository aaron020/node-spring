package com.tutorial.tutorialspring.controller;


import com.tutorial.tutorialspring.model.Profile_model.Profile_data;
import com.tutorial.tutorialspring.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/profile")
@CrossOrigin
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @GetMapping("/findAllById")
    public ResponseEntity<Map<String, Object>> findAllById(@RequestParam("id") Long Id){
        System.out.println(Id);

        // capture all data for response
        Map<String,Object> response = profileService.findAllById(Id);

        // send resposne
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @PostMapping("/addAll")
    public Boolean addProfile(@RequestBody Map<String, Object> requestData){
        return profileService.addAll(requestData);
    }

    @PostMapping("/updateAll")
    public Boolean updateProfile(@RequestParam("id") Long Id,@RequestBody Map<String, Object> requestData){
        return profileService.updateAll(Id, requestData);
    }



    // Search

    @GetMapping("/searchByName")
    public ResponseEntity<List<Profile_data>> findProfile(@RequestParam("contains") String contains){
        List<Profile_data> found = profileService.findProfile(contains);
        return ResponseEntity.status(HttpStatus.OK).body(found);
    }



}
