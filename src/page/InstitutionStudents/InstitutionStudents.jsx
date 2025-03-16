import React from 'react';

import Filter from '../../components/institution/Filter';
import SearchBar from '../../components/institution/SearchBar';
import StudentList from '../../components/institution/StudentList';
import Sidebar from '../../components/Layout/Sidebar';

const InstitutionStudents = () => {
  return (
    <div>
      <div className='row position-fixed' style={{ width: '100vw' }}>
        <div className='col-3'>
          <Sidebar />
        </div>
        <div className='col-9'>
          <div className='mt-4 text-center text-primary'>
            <h1 className='fs-2'>Institutions Students</h1>
          </div>
          <div className='row position-sticky top-0 bg-white pb-3' style={{ zIndex: '1020' }}>
            <div className='col-md-12 d-flex align-items-center justify-content-center gap-2'>
              <SearchBar />
              <button className='btn btn-outline-success'>Search</button>
              <Filter />
            </div>
          </div>

          <div className='row' style={{ overflowY: 'scroll', height: '75vh' }}>
            <div className='col-md-12'>
              <StudentList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionStudents;
