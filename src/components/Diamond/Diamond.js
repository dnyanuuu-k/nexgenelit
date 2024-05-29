import React from "react";
import "../Diamond/Diamond.scss";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
function Diamond() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".diamondHeadingContainer", {
      x: -600,
      scrollTrigger: {
        trigger: ".diamond",
        scrub: 1,
        start: "top 80%",
        end: "bottom 10%",
      },
    });
  });
  return (
    <div className="diamond">
      <div className="diamondVideo">
        <img src="/videos/diamond.gif" autoPlay loop muted></img>
      </div>
      <div className="diamondContent">
        <div>
          <h2>We Work For Your Dreams</h2>
        </div>
        <div className="diamondHeadingContainer">
          <div className="diamondHeading">
            <h1>NexGenElit</h1>
            <div>
              <img src="/images/logo.png" width={150} alt="" />
            </div>
            <h1>NexGenElit</h1>
            <div>
              <img src="/images/logo.png" width={150} alt="" />
            </div>
            <h1>NexGenElit</h1>
            <div>
              <img src="/images/logo.png" width={150} alt="" />
            </div>
            <h1>NexGenElit</h1>
            <div>
              <img src="/images/logo.png" width={150} alt="" />
            </div>
          </div>
        </div>
        <p>
          Why Choose Us? <br /> Because We're the Unicorn in a Sea of Donkeys!
        </p>
      </div>
    </div>
  );
}
export default Diamond;
