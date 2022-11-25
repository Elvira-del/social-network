import React from "react";
import MyPosts from "../MyPosts/MyPosts";
import UserInfo from "../UserInfo/UserInfo";

const Profile = () => {
  return (
    <main className="page">
      <UserInfo
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
