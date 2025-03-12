import React, { useMemo } from 'react'
import Sidebar from '../../components/Layout/Sidebar'
import './voucher.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVouchers, approveVoucher, rejectVoucher } from '../../Redux/Slices/VoucherSlice';
import { Table, Form, Button, Modal } from 'react-bootstrap';


const Voucher = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.voucher || {});
//   console.log("Redux State:", useSelector((state) => state));


  // State for filtering and searching
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // State for approve/reject popups
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedVoucher, setSelectedVoucher] = useState(null);
  const [certificateImage, setCertificateImage] = useState(null);

  // Fetch voucher requests on component mount
  useEffect(() => {
    dispatch(fetchVouchers());
  }, [dispatch]);

  // Handle filtering and searching
  const vouchers = useSelector((state) => state.Voucher?.vouchers || []);



const filteredVouchers = useMemo(() => {
  return vouchers.filter((voucher) => {
    const matchesStatus = filterStatus === "all" || voucher.status === filterStatus;
    const matchesSearch = voucher.studentName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });
}, [vouchers, filterStatus, searchQuery]);

// console.log('ddd',filteredVouchers)

  // Handle approve button click
  const handleApprove = (voucher) => {
    setSelectedVoucher(voucher);
    setShowApproveModal(true);
  };

  // Handle reject button click
  const handleReject = (voucher) => {
    setSelectedVoucher(voucher);
    setShowRejectModal(true);
  };

  // Handle approve confirmation
  const handleApproveConfirm = () => {
    if (selectedVoucher && certificateImage) {
      dispatch(approveVoucher({ id: selectedVoucher.id, certificateImage }));
      setShowApproveModal(false);
      setCertificateImage(null);
    }
  };

  // Handle reject confirmation
  const handleRejectConfirm = () => {
    if (selectedVoucher) {
      dispatch(rejectVoucher(selectedVoucher.id));
      setShowRejectModal(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {/* Sidebar and Main Content Layout */}
      <div className="d-flex position-fixed vw-100 ">
        {/* Sidebar */}
        <div className="col-3">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-8 ml-5p">
          <div className='m-4'>
          <h1>Voucher Requests</h1>
          </div>

          {/* Filter and Search Controls */}
          <div className="mb-4">
            <Form.Select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className='custom-style-form-select'
            >
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </Form.Select>
            <Form.Control
              type="text"
              placeholder="Search by student name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
             className='custom-style-form-control'
            />
          </div>

          {/* Voucher Requests Table */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Institute</th>
                <th>Student Name</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredVouchers.map((voucher) => (
                <tr key={voucher.id}>
                  <td>{voucher.id}</td>
                  <td>{voucher.institute}</td>
                  <td>{voucher.studentName}</td>
                  <td>${voucher.amount}</td>
                  <td>{voucher.status}</td>
                  <td>
                    {voucher.status === 'pending' && (
                      <>
                        <Button
                          variant="success"
                          size="sm"
                          onClick={() => handleApprove(voucher)}
                          className='button-success'
                        >
                          Approve
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleReject(voucher)}
                        >
                          Reject
                        </Button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Approve Modal */}
          <Modal show={showApproveModal} onHide={() => setShowApproveModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Approve Voucher</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Are you sure you want to approve this voucher?</p>
              <Form.Group>
                <Form.Label>Upload Certificate Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={(e) => setCertificateImage(e.target.files[0])}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowApproveModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleApproveConfirm}>
                Approve
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Reject Modal */}
          <Modal show={showRejectModal} onHide={() => setShowRejectModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Reject Voucher</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Are you sure you want to reject this voucher?</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowRejectModal(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={handleRejectConfirm}>
                Reject
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Voucher;