import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUniversity } from "react-icons/fa";
import Sidebar from "../../components/Layout/Sidebar";

const Dashboard = () => {
  const caInstitutions = [
    {
      id: 1,
      name: "The Institute of Chartered Accountants of India (ICAI)",
      location: "India",
    },
    {
      id: 2,
      name: "Association of Chartered Accountants (ACCA)",
      location: "UK",
    },
    {
      id: 3,
      name: "Chartered Professional Accountants of Canada (CPA Canada)",
      location: "Canada",
    },
    {
      id: 4,
      name: "The Institute of Chartered Accountants in England and Wales (ICAEW)",
      location: "UK",
    },
    {
      id: 5,
      name: "Chartered Accountants Australia and New Zealand (CA ANZ)",
      location: "Australia & New Zealand",
    },
    {
      id: 6,
      name: "South African Institute of Chartered Accountants (SAICA)",
      location: "South Africa",
    },
    {
      id: 7,
      name: "The Institute of Chartered Accountants of Pakistan (ICAP)",
      location: "Pakistan",
    },
    {
      id: 8,
      name: "Hong Kong Institute of Certified Public Accountants (HKICPA)",
      location: "Hong Kong",
    },
    {
      id: 9,
      name: "The Institute of Chartered Accountants of Bangladesh (ICAB)",
      location: "Bangladesh",
    },
    {
      id: 10,
      name: "The Institute of Chartered Accountants of Sri Lanka (CA Sri Lanka)",
      location: "Sri Lanka",
    },
  ];

  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  const searchClick = () => {
    console.log(`searched in ${search}`);
    setSearchText(search);
  };

  const filterInstitute = caInstitutions.filter((i) =>
    i.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <div className="row position-fixed" style={{ width: "100vw" }}>
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <div className="container-fluid m-4 ms-0">
            <h2 className="text-primary text-center">All Institutions</h2>
            <div>
              <form role="search" className="row justify-content-center mb-4">
                <input
                  className="form-control me-2 w-75"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  className="btn btn-outline-primary col-2"
                  type="button"
                  onClick={searchClick}
                >
                  Search
                </button>
              </form>
              <div style={{ height: "70vh", overflowY: "scroll" }}>
                <div className="list-group">
                  {filterInstitute.map((i) => (
                    <div
                      key={i.id}
                      className="d-flex align-items-center justify-content-between border p-3 mb-2 rounded"
                    >
                      <div className="d-flex align-items-center">
                        <FaUniversity className="me-3 text-primary" size={24} />
                        <span className="fw-bold">{i.name}</span>
                      </div>
                      <button className="btn btn-primary btn-sm">
                        View Details
                      </button>
                    </div>
                  ))}
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
