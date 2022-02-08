import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-full h-auto bg-white shadow-md flex-row justify-between p-4 fixed items-center font-inter lg:flex-col">
            <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="flex items-center justify-between lg:border-b-0 lg:pb-0">
                    <div className="lg:pl-14 pl-2 text-2xl lg:text-3xl font-bold">Export.ID</div>
                    {!isOpen ?
                        <div onClick={() => setIsOpen(true)} className="cursor-pointer lg:hidden">
                            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </div>
                        :
                        <div onClick={() => setIsOpen(false)} className="cursor-pointer lg:hidden">
                            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    }
                </div>
                <div className={`${isOpen ? 'block border-t-2 mt-4' : 'hidden'} lg:flex pt-2 px-2 lg:px-14 flex-col lg:flex-row lg:pt-0 lg:text-xl lg:border-t-0 lg:mt-0`}>
                    <div className="mr-8 cursor-pointer">
                        <Link href="/">
                            <div className="border-b-2 border-transparent lg:hover:border-gray-500">Home</div>
                        </Link>
                    </div>
                    <div className="mr-8 cursor-pointer">
                        <Link href="/our-products">
                            <div className="border-b-2 border-transparent lg:hover:border-gray-500">Our Products</div>
                        </Link>
                    </div>
                    <div className="mr-8 cursor-pointer">
                        <Link href="/contacts">
                            <div className="border-b-2 border-transparent lg:hover:border-gray-500">Contact</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;