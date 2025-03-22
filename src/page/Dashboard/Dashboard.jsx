import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUniversity } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Sidebar from '../../components/Layout/Sidebar';
import { fetchInstitutions } from '../../Redux/slices/InstitutionSlice';

import style from './dashboard.module.css'

const Dashboard = () => {
  const dispatch = useDispatch();

  const { loading, institutions, error } = useSelector((state) => state.institution);

  useEffect(() => {
    dispatch(fetchInstitutions());
  }, [dispatch]);

  // const caInstitutions = useSelector((state) => state.institution.institutions);
  // console.log(caInstitutions);

  const [search, setSearch] = useState('');
  const [searchText, setSearchText] = useState('');

  const searchClick = () => {
    console.log(`searched in ${search}`);
    setSearchText(search);
  };

  const filterInstitute = institutions?.filter((i) =>
    i.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div>
      <div className={`row position-fixed ${style.customWidth}`}>
        <div className='col-3'>
          <Sidebar />
        </div>
        <div className='col-9'>
          <div className='container-fluid m-4 ms-0'>
            <h2 className='text-primary text-center'>All Institutions</h2>
            <div>
              <form
                role='search'
                className='row justify-content-center mb-4'
                onSubmit={(e) => {
                  e.preventDefault();
                  searchClick();
                }}
              >
                <input
                  className='form-control me-2 w-75'
                  type='text'
                  placeholder='Search'
                  aria-label='Search'
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  className='btn btn-outline-primary col-2'
                  type='button'
                  onClick={searchClick}
                >
                  Search
                </button>
              </form>
              <div className={style.institutionList}>
                <div className='list-group'>
                  {loading ? (
                    <div className='p-3 text-center text-primary'>
                      Loading Institutions, please wait...
                    </div>
                  ) : error ? (
                    <div className='p-3 text-center text-danger'>Error: {error}</div>
                  ) : (
                    filterInstitute?.map((i) => (
                      <div
                        key={i._id}
                        className='d-flex align-items-center justify-content-between border p-3 mb-2 rounded'
                      >
                        <div className='d-flex align-items-center'>
                          <FaUniversity className='me-3 text-primary' size={24} />
                          <span className='fw-bold'>{i.name}</span>
                        </div>
                        <Link
                          to={`/institution-details/${i._id}`}
                          className='btn btn-primary btn-sm'
                        >
                          View Details
                        </Link>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
