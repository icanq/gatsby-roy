import React from "react";
import Roy from "../../assets/images/RoySqr.jpeg";
import Nesya from "../../assets/images/NesyaSqr.jpg";
import "./style.scss";
import { FaInstagram, FaInstagramSquare } from "react-icons/fa";

export default function Couples() {
  return (
    // <section className="couple-section" data-scroll-section>
    //   <div className="couple-row-layout">
    //     <img src={Roy} data-scroll />
    //   </div>
    //   <div className="couple-row-layout">

    //   </div>
    //   <div className="couple-row-layout">
    //     <img src={Nesya} data-scroll />
    //   </div>
    //   <div className="couple-row-layout">
    //     <h6>Roy Arief F</h6>
    //   </div>
    //   <div className="couple-row-layout">
    //   </div>
    //   <div className="couple-row-layout">
    //     <h6 style={{ textAlign: "end" }}>Banesya Fatiha</h6>
    //   </div>
    // </section>
    <div style={{alignItems: "center"}}>
    <section className="couple-section" data-scroll-section>
      <div className="couple-row-layout">
        <img src={Roy} data-scroll />
      </div>
      <div className="couple-row-layout">
        <img src={Nesya} data-scroll />
      </div>
      <div className="couple-row-layout">
        <h6>Roy Arief F</h6>
        <span>Ayah: Zaherman Arief, BSc</span>
        <span>Ibu: Hj. Andriawaty</span>
        <span style={{ fontSize: "5vh" }}>
          <FaInstagram
            onClick={() =>
              window.open("https://www.instagram.com/royarieff/", "_blank")
            }
          />
        </span>
      </div>
      <div className="couple-row-layout" style={{ textAlign: "end" }}>
        <h6>Banesya Fatiha</h6>
        <span>Ayah: Dickman Suyudi</span>
        <span>Ibu: Nur Hasanah</span>
        <span style={{ fontSize: "5vh" }}>
          <FaInstagram
            onClick={() =>
              window.open("https://www.instagram.com/banesyafatiha/", "_blank")
            }
          />
        </span>
      </div>
    </section>
    </div>
  );
}
