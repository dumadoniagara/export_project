import React from "react";
import Image from "next/image";
import ImgPalmSugar from "../../public/images/product-aren.jpeg";

const CardProduct = (props) => {
    return (
        <div className="product-card bg-white w-[250px] rounded-lg overflow-hidden shadow-md border-2 border-slate-200 hover:scale-110 hover:shadow-xl transition ease-in-out delay-150 duration-300 cursor-pointer mt-10">
            <div className="image-container flex justify-center">
                <Image
                    src={ImgPalmSugar}
                    width={250}
                    height={200}
                    objectFit="cover"
                />
            </div>
            <div className="p-3">
                <div className="font-semibold text-slate-500">
                    West Java Palm Sugar
                </div>
                <div className="text-sm mt-2 font-light">
                    Palm sugar has a lighter taste than cane sugar with a distinctive aroma that has a lower glycemic index than other sugars.
                </div>
            </div>
        </div>
    )
}

export default CardProduct;