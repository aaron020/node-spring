package com.tutorial.tutorialspring.controller;


import com.tutorial.tutorialspring.model.Profile_model.Profile_data;
import com.tutorial.tutorialspring.service.Profile.Profile_ImageData_Service;
import com.tutorial.tutorialspring.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/profile")
@CrossOrigin
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @Autowired
    private Profile_ImageData_Service profile_imageData_service;

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

    @PostMapping("/upload/image")
    public String uploadProfileImage(@RequestParam("id") Long Id,@RequestParam("image") MultipartFile file) throws IOException{
        String response = profile_imageData_service.uploadImageToFileSystem(file,Id);
        return response;
    }

    @GetMapping("/download/image")
    public ResponseEntity<?> downloadProfileImage(@RequestParam("id") Long Id) throws IOException{
        byte[] image = profile_imageData_service.downloadImageFromFileSystem(Id);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(image);
    }

    @GetMapping("/searchByName")
    public ResponseEntity<List<Profile_data>> findProfile(@RequestParam("contains") String contains){
        List<Profile_data> found = profileService.findProfile(contains);
        return ResponseEntity.status(HttpStatus.OK).body(found);
    }



}
