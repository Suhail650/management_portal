import React, { useState } from "react";

import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { approveStudent } from "../../Redux/slices/StudentsSlice";
import { uploadCertificate } from "../../services/studentsService";
import "bootstrap/dist/css/bootstrap.min.css";

const ApproveModal = ({ show, handleClose, studentId }) => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleApprove = async () => {
    if (file) {
      await uploadCertificate(studentId, file);
      dispatch(approveStudent(studentId));
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Upload Certificate</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Upload Certificate</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleApprove} disabled={!file}>
          Approve
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ApproveModal;
