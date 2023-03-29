import React, { useState } from "react";
import { Image } from "react-bootstrap";
import postsDB from "../DataBase/posts.json";

export default function Feed() {
  const [posts, setPosts] = useState(postsDB);
  return (
    <div id="feed">
      {posts.map((post, index) => {
        return (
          <div key={index} className="post">
            <div className="post__header">
              <Image className="post__avatar" fluid src={post.avatar} alt="" />
              <h5>{post.sender}</h5>
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
