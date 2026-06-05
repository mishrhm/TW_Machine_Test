import { Col, Row } from "react-bootstrap";
import CustomSlider from "./customSlider";

export function SliderHero() {
    return (
        <Row className="g-3 mb-5">
            <Col xs={12} md={8} className="order-2 order-md-1">
                <CustomSlider />
            </Col>
            <Col xs={12} md={4} className="d-flex d-md-block order-1 order-md-2">
                <Frame></Frame>
            </Col>
        </Row>
    )
}

export function Frame() {


    return (
        <div className="border border-dark h-100 w-100 d-flex flex-column align-items-center justify-content-center min-h-[500px]">
            <div className="  rounded p-3">
                <img src="https://www.timesworld.com/images/logo.png?v=1.0.1"
                    alt={`Times World Logo (:-))`}
                    className="w-100 h-100 object-fit-cover" />
            </div>
        </div>
    )
}