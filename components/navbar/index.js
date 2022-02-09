import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BrandContoh from '../../public/images/contohbrand.png';
import { useRouter } from "next/router";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    return (
        <div className="w-full z-30 h-auto top-0 bg-white shadow-md flex-row justify-between p-4 fixed items-center font-inter lg:flex-col">
            <div className="mx-auto max-w-5xl">
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-between lg:border-b-0 lg:pb-0">
                        <div className="lg:pl-14 pl-2 text-2xl lg:text-3xl font-bold cursor-pointer">
                            <Image
                                src={BrandContoh}
                                width={150}
                                height={40}
                            />
                        </div>
                        {!isOpen ?
                            <div onClick={() => setIsOpen(true)} className="cursor-pointer lg:hidden">
                                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </div>
                            :
                            <div onClick={() => setIsOpen(false)} className="cursor-pointer lg:hidden">
                                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        }
                    </div>
                    <div className={`${isOpen ? 'block border-t-2 mt-4' : 'hidden'} lg:flex pt-2 px-2 lg:px-14 flex-col lg:flex-row lg:pt-0 lg:text-xl lg:border-t-0 lg:mt-0`}>
                        <Link className="" href="/">
                            <div className={`border-b-2 border-transparent lg:hover:border-orangeWest mr-8 cursor-pointer`}>
                                <a className={`${router.pathname == "/" ? "text-orangeWest font-semibold" : ""}`}>
                                    Home
                                </a>
                            </div>
                        </Link>
                        <Link className="" href="/our-products">
                            <div className={`border-b-2 border-transparent lg:hover:border-orangeWest mr-8 cursor-pointer`}>
                                <a className={`${router.pathname == "/our-products" ? "text-orangeWest font-semibold" : ""}`}>
                                    Our Products
                                </a>
                            </div>
                        </Link>
                        <Link className="" href="/about-us">
                            <div className={`border-b-2 border-transparent lg:hover:border-orangeWest mr-8 cursor-pointer `}>
                                <a className={`${router.pathname == "/about-us" ? "text-orangeWest font-semibold" : ""}`}>
                                    About Us
                                </a>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;