package com.tutorial.tutorialspring.service.Profile;

import com.tutorial.tutorialspring.model.Profile_model.Profile_ImageData;
import com.tutorial.tutorialspring.repository.Profile_repository.Profile_ImageData_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

@Service
public class Profile_ImageData_Impl implements Profile_ImageData_Service{
    @Autowired
    private Profile_ImageData_Repo profile_imageData_repo;

    @Autowired
    private Environment env;
    @Override
    public String uploadImageToFileSystem(MultipartFile file, long profileId) throws IOException {
        Profile_ImageData profile_imageData = new Profile_ImageData();
        // set image data fields based on sent file

        profile_imageData.setProfileId(profileId);
        profile_imageData.setName(file.getOriginalFilename());
        profile_imageData.setType(file.getContentType());

        // create the filepath
        String filepath = env.getProperty("profile.image.folderpath") + file.getOriginalFilename();
        profile_imageData.setFilepath(filepath);

        // save to the database
        profile_imageData_repo.save(profile_imageData);

        // save to file system
        file.transferTo(new File(filepath));
        return "Image saved";

    }

    @Override
    public byte[] downloadImageFromFileSystem(long id) throws IOException{
        Profile_ImageData profile_imageData = profile_imageData_repo.findByProfileId(id);
        if(profile_imageData == null){
            return null;
        }
        String filepath = profile_imageData.getFilepath();
        byte[] image = Files.readAllBytes(new File(filepath).toPath());
        return image;
    }
}
