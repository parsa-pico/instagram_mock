import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function InterestsOffCanvas({
  show,
  handleClose,
  interest,
  deleteInterest,
}) {
  return (
    <Modal
      backdropClassName="my-backdrop"
      placement="top"
      show={show}
      onHide={handleClose}
    >
      <Modal.Header>
        <Modal.Title className="interest-canvas-title">
          {interest.speciality}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="interest-canvas-body">
        <h5>Category:</h5>
        <h5 style={{ textTransform: "capitalize" }}>{interest.category}</h5>
        <h5>Level:</h5>
        <h5 style={{ textTransform: "capitalize" }}>{interest.level}</h5>
        <div className="interest-canvas-btns">
          <Button
            variant="danger"
            className="interest-canvas-delete"
            onClick={() => {
              deleteInterest(interest.speciality);
            }}
          >
            delete interest
          </Button>
          <Button
            variant="secondary"
            className="interest-canvas-close"
            onClick={handleClose}
          >
            close
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
