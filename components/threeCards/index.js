import React from "react";

const ThreeCards = () => {
    return (
        <div className="relative sm:-mt-10 mt-2 sm:flex-row flex-col flex justify-center items-center">
            <div className="bg-white sm:w-64 sm:h-56 h-52 w-72 rounded-lg shadow-sm border-2 sm:mb-0 mb-4">
                <div className="h-full w-full flex flex-col justify-center items-center p-5">
                    <div className="bg-orangeWest bg-opacity-25 p-3 rounded-full border-[5px] border-gray-100 border-opacity-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orangeWest text-opacity-70" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                    </div>
                    <div className="text-center mt-5 text-gray-400">
                        <span className="font-semibold text-gray-400">(+ 62) 812-2001-1064</span>
                    </div>
                    <div className="text-center text-gray-400 mt-2">Contact us at following number
                    </div>
                </div>
            </div>
            <div className="bg-orangeWest sm:w-72 sm:h-64 h-52 w-72 rounded-lg shadow-sm border-2 border-orangeWest sm:mb-0 mb-4">
                <div className="h-full w-full flex flex-col justify-center items-center p-5">
                    <div className="bg-gray-200 bg-opacity-20 p-3 rounded-full border-[5px] border-gray-100 border-opacity-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white text-opacity-60" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="text-center mt-5 text-white">
                        <span className="text-white font-semibold text-opacity-70">Receive best service</span>
                    </div>
                    <div className="text-center text-white mt-2 font-light">We always trying our best to satisfy our customer</div>
                </div>
            </div>
            <div className="bg-white sm:w-64 sm:h-56 h-52 w-72 rounded-lg shadow-sm border-2 sm:mb-0 mb-4">
                <div className="h-full w-full flex flex-col justify-center items-center p-5">
                    <div className="bg-orangeWest bg-opacity-25 p-3 rounded-full border-[5px] border-gray-100 border-opacity-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orangeWest text-opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <div className="text-center mt-5 text-gray-400">
                        <span className="font-semibold text-gray-400">Professional</span>
                    </div>
                    <div className="text-center text-gray-400 mt-2">As emerging company we strive to be professional</div>
                </div>
            </div>
        </div>
    )
}

export default ThreeCards;