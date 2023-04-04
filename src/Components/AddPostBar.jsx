import React, { useEffect, useState } from "react";
import backArrow from "../Images/Icons/back-arrow.svg";
import { useNavigate } from "react-router-dom";
export default function AddPostBar({ pageState, lastPage, imageName }) {
  const navigate = useNavigate();

  const [page, setPage] = pageState;

  const [backArrowClass, setBackArrowClass] = useState(
    "img-fluid group-bar__arrow group-info__arrow"
  );

  const [forwardArrowClass, setForwardArrowClass] = useState(
    "img-fluid group-bar__arrow group-info__arrow rotate-z-90"
  );

  function handleBackArrow() {
    if (page !== 0) setPage(page - 1);
  }

  function handleForwardArrow() {
    if (page !== lastPage) setPage(page + 1);
  }

  useEffect(() => {
    if (page === 0)
      setBackArrowClass("img-fluid group-bar__arrow group-info__arrow hidden");
    else if (page === 2) {
      setBackArrowClass("img-fluid group-bar__arrow group-info__arrow hidden");
    } else setBackArrowClass("img-fluid group-bar__arrow group-info__arrow");
  }, [page]);
  useEffect(() => {
    if (!imageName)
      setForwardArrowClass(
        "img-fluid group-bar__arrow group-info__arrow rotate-z-90 bare-visible"
      );
    else
      setForwardArrowClass(
        "img-fluid group-bar__arrow group-info__arrow rotate-z-90"
      );
  }, [imageName]);
  return (
    <div className="add-post__bar">
      <img
        id="add-post-back-arrow"
        onClick={handleBackArrow}
        className={backArrowClass}
        src={backArrow}
      />
      <img
        onClick={handleForwardArrow}
        className={forwardArrowClass}
        src={backArrow}
      />
    </div>
  );
}
