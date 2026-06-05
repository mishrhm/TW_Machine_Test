
import { Nav } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setRegion } from "../features/countries/countriesSlice";

export const Navbar = () => {
    const dispatch = useAppDispatch();

    const selectedRegion = useAppSelector((state) => state.countries.selectedRegion);


    return (
        <header className="d-flex justify-content-between align-items-center mb-2 px-1">
            <h5 className="fw-bold m-0">Countries</h5>
            <Nav variant="pills" activeKey={selectedRegion} onSelect={(k) => {
                if (k) {
                    dispatch(setRegion(k));
                }
            }}>
                {['All', 'Asia', 'Europe'].map((tab) => (
                    <Nav.Item key={tab}>
                        <Nav.Link
                            eventKey={tab}
                            className={`rounded-0 bg-transparent py-1 px-3 border-bottom border-2 
                                ${selectedRegion === tab ? 'border-dark text-dark fw-bold' : 'border-light text-secondary '
                                }`}
                        >
                            {tab}
                        </Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
        </header>
    )
}