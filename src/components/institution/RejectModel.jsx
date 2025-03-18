import React from 'react';

import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { rejectStudent } from '../../Redux/slices/StudentsSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const RejectModal = ({ show, handleClose, studentId }) => {
  const dispatch = useDispatch();

  const handleReject = () => {
    dispatch(rejectStudent(studentId));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Rejection</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to reject this student?</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Cancel
        </Button>
        <Button variant='danger' onClick={handleReject}>
          Reject
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RejectModal;
