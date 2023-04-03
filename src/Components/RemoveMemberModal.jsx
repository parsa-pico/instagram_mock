import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function RemoveMemberModal({
  showModal,
  handleCloseModal,
  selectedMemberName,
  removeMember,
}) {
  return (
    <div>
      <Modal
        backdropClassName="my-backdrop"
        show={showModal}
        onHide={handleCloseModal}
      >
        <Modal.Body>
          are you sure you want to remove &nbsp;
          <b>{selectedMemberName}</b> ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              removeMember();
              handleCloseModal();
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
