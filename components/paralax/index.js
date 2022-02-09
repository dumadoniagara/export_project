import React from "react";
import Image from "next/image";
import Banner1 from '../../public/images/banner1.jpg';
import Banner2 from '../../public/images/banner2.jpg';
import Banner4 from '../../public/images/banner5.png';
import Banner5 from '../../public/images/kebun-aren.jpg';
import Banner6 from '../../public/images/kebun-aren2.jpg';

const Carousel = () => {
    return (
        <div
            className="mt-[80px] max-w-full mx-auto h-[30rem] bg-cover bg-no-repeat bg-center bg-fixed"
            style={{
                backgroundImage: `url('${Banner5.src}')`
            }}
        >
            <div className="bg-black bg-opacity-60 w-full h-full flex justify-center  text-center items-center">
                <div className="text-white text-4xl font-semibold">
                    WELCOME TO WEST JAVA PALM SUGAR
                </div>
            </div>
        </div>
    )
}

export default Carousel;