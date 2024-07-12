import { useSelector } from "react-redux";
import { Spin } from "antd";
import "./userinfo.scss";
import { FormPopup } from "./FormPopup";

export const Userinfo = () => {
  const { apiStatus, UserData } = useSelector((state) => state.POST.userInfo);
  console.log(UserData);

  if (apiStatus === "pending" || apiStatus === "init") {
    return <Spin size="large" />;
  }
  return (
    <div className="userinfo-container">
      <div className="user1">
        <b>{UserData.name} </b>
        <p>{UserData.email} </p>
        <p>{UserData.city} </p>
        <p>{UserData.gender === "MALE" ? "HE/HIM" : "SHE/HER"} </p>
        <p>
          {UserData.followers}, Followers {UserData.following}, Following
        </p>
      </div>
      <FormPopup postdata={UserData.posts} />
    </div>
  );
};
