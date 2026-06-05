import { Card, Col, Container, Row } from "react-bootstrap";


const LoginPage = () => {
    return (
        <div>
            <div>
                Login Page
            </div>
            <Container >
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <h3>Login</h3>
                                <p>Credentials here</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginPage;