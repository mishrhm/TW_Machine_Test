import { Col, Row } from "react-bootstrap"


// Temporary design array to display initial visual layout elements
const MOCK_COUNTRIES = [
    { name: 'Afghanistan', region: 'Asia' },
    { name: 'Albania', region: 'Europe' },
    { name: 'Argentina', region: 'South America' },
    { name: 'Afghanistan', region: 'Asia' },
    { name: 'Afghanistan', region: 'Asia' },
    { name: 'Afghanistan', region: 'Asia' },
    { name: 'Afghanistan', region: 'Asia' },
    { name: 'Afghanistan', region: 'Asia' },
    { name: 'Afghanistan', region: 'Asia' },
    { name: 'Afghanistan', region: 'Asia' },
    { name: 'Afghanistan', region: 'Asia' },
    { name: 'Afghanistan', region: 'Asia' },
];

export const MainGrid = () => {
    return (
        <Row className="g-3">
            {MOCK_COUNTRIES.map((country, idx) => (
                <Col xs={12} md={6} key={idx}>
                    <div className="border border-dark p-3 d-flex align-items-center bg-white shadow-sm transition-transform hover:translate-y-[-2px]">
                        <div
                            className=" d-flex align-items-center justify-content-center me-3 border "
                            style={{ width: '80px', height: '50px', flexShrink: 0 }}
                        >
                            🖼️
                        </div>
                        <div>
                            <h6 className="fw-bold  mb-0.5">{country.name}</h6>
                            <p className="text-xs text-muted mb-0">{country.region}</p>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    )
}