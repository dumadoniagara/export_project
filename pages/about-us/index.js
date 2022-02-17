import React from "react";
import Navbar from "../../components/navbar";
import Paralax from "../../components/paralax";
import Image from "next/image";
import imgAren from '../../public/images/banner1.jpg';
import pohonAren from '../../public/images/pohon-aren.jpg';
import Footer from "../../components/footer";

const AboutUsPage = () => {
    return (
        <div>
            <Navbar />
            <Paralax isHomePage={false}>
                <div className="text-white text-4xl font-semibold">
                    ABOUT OUR COMPANY
                </div>
            </Paralax>
            <div className="max-w-4xl mt-10 mx-auto mb-96">
                <div className=' flex flex-col lg:flex-row lg:justify-between items-center sm:mt-10'>
                    <div className='text-wrapper max-w-sm pt-16 mr-0 sm:mr-16'>
                        <div className='text-gray-500'>Why West Java Palm Sugar ?</div>
                        <div className='text-4xl mt-5'>We only provide <span className='font-semibold'>quality</span> products for you <span className='font-semibold'>classy</span> customers.</div>
                        <div className='mt-3 font-light'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                            <p className='mt-2'>in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className='image-wrapper relative flex justify-center items-center max-w-sm sm:left-0 left-5'>
                        <div
                            className="sm:w-[30rem] w-80 sm:h-[25rem] h-[22rem] mx-auto bg-cover bg-no-repeat bg-center rounded-md overflow-hidden absolute right-5 mt-7"
                            style={{
                                backgroundImage: `url('${imgAren.src}')`
                            }}
                        >
                            <div className="bg-black bg-opacity-20 w-full h-full"></div>
                        </div>
                        {/* <div className='sm:w-44 w-80 sm:h-[16rem] h-10 bg-white rounded-md bg-contain bg-no-repeat opacity-80 bg-center overflow-hidden relative top-10 -left-[19rem] shadow-lg'
                            style={{
                                backgroundImage: `url('${pohonAren.src}')`
                            }}
                        >
                        </div> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUsPage;