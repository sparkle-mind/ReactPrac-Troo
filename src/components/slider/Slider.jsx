import { useState } from "react";
import Slide from "./Slide";
import SliderData from "../../../public/api/sliderData.json";

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextButton = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % SliderData.length); // Go to next slide, loop back to first
       
    };

    const handlePrevButton = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? SliderData.length - 1 : prevIndex - 1
        ); // Go to previous slide, loop back to last
    };

    return (
        <>
            <h2 className="section-title">Product Slider</h2>

            <ul className="cardListRow">
                <Slide key={currentIndex} data={SliderData[currentIndex]} />
            </ul>

            <div className="slider-btns">
                <button onClick={handlePrevButton}>Prev</button>
                <button onClick={handleNextButton}>Next</button>
            </div>
        </>
    );
};

export default Slider;
