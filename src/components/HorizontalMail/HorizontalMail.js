import React from "react";
import "../HorizontalMail/HorizontalMail.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

function HorizontalMail() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".mailHeading", {
      x: -1000,
      scrollTrigger: {
        trigger: ".hMail",
        scrub: 1,
        start: "top 80%",
        end: "bottom 10%",
      },
    });
  });
  useGSAP(() => {
    gsap.to(".rightSideBrand", {
      x: 500,
      scrollTrigger: {
        trigger: ".hMail",
        scrub: 1,
        duration: 3,
        start: "top 80%",
        end: "bottom 10%",
      },
    });
  });

  // useGSAP(() => {
  //   gsap.to(".Navbar .menu-icon .line", {
  //     background: "white",
  //     // stagger: 1,
  //     duration: 0.1,
  //     scrollTrigger: {
  //       trigger: ".hMail",
  //       start: "top 10%",
  //       end: "top 10%",
  //       scrub: 1,
  //     },
  //   });
  //   gsap.to(".Navbar .menu-icon ", {
  //     border: "3px solid white",
  //     duration: 0.1,
  //     scrollTrigger: {
  //       trigger: ".hMail",
  //       start: "top 10%",
  //       end: "top 10%",
  //       scrub: 1,
  //     },
  //   });
  // });

  return (
    <div className="hMail">
      {/* <div className="imageContainer">
        <img src="/images/wave2.svg" alt="alt-image" />
      </div> */}
      <div className="rightSideBrand">
        <h3>NexGenElit</h3>
        <div>
          <img src="/images/logo.png" width={40} alt="alt-image" />
        </div>
        <h3>NexGenElit</h3>
        <div>
          <img src="/images/logo.png" width={40} alt="alt-image" />
        </div>
        <h3>NexGenElit</h3>
        <div>
          <img src="/images/logo.png" width={40} alt="alt-image" />
        </div>
        <h3>NexGenElit</h3>
        <div>
          <img src="/images/logo.png" width={40} alt="alt-image" />
        </div>
        <h3>NexGenElit</h3>
        <div>
          <img src="/images/logo.png" width={40} alt="alt-image" />
        </div>
        <h3>NexGenElit</h3>
        <div>
          <img src="/images/logo.png" width={40} alt="alt-image" />
        </div>
        <h3>NexGenElit</h3>
        <div>
          <img src="/images/logo.png" width={40} alt="alt-image" />
        </div>
        <h3>NexGenElit</h3>
        <div>
          <img src="/images/logo.png" width={40} alt="alt-image" />
        </div>
        <h3>NexGenElit</h3>
        <div>
          <img src="/images/logo.png" width={40} alt="alt-image" />
        </div>
        <h3>NexGenElit</h3>
        <div>
          <img src="/images/logo.png" width={40} alt="alt-image" />
        </div>
      </div>
      <div className="mailHeadingContainer">
        <div className="mailHeading">
          <div>
            <img src="/images/logo.png" width={70} alt="alt-image" />
          </div>
          <h1>hello@nexgenelit.com</h1>
          <div>
            <img src="/images/logo.png" width={70} alt="alt-image" />
          </div>
          <h1>hello@nexgenelit.com</h1>
          <div>
            <img src="/images/logo.png" width={70} alt="alt-image" />
          </div>
          <h1>hello@nexgenelit.com</h1>
          <div>
            <img src="/images/logo.png" width={70} alt="alt-image" />
          </div>
          <h1>hello@nexgenelit.com</h1>
          <div>
            <img src="/images/logo.png" width={70} alt="alt-image" />
          </div>
          <h1>hello@nexgenelit.com</h1>
          <div>
            <img src="/images/logo.png" width={70} alt="alt-image" />
          </div>
        </div>
        <div className="mailHeading">
          <div>
            <img src="/images/logo.png" width={70} alt="alt-image" />
          </div>
          <h1>hello@nexgenelit.com</h1>
          <div>
            <img src="/images/logo.png" width={70} alt="alt-image" />
          </div>
          <h1>hello@nexgenelit.com</h1>
          <div>
            <img src="/images/logo.png" width={70} alt="alt-image" />
          </div>
          <h1>hello@nexgenelit.com</h1>
          <div>
            <img src="/images/logo.png" width={70} alt="alt-image" />
          </div>
          <h1>hello@nexgenelit.com</h1>
          <div>
            <img src="/images/logo.png" width={70} alt="alt-image" />
          </div>
          <h1>hello@nexgenelit.com</h1>
          <div>
            <img src="/images/logo.png" width={70} alt="alt-image" />
          </div>
        </div>
        <div className="mailHeading">
          <div>
            <img src="/images/logo.png" width={70} alt="alt-image" />
          </div>
          <h1>hello@nexgenelit.com</h1>
          <div>
            <img src="/images/logo.png" width={70} alt="alt-image" />
          </div>
          <h1>hello@nexgenelit.com</h1>
          <div>
            <img src="/images/logo.png" width={70} alt="alt-image" />
          </div>
          <h1>hello@nexgenelit.com</h1>
          <div>
            <img src="/images/logo.png" width={70} alt="alt-image" />
          </div>
          <h1>hello@nexgenelit.com</h1>
          <div>
            <img src="/images/logo.png" width={70} alt="alt-image" />
          </div>
          <h1>hello@nexgenelit.com</h1>
          <div>
            <img src="/images/logo.png" width={70} alt="alt-image" />
          </div>
        </div>
      </div>
      <div className="rightSideBrand">
        {/* <div className="marqueGroup"> */}
        <h3>NexGenElit</h3>
        <div>
          <img src="/images/logo.png" width={40} alt="alt-image" />
        </div>
        <h3>NexGenElit</h3>
        <div>
          <img src="/images/logo.png" width={40} alt="alt-image" />
        </div>
        <h3>NexGenElit</h3>
        <div>
          <img src="/images/logo.png" width={40} alt="alt-image" />
        </div>
        <h3>NexGenElit</h3>
        <div>
          <img src="/images/logo.png" width={40} alt="alt-image" />
        </div>
        <h3>NexGenElit</h3>
        <div>
          <img src="/images/logo.png" width={40} alt="alt-image" />
        </div>
        <h3>NexGenElit</h3>
        <div>
          <img src="/images/logo.png" width={40} alt="alt-image" />
        </div>
        <h3>NexGenElit</h3>
        <div>
          <img src="/images/logo.png" width={40} alt="alt-image" />
        </div>
        <h3>NexGenElit</h3>
        <div>
          <img src="/images/logo.png" width={40} alt="alt-image" />
        </div>
        <h3>NexGenElit</h3>
        <div>
          <img src="/images/logo.png" width={40} alt="alt-image" />
        </div>
        <h3>NexGenElit</h3>
        <div>
          <img src="/images/logo.png" width={40} alt="alt-image" />
        </div>
        <h3>NexGenElit</h3>
        <div>
          <img src="/images/logo.png" width={40} alt="alt-image" />
        </div>
        <h3>NexGenElit</h3>
        <div>
          <img src="/images/logo.png" width={40} alt="alt-image" />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default HorizontalMail;
