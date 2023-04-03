import React, { useState } from "react";
import { Image } from "react-bootstrap";
import usePosts from "../hooks/usePosts";
import useUser from "./../hooks/useUser";

export default function Feed() {
  const [posts, setPosts] = usePosts();
  const [users, setUsers] = useUser();
  return (
    <div id="feed">
      {posts.map((post, index) => {
        const user = users.find((user) => user.id === post.userId);
        return (
          <div key={index} className="post">
            <div className="post__header">
              <Image className="post__avatar" fluid src={user.avatar} alt="" />
              <h5>{user.username}</h5>
            </div>
            <div className="post__img-wrapper">
              <Image fluid src={post.img} />
            </div>
            <div className="post__caption-wrapper">
              <p>{post.caption}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
