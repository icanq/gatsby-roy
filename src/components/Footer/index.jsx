import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import SectionHeader from "../SectionHeader";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import cn from "classnames";
import Countdown from 'react-countdown'

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
          ease: "power2"
        }
      )
    }
  }, [reveal]);

  return (
    <section className="footer" data-scroll-section>
      <SectionHeader title="Save the date" />
      <h1>
        <Countdown className="location" date={new Date("2021-11-27T10:05:29.896Z")} />
      </h1>
      <h1
        className={cn("location", { "is-reveal": reveal })}
        id="location-text"
        ref={ref}
      >
        <a href="https://goo.gl/maps/5o7CGZbJtYFcEurZ9">
        @Rumah Keramik F Widyanto
        </a>
      </h1>
      <h1
        className={cn("location", { "is-reveal": reveal })}
        id="location-text"
        ref={ref}
      >
        27 November 2021
      </h1>
      <h1
        className={cn("location", { "is-reveal": reveal })}
        id="location-text"
        ref={ref}
      >
        9 - 11 WIB
      </h1>
    </section>
  );
}
