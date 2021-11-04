import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import SectionHeader from "../SectionHeader";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import cn from "classnames";
import Countdown from "react-countdown";

import "./style.scss";

export default function Footer() {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#location-text", {
        type: "lines",
        linesClass: "lineChildren",
      });
      const splitParent = new SplitText("#location-text", {
        type: "lines",
        linesClass: "lineParent",
      });
      gsap.fromTo(
        split.lines,
        { y: 200 },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power2",
        }
      );
      gsap.fromTo(
        splitParent,
        { y: 200 },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          stagger: 0,
          ease: "power2",
        }
      );
    }
  }, [reveal]);

  return (
    <section className="footer footer-wrapper" data-scroll-section>
      <SectionHeader title="Location" style={{marginBottom: "10vh"}}/>
      <h1
        className={cn("location", { "is-reveal": reveal })}
        id="location-text"
        ref={ref}
      >
        <a href="https://goo.gl/maps/5o7CGZbJtYFcEurZ9">
          @Rumah Keramik F Widayanto, Depok
        </a>
      </h1>
      <iframe
        title="template google map"
        src="https://maps.google.com/maps?q=Rumah%20keramik%20f%20widyanto&t=&z=15&ie=UTF8&iwloc=&output=embed"
        style={{
          height: "100%",
          width: "75vw",
          marginTop: "5vh",
          marginBottom: "5vh",
        }}
        allowFullScreen
      ></iframe>
      <div className="footer-wrapper"></div>
    </section>
  );
}
