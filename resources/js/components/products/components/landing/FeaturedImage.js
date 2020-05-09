import React from "react";

const FeaturedImage = props => {
    return (
        <div id="featured-img">
            <div className="featured-img-box">
                <img
                    src="https://fscl01.fonpit.de/userfiles/7640001/image/best-high-end-smartphones/AndroidPIT-Best-High-End-Smartphones-Hero-2.jpg"
                    alt=""
                />
            </div>
            <div className="featured-img-overlay"></div>
            <div className="featured-img-content">
                <h2>Best Price, Best Quality</h2>
                <p>
                    Grab your next latest smartphone with the cheapest price in
                    town with free delivery in Malaysia.
                </p>
                <a href="/products">Shop Now</a>
            </div>
        </div>
    );
};

export default FeaturedImage;
