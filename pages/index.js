import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import Carousel from '../components/carousel';
import Paralax from '../components/paralax';
import ThreeCards from '../components/threeCards';

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>West Java Palm Sugar</title>
        <meta name="description" content="Export your business from Indonesia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Paralax />
      <ThreeCards />
      {/* <Carousel /> */}
      <div className='pt-20 p-16 font-inter max-w-5xl mx-auto'>
        <div className='mt-2'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam tempor orci eu. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Nunc id cursus metus aliquam eleifend mi in nulla. Arcu dictum varius duis at consectetur lorem. Turpis egestas sed tempus urna et. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Nec ullamcorper sit amet risus. Aliquam nulla facilisi cras fermentum odio eu feugiat. Et leo duis ut diam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam tempor orci eu. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Nunc id cursus metus aliquam eleifend mi in nulla. Arcu dictum varius duis at consectetur lorem. Turpis egestas sed tempus urna et. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Nec ullamcorper sit amet risus. Aliquam nulla facilisi cras fermentum odio eu feugiat. Et leo duis ut diam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam tempor orci eu. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Nunc id cursus metus aliquam eleifend mi in nulla. Arcu dictum varius duis at consectetur lorem. Turpis egestas sed tempus urna et. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Nec ullamcorper sit amet risus. Aliquam nulla facilisi cras fermentum odio eu feugiat. Et leo duis ut diam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam tempor orci eu. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Nunc id cursus metus aliquam eleifend mi in nulla. Arcu dictum varius duis at consectetur lorem. Turpis egestas sed tempus urna et. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Nec ullamcorper sit amet risus. Aliquam nulla facilisi cras fermentum odio eu feugiat. Et leo duis ut diam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam tempor orci eu. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Nunc id cursus metus aliquam eleifend mi in nulla. Arcu dictum varius duis at consectetur lorem. Turpis egestas sed tempus urna et. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Nec ullamcorper sit amet risus. Aliquam nulla facilisi cras fermentum odio eu feugiat. Et leo duis ut diam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam tempor orci eu. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Nunc id cursus metus aliquam eleifend mi in nulla. Arcu dictum varius duis at consectetur lorem. Turpis egestas sed tempus urna et. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Nec ullamcorper sit amet risus. Aliquam nulla facilisi cras fermentum odio eu feugiat. Et leo duis ut diam.
          </p>
        </div>
      </div>
    </div>
  )
}
