import React from "react";
import { Image } from "react-bootstrap";
const uploadFolder = "/UploadStuff/";
export default function AddPostPreviewImage({ imageState, page }) {
  const [imageName, setImageName] = imageState;
  return (
    <>
      {imageName && (
        <div className="add-post__image-preview">
          <Image
            className="add-post__image-preview__img"
            fluid
            src={uploadFolder + imageName}
          />
          {page === 0 && (
            <small className="add-post__image-preview__caption">
              image preview
            </small>
          )}
        </div>
      )}
    </>
  );
}
