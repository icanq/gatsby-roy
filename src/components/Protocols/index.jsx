import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Protokol from "../../assets/images/protokol.png"
import SectionHeader from '../SectionHeader';

export default function ProtocolKesehatan() {
  return (
    <div>
      <SectionHeader title="Protokol Kesehatan" />
      <Carousel centerMode showIndicators={false} showStatus={false} showThumbs={false}>
        <img src={Protokol} />
      </Carousel>
    </div>
  )
}