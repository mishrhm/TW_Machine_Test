import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";


const LoginPage = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [persistSession, setPersistSession] = useState(false);

    function handleSignIn(e: React.SubmitEvent): void {
        e.preventDefault();
        console.log({ userName, password, persistSession })
    }

    return (
        <div className="">
            <Container fluid className="min-vh-100 d-flex align-items-center bg-white px-4">
                <Row className="w-100 align-items-center justify-content-center">
                    <Col xs={12} md={5} lg={4} className="mx-auto">

                        <h3 className="m-2 fs-2">Sign in</h3>
                        <h5 className="m-2 py-2 fs-6">New User? <span className="fs-6 text-primary">Create an account</span></h5>
                        <Form onSubmit={handleSignIn}>
                            <Form.Group >
                                <Form.Control
                                    type="text" placeholder="Username or email"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    className="p-2 m-2  border-dark border-2 rounded-0">
                                </Form.Control>
                            </Form.Group>
                            <Form.Control
                                type="password" placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="p-2 m-2 border-dark border-2 rounded-0"
                            >
                            </Form.Control>
                            <div>
                                <Form.Check type="checkbox" label="Keep me signed in"
                                    checked={persistSession}
                                    onChange={(e) => setPersistSession(e.target.checked)}
                                    className="p-2 m-2 rounded-0 ms-4 custom-checkbox">
                                </Form.Check>
                            </div>
                            <Button type="submit" className="w-100 rounded-0 p-2 ms-2"
                                style={{ backgroundColor: '#3f3f46' }}
                            >
                                Sign in
                            </Button>
                        </Form>
                        <div className="d-flex align-items-center my-4">
                            <hr className="flex-grow-1 border-gray-300 my-0" />
                            <span className="mx-3 small fw-bold text-nowrap" style={{ fontSize: '0.75rem' }}>
                                Or Sign In With
                            </span>
                            <hr className="flex-grow-1 border-gray-300 my-0" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6} className="d-none d-md-flex justify-content-center align-items-center position-relative">
                        Column with the image
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginPage;