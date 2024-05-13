package com.project.projectBookTickets.entity;

import com.project.projectBookTickets.model.UserNameProfile;

import jakarta.persistence.Column;
import jakarta.persistence.ColumnResult;
import jakarta.persistence.ConstructorResult;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.NamedNativeQuery;
import jakarta.persistence.SqlResultSetMapping;
import jakarta.persistence.SqlResultSetMappings;
import jakarta.persistence.Table;

@SqlResultSetMappings({
        @SqlResultSetMapping(
                name = "UserNameProfile",
                classes = @ConstructorResult(
                        targetClass = UserNameProfile.class,
                        columns = {
                                @ColumnResult(name = "user_id", type = Integer.class),
                                @ColumnResult(name = "username", type = String.class),
                                @ColumnResult(name = "user_avatar", type = String.class),
                                @ColumnResult(name = "user_fullname", type = String.class),
                                @ColumnResult(name = "user_birthday", type = String.class),
                                @ColumnResult(name = "user_gender", type = Integer.class),
                                @ColumnResult(name = "user_email", type = String.class),
                                @ColumnResult(name = "user_city", type = String.class),
                                @ColumnResult(name = "user_phone", type = String.class),
                                @ColumnResult(name = "user_point", type = Integer.class)
                        }
                )
        )
})
@NamedNativeQuery(name = "getUserNameProfile", resultSetMapping = "UserNameProfile",
query = "SELECT `user_id`,`username`,`user_avatar`,`user_fullname`,DATE_FORMAT(`user_birthday`, \"%d/%m/%Y\") as `user_birthday`,`user_gender`,`user_email`,`user_city`,`user_phone`,`user_point` FROM `users` WHERE `user_id` = ?1")


@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    private int userId;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "user_avatar")
    private String userAvatar;

    @Column(name = "user_fullname")
    private String userFullname;

    @Column(name = "user_birthday")
    private String userBirthday;

    @Column(name = "user_gender")
    private int userGender;

    @Column(name = "user_email")
    private String userEmail;

    @Column(name = "user_phone")
    private String userPhone;

    @Column(name = "user_city")
    private String userCity;

    public User() {
    }



    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserAvatar() {
        return userAvatar;
    }

    public void setUserAvatar(String userAvatar) {
        this.userAvatar = userAvatar;
    }

    public String getUserFullname() {
        return userFullname;
    }

    public void setUserFullname(String userFullname) {
        this.userFullname = userFullname;
    }

    public String getUserBirthday() {
        return userBirthday;
    }

    public void setUserBirthday(String userBirthday) {
        this.userBirthday = userBirthday;
    }

    public int getUserGender() {
        return userGender;
    }

    public void setUserGender(int userGender) {
        this.userGender = userGender;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserPhone() {
        return userPhone;
    }

    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }

    public String getUserCity() {
        return userCity;
    }

    public void setUserCity(String userCity) {
        this.userCity = userCity;
    }
}