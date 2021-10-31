import React from "react";
import Roy from '../../assets/Photos/roy.png'
import Nesya from '../../assets/Photos/n.png'
import "./style.scss";

export default function Couples() {


  return (
    <section className="couple-section"  data-scroll-section>
      <div className="couple-row-layout">
        <img src={Roy} data-scroll/>
        <h6>Roy Arief F</h6>

      </div>
      <div className="couple-row-layout">
        <img src={Nesya} data-scroll/>
        <h6>Banesya Fatiha</h6>
      </div>
    </section>
  );
}