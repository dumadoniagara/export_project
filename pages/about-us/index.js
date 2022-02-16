import React from "react";
import Navbar from "../../components/navbar";
import Paralax from "../../components/paralax";

const AboutUsPage = () => {
    return (
        <div>
            <Navbar />
            <Paralax isHomePage={false}>
                <div className="text-white text-4xl font-semibold">
                    ABOUT OUR COMPANY
                </div>
            </Paralax>
            <div className="">

            </div>
        </div>
    )
}

export default AboutUsPage;