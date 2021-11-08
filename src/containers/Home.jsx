import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
/**
 * 
 * Urutan
 * 1. Foto Pembuka Jepang
 * 2. Bismillah & Ayat
 * 3. Foto Roy & Nesya
 * 4. Save the Date
 * 5. 3 Foto kaya yumna
 * 6. Info Akad dan Ramah tamah
 * 7. Our Moment
 * 8. Protokol
 * 9. Lokasi
 * 10. Ucapan
 * 
 */
import useLocoScroll from "../hooks/useLocoScroll";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Featured from "../components/Featured";
import About from "../components/About";
import Gallery from "../components/Gallery";
import DateCountdown from "../components/DateCountdown/index"

import Couples from "../components/Couples/index";

import "../styles/home.scss";
import ImageGallery from "../components/ImageGallery";
import Carousel, { ImageCarousel2 } from "../components/Carousel";
import ProtocolKesehatan from "../components/Protocols";

const Home = () => {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);
  const guestName = localStorage.getItem("guest")

  useLocoScroll(!preloader);

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = React.useState(3);

  const id = React.useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  return (
    <>
      {/* <CustomCursor /> */}
      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Wedding</h1>
          <h2>Roy & Nesya</h2>
          <h6>{!guestName || guestName === null ? null : "to"}</h6>
          <h5>{!guestName || guestName === null ? null : guestName}</h5>
        </div>
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
          ref={ref}
        >
          <Featured />
          <Header />
          <About />
          <Couples />
          <Carousel />
          <DateCountdown />
          <ImageGallery />
          <ProtocolKesehatan />
          <ImageCarousel2 />
          <Footer />
        </div>
      )}
    </>
  );
};
export default Home;
