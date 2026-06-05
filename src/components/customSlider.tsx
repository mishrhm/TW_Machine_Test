

import React, { useState } from 'react';

const CustomSlider: React.FC = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const totalSlides = 5;

    const handlePrev = () => setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    const handleNext = () => setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

    return (
        <div className="position-relative w-100 h-100 border border-dark d-flex flex-column align-items-center justify-content-center bg-light min-h-[400px]">
            <div className="text-center p-4">
                <div className="fs-6 text-muted mb-2">Image</div>
                <div className="  rounded p-3 d-inline-block shadow-sm">
                    <span className="display-1">🌌</span>
                </div>
                <div className="mt-3 font-semibold m-5">Featured Display #{activeSlide + 1}</div>
            </div>

            <div className="position-absolute bottom-0 mb-3 d-flex align-items-center gap-2 px-3 py-1 ">
                <button onClick={handlePrev} className="border-0 bg-transparent fw-bold  hover:text-dark px-1">
                    ←
                </button>

                <div className="d-flex gap-1.5 px-1">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <span
                            key={index}
                            onClick={() => setActiveSlide(index)}
                            className="rounded-circle cursor-pointer border"
                            style={{
                                margin: '1px',
                                width: '12px',
                                height: '12px',
                                backgroundColor: activeSlide === index ? '#27272a' : '#ffffff',
                                display: 'inline-block'
                            }}
                        />
                    ))}
                </div>

                <button onClick={handleNext} className="border-0 bg-transparent fw-bold  hover:text-dark px-1">
                    →
                </button>
            </div>
        </div>
    );
};

export default CustomSlider;