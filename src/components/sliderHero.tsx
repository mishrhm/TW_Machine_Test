import { Col, Row } from "react-bootstrap";
import CustomSlider from "./customSlider";

export function SliderHero() {
    return (
        <Row className="g-3 mb-5">
            <Col xs={12} md={8}>
                <CustomSlider />
            </Col>
            <Col xs={12} md={4} className="d-none d-md-block">
                <div className="border border-dark h-100 d-flex flex-column align-items-center justify-content-center min-h-[300px]">
                    <div className=" text-xs mb-2">Frame</div>
                    <div className="  rounded p-3">
                        <span>🌅</span>
                    </div>
                </div>
            </Col>
        </Row>
    )
}