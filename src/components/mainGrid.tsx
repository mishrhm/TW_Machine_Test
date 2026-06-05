import { Alert, Col, Row, Spinner } from "react-bootstrap"
import { useAppSelector } from "../app/hooks";
import type { CountriesState } from "../features/countries/types";


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

    const { list, status, errpr, selectedRegion, visibleCount }: CountriesState = useAppSelector((state) => state.countries);



    if (status === 'loading') {
        return (
            <div className="text-center my-5 py-5">
                <Spinner animation="border" variant="dark" />
                <p className="text-muted mt-2 small">Loading countries database...</p>
            </div>
        );
    }

    if (status === 'failed') {
        return (
            <Alert variant="danger" className="rounded-0 my-4">
                {errpr || 'Failed to populate country items.'}
            </Alert>
        );
    }



    return (
        <Row className="g-3">
            {list.map((country, idx) => (
                <Col xs={12} md={6} key={idx}>
                    <div className="border border-dark p-2 d-flex align-items-center bg-white shadow-md transition-transform hover:translate-y-[-2px]"
                        style={{ boxShadow: '4px 4px 0px 0px #cfcfcf', }}>
                        <div
                            className=" d-flex align-items-center justify-content-center me-3 border "
                            style={{ width: '100px', height: '80px', flexShrink: 0, }}
                        >
                            🖼️
                        </div>
                        <div>
                            <h6 className="mb-1">{country.name}</h6>
                            <p className="fs-6 text-muted mb-0">{country.region}</p>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    )
}