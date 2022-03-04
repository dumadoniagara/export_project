import React from "react";
import Logo from '../../public/images/contohbrand.png';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-[#dddddd] h-full w-full flex justify-center">
            <div className=" flex lg:flex-row flex-col p-16 text-gray-600 sm:px-10 sm:items-start max-w-5xl mx-auto">
                <div className="w-[45rem] brand md:pl-0 pl-48">
                    <Image
                        src={Logo}
                        responsive={true}
                        width={275}
                        height={75}
                    />
                    <div className="mt-5 text-md font-light w-[360px] sm:w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>
                <div className="w-[45rem] h-full mt-8 sm:mt-5 sm:mx-auto md:pl-0 pl-48 lg:ml-14">
                    <div className="font-semibold text-2xl pb-5">Site Map</div>
                    <Link href={'/'}>
                        <div className="font-light text-lg cursor-pointer">
                            <a className="hover:border-b-[1px] hover:border-gray-400">Home</a>
                        </div>
                    </Link>
                    <Link href={'/our-products'}>
                        <div className="font-light text-lg cursor-pointer mt-3">
                            <a className="hover:border-b-[1px] hover:border-gray-400">Product</a>
                        </div>
                    </Link>
                    <Link href={'/about-us'}>
                        <div className="font-light text-lg cursor-pointer mt-3">
                            <a className="hover:border-b-[1px] hover:border-gray-400">About us</a>
                        </div>
                    </Link>
                </div>
                <div className="w-[550px] sm:w-full h-full mt-8 sm:mt-5 md:pl-0 pl-48">
                    <div className="text-2xl font-semibold">Contact</div>
                    <div className="text-lg font-light mt-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <div>
                            Jalan Amir Mahmud No. 153, Cimahi, West Java, Indonesia
                        </div>
                    </div>
                    <div className="text-lg font-light mt-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <div>(+ 62) 812-2001-1064 </div>
                    </div>
                    <div className="text-lg font-light mt-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <div>loremipsum@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;