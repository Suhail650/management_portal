import React, { useState } from "react";

import { Form, Button, Alert, Container, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../Redux/Slices/AuthSlice";
import "./login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password })).then((result) => {
            if (result.meta.requestStatus === "fulfilled") {
                navigate("/dashboard");
            }
        });
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card className="p-4 border border-2 border-dark rounded-5" style={{ width: "350px" }}>
                <h3 className="text-center">Management Portal</h3>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </Form.Group>
                    <div className="d-flex justify-content-center">
                        <Button type="submit"  disabled={loading} className="w-50 custom-btn">
                            {loading ? "Logging in..." : "Login"}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default Login;
