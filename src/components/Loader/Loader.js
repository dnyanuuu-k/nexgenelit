import React from "react";
import "./Loader.css"; // Create a CSS file for loader styles
import image from "./4.png"; // Import the image

const Loader = () => {
    return (
        <div className="loader">
            <img src={image} alt="Loading..." className="loader-image" />
        </div>
    );
};

export default Loader;
