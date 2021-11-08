import React from "react";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/Photos/carousel/1.jpeg";
import img2 from "../../assets/Photos/carousel/2.jpeg";
import img3 from "../../assets/Photos/carousel/3.jpeg";
import img18 from "../../assets/Photos/converted/Large/18.jpeg";
import img19 from "../../assets/Photos/converted/Large/19.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ImageCarousel1() {
  return (
    <div className="backgroundkuning">
      <Carousel
        className="backgroundkuning"
        showArrows={false}
        infiniteLoop
        centerMode
        autoPlay
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
      </Carousel>
    </div>
  );
}

export function ImageCarousel2() {
  return (
    <div style={{ marginBottom: "5vh" }}>
      <Carousel
        autoPlay
        infiniteLoop
        centerMode
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img src={img18} />
        </div>
        <div>
          <img src={img19} />
        </div>
        <div>
          <img src={img18} />
        </div>
        <div>
          <img src={img19} />
        </div>
        <div>
          <img src={img18} />
        </div>
        <div>
          <img src={img19} />
        </div>
        <div>
          <img src={img18} />
        </div>
        <div>
          <img src={img19} />
        </div>
      </Carousel>
    </div>
  );
}
