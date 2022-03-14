import React from "react";
import Navbar from "../../components/navbar";
import Paralax from "../../components/paralax";
import CardProduct from "../../components/cardProduct";
import Footer from "../../components/footer";

const OurProductsPage = () => {
    return (
        <div className="bg-white overflow-x-hidden">
            <Navbar />
            <Paralax isHomePage={false}>
                <div className="text-white text-4xl font-semibold">
                    OUR PRODUCT
                </div>
            </Paralax>
            <div className="flex justify-center mt-10">
                <span className="text-2xl tracking-widest border-b-2 pb-2 border-b-orangeWest">Our Product</span>
            </div>
            <div className="max-w-4xl mt-2 mx-auto mb-10">
                <div className="flex flex-wrap justify-center">
                    <CardProduct />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OurProductsPage;