import React from "react";
import { Carousel } from "react-responsive-carousel";
import Protokol from "../../assets/images/protokol.png";
import SectionHeader from "../SectionHeader";

export default function ProtocolKesehatan() {
  return (
    <div>
      <section style={{marginLeft: "-5vw", marginRight: "-5vw"}}>
      <SectionHeader title="Protokol Kesehatan" />
        <Carousel
          centerMode
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
        >
          <img src={Protokol} />
        </Carousel>
      </section>
    </div>
  );
}
