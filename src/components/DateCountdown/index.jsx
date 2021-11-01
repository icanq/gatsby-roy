import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import SectionHeader from "../SectionHeader";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import cn from "classnames";
import Countdown from "react-countdown";
import {CountdownCircleTimer} from "react-countdown-circle-timer"
import "./style.scss";
import Timer from './timer'

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
    <section className="datecountdown" data-scroll-section>
      <SectionHeader title="Save the date" />
      <h1
        className={cn("location", { "is-reveal": reveal })}
        id="location-text"
        ref={ref}
      >
        27 November 2021
      </h1>

      <h1 style={{marginTop: "5vh", marginBottom: "5vh"}}>
        {/* <Countdown date={new Date("2021-11-27T10:05:29.896Z")} /> */}
        <Timer />
      </h1>
      
      <div style={{ display: "flex", justifyContent: "center", "marginTop": "3vh" }}>
        <div style={{marginRight: "4vw", marginLeft: "1vw"}}>
          <span
            style={{"fontSize": "2vh"}}
            className={cn("location", { "is-reveal": reveal })}
            id="location-text"
            ref={ref}
          >
            Akad
          </span>
          <h1
            className={cn("location", { "is-reveal": reveal })}
            id="location-text"
            ref={ref}
          >
            9 - 10 WIB
          </h1>
        </div>
        <div style={{marginRight: "1vw", marginLeft: "4vw"}}>
          <span
            style={{"fontSize": "2vh"}}
            className={cn("location", { "is-reveal": reveal })}
            id="location-text"
            ref={ref}
          >
            Resepsi
          </span>
          <h1
            className={cn("location", { "is-reveal": reveal })}
            id="location-text"
            ref={ref}
          >
            10 - 14 WIB
          </h1>
        </div>
      </div>
    </section>
  );
}
