package com.tutorial.tutorialspring.model.Profile_model;

import jakarta.persistence.*;

@Entity
public class Profile_pagedata {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long profile_pagedata_id;

    private long profileId;

    private String lastUpdated;
    private String updatedBy;
    private int accuracy;

    public Profile_pagedata() {
    }

    public long getProfile_pagedata_id() {
        return profile_pagedata_id;
    }

    public void setProfile_pagedata_id(long profile_pagedata_id) {
        this.profile_pagedata_id = profile_pagedata_id;
    }

    public long getProfileId() {
        return profileId;
    }

    public void setProfileId(long profileId) {
        this.profileId = profileId;
    }

    public String getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }


    public int getAccuracy() {
        return accuracy;
    }

    public void setAccuracy(int accuracy) {
        this.accuracy = accuracy;
    }
}
