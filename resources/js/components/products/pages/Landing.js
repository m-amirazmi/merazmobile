import React from "react";
import FeaturedImage from "../components/landing/FeaturedImage";
import FeaturedBrand from "../components/landing/FeaturedBrand";
import BrandStrip from "../components/landing/BrandStrip";
import TopSelling from "../components/landing/TopSelling";
import OurTraits from "../components/landing/OurTraits";

const Landing = props => {
    return (
        <div>
            <FeaturedImage />
            <FeaturedBrand />
            <BrandStrip />
            <TopSelling />
            <OurTraits />
        </div>
    );
};

export default Landing;
