import { useState } from "react";
import { Nav } from "react-bootstrap"

export const Navbar = () => {
    const [activeTab, setActiveTab] = useState('All');

    return (
        <header className="d-flex justify-content-between align-items-center mb-2 px-1">
            <h5 className="fw-bold m-0">Countries</h5>
            <Nav variant="pills" activeKey={activeTab} onSelect={(k) => setActiveTab(k || 'All')}>
                {['All', 'Asia', 'Europe'].map((tab) => (
                    <Nav.Item key={tab}>
                        <Nav.Link
                            eventKey={tab}
                            className={`rounded-0 bg-transparent py-1 px-3 border-bottom border-2 
                                ${activeTab === tab ? 'border-dark text-dark fw-bold' : 'border-light text-secondary '
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