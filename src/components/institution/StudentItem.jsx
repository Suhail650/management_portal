import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentItem = ({ student, onApprove, onReject }) => {
  return (
    <div className="d-flex justify-content-between p-3 border rounded mb-2">
      <span>
        {student.name} - {student.status}
      </span>
      <div>
        {student.status === "Pending" && (
          <>
            <Button variant="success" onClick={() => onApprove(student.id)}>
              Approve
            </Button>
            <Button
              variant="danger"
              className="ms-2"
              onClick={() => onReject(student.id)}
            >
              Reject
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default StudentItem;
