package com.tutorial.tutorialspring.service.Profile;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface Profile_ImageData_Service {
    String uploadImageToFileSystem(MultipartFile file, long profileId) throws IOException;
    byte[]  downloadImageFromFileSystem(long id) throws IOException;
}
