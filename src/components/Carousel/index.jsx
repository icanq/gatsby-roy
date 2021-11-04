import React from "react";
import { Carousel} from "react-responsive-carousel";
import img1 from "../../assets/Photos/carousel/1.jpeg"
import img2 from "../../assets/Photos/carousel/2.jpeg"
import img3 from "../../assets/Photos/carousel/3.jpeg"
import img6 from "../../assets/Photos/converted/Large/6.jpeg"
import img7 from "../../assets/Photos/converted/Large/7.jpeg"
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function ImageCarousel1() {
  return (
    <div className="backgroundkuning">
      <Carousel className="backgroundkuning" showArrows={false} infiniteLoop centerMode autoPlay showIndicators={false} showStatus={false} showThumbs={false}>
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
        </div><div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div><div>
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
    <div style={{"marginBottom": "5vh"}}>
      <Carousel infiniteLoop centerMode showIndicators={false} showStatus={false} showThumbs={false}>
        <div>
          <img src={img6} />
        </div>
        <div>
          <img src={img7} />
        </div>
      </Carousel>
    </div>
  );
}