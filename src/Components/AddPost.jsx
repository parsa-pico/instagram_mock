import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import AddPostBar from "./AddPostBar";
import AddPostPreviewImage from "./AddPostPreviewImage";
import usePosts from "../hooks/usePosts";
import { currentUserId } from "./../utils/commonFunctions";
import { useNavigate } from "react-router-dom";
const uploadFolder = "/UploadStuff/";

export default function AddPost() {
  const navigate = useNavigate();

  const lastPage = 2;
  const [imageName, setImageName] = useState(null);
  const [text, setText] = useState("");
  const [page, setPage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [posts, setPosts] = usePosts();

  function handleAddPost() {
    const userId = currentUserId();
    const postsCopy = [...posts];
    const imageLocation = uploadFolder + imageName;
    const obj = { userId, img: imageLocation, caption: text };
    postsCopy.unshift(obj);

    setPosts(postsCopy);
  }

  useEffect(() => {
    if (page === 2) {
      if (progress !== 100)
        setTimeout(() => {
          setProgress(progress + 10);
        }, 100);
      else
        setTimeout(() => {
          navigate("/user/feed");
        }, 500);
    }
  }, [page, progress]);

  useEffect(() => {
    if (page === 2) handleAddPost();
  }, [page]);
  return (
    <div id="add-post">
      <AddPostBar imageName={imageName} pageState={[page, setPage]} />
      <h2 className="add-post__heading">New Post</h2>

      {page === 0 && (
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            choose your image
          </label>
          <input
            onChange={(e) => {
              const name = e.target.files[0].name;
              setImageName(name);
            }}
            accept="image/*"
            className="form-control"
            type="file"
            id="formFile"
          />
        </div>
      )}
      <AddPostPreviewImage
        page={page}
        lastPage={lastPage}
        imageState={[imageName, setImageName]}
      />

      {page == 2 && (
        <ProgressBar className="add-post__progress" now={progress} />
      )}
      {page === 1 && (
        <textarea
          value={text}
          placeholder="write a caption for your post"
          className="form-control add-post__caption "
          type="text"
          onChange={({ target }) => setText(target.value)}
        />
      )}
    </div>
  );
}
