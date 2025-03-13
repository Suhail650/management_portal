import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SearchBar from "../../components/institution/SearchBar";
import Filter from "../../components/institution/Filter";
import StudentList from "../../components/institution/StudentList";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../components/Layout/Sidebar";

const InstitutionStudents = () => {
    return (
        <>
            <Container fluid className="p-0 ">
                <Row>
                    {/* Sidebar - Fixed on the Left */}
                    <Col md={3} className="position-fixed vh-100 bg-light ">
                        <Sidebar />
                    </Col>

                    {/* Main Content - Push right (Add margin to avoid overlap) */}
                    <Col md={{ span: 9, offset: 3 }}>
                        <Row className="position-sticky top-0 bg-white py-5" style={{ zIndex: 1020 }}>
                            <Col md={12} className="d-flex align-items-center justify-content-center gap-2">
                                <SearchBar />
                                <Button variant="outline-success">Search</Button>
                                <Filter />
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col md={12}>
                                <StudentList />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default InstitutionStudents;
