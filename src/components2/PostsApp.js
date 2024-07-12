import React from "react";
import { useSelector } from "react-redux";
import "./PostApp.scss";
import { BiCommentDetail, BiLike } from "react-icons/bi";
import { Button, Spin } from "antd";

export const PostsApp = () => {
  const { apiStatus, PostData } = useSelector((state) => state.POST.postInfo);
  console.log(PostData);

  if (apiStatus === "init" || apiStatus === "pending") {
    return <Spin size="large" />;
  }
  if (apiStatus === "error") {
    return <Button type="primary">Retry</Button>;
  }
  return (
    <div className="post-container">
      {PostData?.map?.((user, idx) => {
        return (
          <div id={user._id} key={idx} className="post-card">
            <b>{user.title} </b>
            <p>{user.content} </p>
            {user.imageUrls.map((image) => {
              return <img src={image} key={image} />;
            })}
            <div className="footer">
              <div>
                <BiLike />
                <span>{user.likesCount} </span>
              </div>
              <div>
                <BiCommentDetail />
                <span>{user.commentsCount} </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
