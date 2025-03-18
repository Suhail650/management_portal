import React, { useMemo, useState } from 'react';

import { useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import ApproveModal from './ApproveModel';
import RejectModal from './RejectModel';
import StudentItem from './StudentItem';

const StudentList = () => {
  const [showApprove, setShowApprove] = useState(false);
  const [showReject, setShowReject] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  const { students, filterStatus, searchQuery } = useSelector((state) => state.students);

  const filteredStudents = useMemo(() => {
    return students?.filter(
      (s) =>
        (filterStatus === 'All' || s.status === filterStatus) &&
        s.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [students, filterStatus, searchQuery]);

  const handleApprove = (studentId) => {
    setSelectedStudentId(studentId);
    setShowApprove(true);
  };

  const handleReject = (studentId) => {
    setSelectedStudentId(studentId);
    setShowReject(true);
  };

  return (
    <div className='mt-3'>
      {filteredStudents?.map((student) => (
        <StudentItem
          key={student.id}
          student={student}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      ))}
      <RejectModal
        show={showReject}
        handleClose={() => setShowReject(false)}
        studentId={selectedStudentId}
      />
      <ApproveModal
        show={showApprove}
        handleClose={() => setShowApprove(false)}
        studentId={selectedStudentId}
      />
    </div>
  );
};

export default StudentList;
