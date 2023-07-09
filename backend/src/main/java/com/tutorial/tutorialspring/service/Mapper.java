package com.tutorial.tutorialspring.service;
import com.tutorial.tutorialspring.model.Profile_model.Profile_pagedata;
import org.modelmapper.ModelMapper;


public class Mapper {
    private ModelMapper modelMapper;

    public Mapper() {
        this.modelMapper = new ModelMapper();
    }

    public Profile_pagedata mapProfile_pagedata(Profile_pagedata sourceEntity, Profile_pagedata destinationEntity) {
        modelMapper.map(sourceEntity, destinationEntity);
        return destinationEntity;
    }
}
