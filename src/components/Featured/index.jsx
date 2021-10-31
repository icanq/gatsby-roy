import React from "react";
import photos from "../../data";
import pic1 from "../../assets/Photos/0.jpeg";
import pic2 from "../../assets/Photos/2.jpeg";
import "./style.scss";

export default function Featured() {
  return (
    <section className="featured-section" data-scroll-section>
      <div className="featured-column-layout">
        <img src={pic1} data-scroll />
      </div>
    </section>
  );
}
