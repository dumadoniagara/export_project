import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import Carousel from '../components/carousel';
import Paralax from '../components/paralax';
import ThreeCards from '../components/threeCards';
import imgAren from '../public/images/kebun-aren3.jpg';
import imgProduct from '../public/images/product-aren.jpeg';
import Footer from '../components/footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Head>
        <title>West Java Palm Sugar</title>
        <meta name="description" content="Export your business from Indonesia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Paralax isHomePage={true}>
        <div className="text-white text-4xl font-semibold">
          WELCOME TO WEST JAVA PALM SUGAR
        </div>
      </Paralax>
      <ThreeCards />

      <div className='pt-2 p-16 font-inter max-w-5xl mx-auto'>
        <div className=' flex flex-col lg:flex-row lg:justify-between items-center sm:mt-10'>
          <div className='text-wrapper pt-16 mr-0 sm:mr-16'>
            <div className='text-gray-500'>Why West Java Palm Sugar ?</div>
            <div className='text-4xl mt-5'>We only provide <span className='font-semibold'>quality</span> products for you our customers.</div>
            <div className='mt-3 font-light'>
              <p>West java palm sugar is an exporting company. We export our best products from Indonesia. Our signature product is <span className='font-semibold'>west java palm sugar</span> that produce use best quality raw material</p>
              <p className='mt-2'>We always give our best service and best product for our customers. We are expanding our company and produce more products from Indonesia.</p>
            </div>
          </div>
          <div className='image-wrapper relative flex justify-center items-center max-w-sm mt-16 md:mt-16 sm:left-0 left-5'>
            <div className='sm:w-96 w-80 sm:h-[20rem] h-[17rem] bg-orangeWest rounded-md overflow-hidden relative top-16'></div>
            <div
              className="sm:w-96 mt-8 w-80 sm:h-[25rem] h-[22rem] mx-auto bg-cover bg-no-repeat bg-center rounded-md overflow-hidden absolute right-5 -top-16"
              style={{
                backgroundImage: `url('${imgAren.src}')`
              }}
            >
              <div className="bg-black bg-opacity-20 w-full h-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-2 p-16 font-inter max-w-5xl mx-auto pb-48'>
        <div className=' flex flex-col-reverse lg:flex-row lg:justify-between items-center sm:mt-10'>
          <div className='image-wrapper relative flex justify-center items-center max-w-sm mt-16 md:mt-16 sm:left-0 left-5'>
            <div className='sm:w-96 w-80 sm:h-[20rem] h-[17rem] bg-greenWest bg-opacity-80 rounded-md overflow-hidden relative top-16'></div>
            <div
              className="sm:w-96 mt-8 w-80 sm:h-[25rem] h-[22rem] mx-auto bg-cover bg-no-repeat bg-center rounded-md overflow-hidden absolute right-5 -top-16"
              style={{
                backgroundImage: `url('${imgProduct.src}')`
              }}
            >
              <div className="bg-black bg-opacity-20 w-full h-full"></div>
            </div>
          </div>
          <div className='text-wrapper pt-16 mr-0 sm:ml-16'>
            <div className='text-gray-500'>Our Product</div>
            <div className='text-4xl mt-5'>The Following are the featured products belonging to our company</div>
            <div className='mt-3 font-light'>
              <p>Check our products below. We still expanding our business to supplies more products from Indonesia, with best quality and competitive price.</p>
              <div className='flex justify-center mt-10'>
                <Link href={'/our-products'}>
                  <button className='transition ease-in-out delay-150 p-2 px-4 bg-orangeWest text-center text-white font-semibold rounded-2xl hover:bg-greenWest hover:-translate-y-1 hover:scale-110 duration-300'>
                    See Our Product
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
