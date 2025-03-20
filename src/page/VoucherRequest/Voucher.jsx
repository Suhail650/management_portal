import React, { useMemo, useState, useEffect } from 'react';

import { Table, Form, Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Sidebar from '../../components/Layout/Sidebar';
import { fetchVouchers, approveVoucher, rejectVoucher } from '../../Redux/Slices/VoucherSlice';

import style from './voucher.module.css';

const VoucherRequests = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.voucher || {});

  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedVoucher, setSelectedVoucher] = useState(null);

  useEffect(() => {
    dispatch(fetchVouchers()).then((data) => console.log('Fetched vouchers:', data));
  }, [dispatch]);

  const vouchers = useSelector((state) => state.Voucher?.vouchers || []);

  const filteredVouchers = useMemo(
    () =>
      vouchers.filter((voucher) => {
        const matchesStatus = filterStatus === 'all' || voucher.requestStatus === filterStatus;
        const matchesSearch = voucher.institutionName
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        return matchesStatus && matchesSearch;
      }),
    [vouchers, filterStatus, searchQuery],
  );

  const handleApprove = (voucher) => {
    setSelectedVoucher(voucher);
    setShowApproveModal(true);
  };

  const handleReject = (voucher) => {
    setSelectedVoucher(voucher);
    setShowRejectModal(true);
  };

  const handleApproveConfirm = () => {
    if (selectedVoucher) {
      dispatch(approveVoucher({ id: selectedVoucher._id }));
      setShowApproveModal(false);
    } else {
      console.error('Error: No valid voucher selected for approval.');
    }
  };

  const handleRejectConfirm = () => {
    if (selectedVoucher) {
      dispatch(rejectVoucher({ id: selectedVoucher._id }));
      setShowRejectModal(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='row position-fixed vw-100'>
      {/* Sidebar */}
      <div className='col-3 vh-100'>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className='col-9 container mt-4 '>
        <div className='mb-4 text-center text-primary'>
          <h1 className='fs-2'>Voucher Requests</h1>
        </div>
        <div className='d-flex mb-3 gap-3 justify-content-center'>
          <Form.Select
            className='w-25'
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value='all'>All</option>
            <option value='Pending'>Pending</option>
            <option value='Approved'>Approved</option>
            <option value='Rejected'>Rejected</option>
          </Form.Select>
          <Form.Control
            className='w-25'
            type='text'
            placeholder='Search by institution name'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className='table-responsive' >
          <div className={style.customTableContainer}>
            <Table striped bordered hover  className={style.customFixedTable}>
              <thead className={`text-center ${style.customTableHead}`}>
                <tr>
                  <th>Invoice.No</th>
                  <th>Institution</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                {filteredVouchers.map((voucher) => (
                  <tr key={voucher._id}>
                    <td>{voucher.invoice}</td>
                    <td>{voucher.institutionName}</td>
                    <td>{voucher.noOfVouchers}</td>
                    <td>{voucher.requestStatus}</td>
                    <td className='actions-column'>
                      {voucher.requestStatus === 'Pending' && (
                        <>
                          <Button
                            className='m-2'
                            variant='success'
                            size='sm'
                            onClick={() => handleApprove(voucher)}
                          >
                            Approve
                          </Button>
                          <Button variant='danger' size='sm' onClick={() => handleReject(voucher)}>
                            Reject
                          </Button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        {/* Approve Modal */}
        <Modal show={showApproveModal} onHide={() => setShowApproveModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Approve Voucher</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to approve this voucher?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={() => setShowApproveModal(false)}>
              Cancel
            </Button>
            <Button variant='primary' onClick={handleApproveConfirm}>
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
            <Button variant='secondary' onClick={() => setShowRejectModal(false)}>
              Cancel
            </Button>
            <Button variant='danger' onClick={handleRejectConfirm}>
              Reject
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default VoucherRequests;
