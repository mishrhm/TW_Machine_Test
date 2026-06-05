import { Alert, Col, Row, Spinner } from "react-bootstrap"
import { useAppSelector } from "../app/hooks";
import type { CountriesState } from "../features/countries/types";

export const MainGrid = () => {

    const { list, status, error, selectedRegion, visibleCount }: CountriesState = useAppSelector((state) => state.countries);


    const filteredCountries = list.filter((country) => {
        if (selectedRegion === 'All') return true;
        return country.region.toLowerCase() === selectedRegion.toLowerCase();
    });


    const displayedCountries = filteredCountries.slice(0, visibleCount);

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
                {error || 'Failed to populate county items.'}
            </Alert>
        );
    }



    return (
        <Row className="g-3">
            {displayedCountries.map((country, idx) => (
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