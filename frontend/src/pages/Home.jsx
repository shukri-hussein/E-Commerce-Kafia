import { useState, useEffect } from "react";

import video1 from "../videos/1.mp4";
import video2 from "../videos/2.mp4";
import video3 from "../videos/3.mp4";
import Header from "../components/Header";
import { motion } from "framer-motion";
import About from "./About";
import ProductList from "../components/ProductList";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Review from "../components/Review";
import Delivery from "../components/Delivery";
import { NavLink } from "react-router-dom";

const videos = [video1, video2, video3];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000); // Video walba 5 sec kadib ha is beddelo

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <div className="relative w-full flex items-center justify-center bg-black h-screen -mt-20 ">
        <video
          key={currentIndex}
          src={videos[currentIndex]}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
        
        {/* Overlay */}
      
<div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-4">
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-4xl sm:text-5xl font-extrabold mb-4"
  >
    Welcome <span className="text-cyan-400">Kafia Collection</span>
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
    className="text-lg sm:text-xl max-w-2xl"
  >
   
    <span>Kafia Collection🛍️ waa astaan muujinaysa Xarago Tayo Sare ah iyo Naqshad Casri ah.</span>  Hal-abuurkooda iyo dadaalkooda waxa ay u bixiyaan si ay u keenaan ALAAB gaar uh ah waa mid lagu ammaano.✨
  </motion.p>

  <NavLink to="/products" className="block py-2 sm:inline hover:text-white">
  <motion.button
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 1 }}
    className="mt-6 px-6 py-3 text-lg font-semibold bg-cyan-500 hover:bg-cyan-600 transition rounded-lg shadow-lg text-black hover:text-white"
  >
    Ka dukaamayso Hadda
  </motion.button>
  
  </NavLink>
</div>


      </div>
      <About />
      <ProductList />
      <Contact />
      <Review />
      <Delivery />
      <Footer />
    </>
  );
}

export default Home;
