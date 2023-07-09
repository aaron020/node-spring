package com.tutorial.tutorialspring.model.Profile_model;

import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;

@Entity
public class Profile_data {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long profileId;
    private String name;
    private String gender;
    private String birthday;
    private String nationality;
    private String first_name;
    private String last_name;
    @Lob
    private String about;
    private long net_worth;
    private String occupation_1;
    private String occupation_2;
    private String occupation_3;
    @Lob
    private String knownFor;

    public Profile_data() {
    }

    public long getProfileId() {
        return profileId;
    }

    public void setProfileId(long profileId) {
        this.profileId = profileId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public long getNet_worth() {
        return net_worth;
    }

    public void setNet_worth(long net_worth) {
        this.net_worth = net_worth;
    }

    public String getOccupation_1() {
        return occupation_1;
    }

    public void setOccupation_1(String occupation_1) {
        this.occupation_1 = occupation_1;
    }

    public String getOccupation_2() {
        return occupation_2;
    }

    public void setOccupation_2(String occupation_2) {
        this.occupation_2 = occupation_2;
    }

    public String getOccupation_3() {
        return occupation_3;
    }

    public void setOccupation_3(String occupation_3) {
        this.occupation_3 = occupation_3;
    }

    public String getKnownFor() {
        return knownFor;
    }

    public void setKnownFor(String knownFor) {
        this.knownFor = knownFor;
    }
}
