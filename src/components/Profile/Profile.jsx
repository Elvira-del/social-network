import React from "react";
import { MyPosts } from "../MyPosts/MyPosts";
import { UserInfo } from "../UserInfo/UserInfo";
import avatar from "../../assets/images/avatar.jpg";

const Profile = () => {
  return (
    <div className="container">
      <UserInfo
        avatar={avatar}
        name="Elvira K."
        date="12 august"
        city="Saint-Petersburg"
        education="MAEM'15"
      />
      <MyPosts />
    </div>
  );
};

export { Profile };
