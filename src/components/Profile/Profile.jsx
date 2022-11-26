import React from "react";
import MyPosts from "../MyPosts/MyPosts";
import UserInfo from "../UserInfo/UserInfo";
import avatar from "../../assets/images/avatar.jpg";

const Profile = () => {
  return (
    <main className="page">
      <UserInfo
        avatar={avatar}
        name="Elvira K."
        date="12 august"
        city="Saint-Petersburg"
        education="MAEM'15"
      />
      <MyPosts />
    </main>
  );
};

export default Profile;
