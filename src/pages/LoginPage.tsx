import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";


const LoginPage = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [persistSession, setPersistSession] = useState(false);

    return (
        <div className="">
            <Container fluid className="">
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <h3>Sign in</h3>
                                <Form>
                                    <Form.Group >
                                        <Form.Control
                                            type="text" placeholder="Username or email"
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Control
                                        type="password" placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}>
                                    </Form.Control>
                                    <Form.Check type="checkbox" label="keep me signed in"
                                        checked={persistSession}
                                        onChange={(e) => setPersistSession(e.target.checked)}>
                                    </Form.Check>
                                    <Button type="submit">
                                        Sign in
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        Column with the image
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginPage;