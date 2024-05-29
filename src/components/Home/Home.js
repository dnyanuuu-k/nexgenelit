import "../Home/Home.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Services from "../Services/Services";
import Technologies from "../Technologies/Technologies";
import WhyNexGenElit from "../WhyNexGenElit/WhyNexGenElit";
import FAQ from "../FAQ/FAQ";
import Diamond from "../Diamond/Diamond";
import { Link } from "react-router-dom";
import HorizontalMail from "../HorizontalMail/HorizontalMail";
import Spline from "@splinetool/react-spline";
// import { SplitText } from "gsap-trial/SplitText";
// gsap.registerPlugin(SplitText);
// let headingSplitText = new SplitText(".split", { type: "chars" });
// let char = headingSplitText.chars;
// console.log(char);

function Home() {
  // const cursor = document.querySelectorAll(".movingCursor");
  // const allHeadings = document.querySelectorAll(".heading");
  // allHeadings.forEach((heading) => {
  //   heading.addEventListener("mousemove", () => {
  //     cursor.className.add("grov");
  //   });
  //   heading.addEventListener("mouseleave", () => {
  //     cursor.className.remove("grov");
  //   });
  // });
  // useGSAP(() => {
  //   document.querySelector(".main").addEventListener("mousemove", (dets) => {
  //     gsap.to(cursor, {
  //       x: dets.x,
  //       y: dets.y,
  //       duration: 2.5,
  //       ease: "elastic.out(1,0.3)",
  //     });
  //   });
  // });

  useGSAP(() => {
    gsap.from(".heading , .para", {
      yPercent: 130,
      stagger: 0.1,
      delay: 0.5,
    });
  });
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".startProject", {
      yPercent: 10,
      stagger: 1,
      delay: 0.5,
      opacity: 1,
      scrollTrigger: {
        trigger: ".Home",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
      },
    });
  });

  return (
    <div className="Home">
      {/* <div className="movingCursor"></div> */}
      <div className="bgVideo">
        {/* <video src="/videos/bg4.mp4" muted loop autoPlay></video> */}
        <Spline scene="https://prod.spline.design/4NLtR8ylsV2hSNkb/scene.splinecode" />
      </div>

      <div className="main">
        <div className="heading-container first-heading">
          <h1 className="heading">The</h1>
        </div>
        <div className="heading-container seconde-heading heading">
          <h1 className="heading">Heaven</h1>
          <span className="heading">of</span>
        </div>
        <div className="third-heading">
          <div className="heading-container">
            <h1 className="heading">Creativity</h1>
          </div>
        </div>
        <p className="para">
          Do you believe in love at first site? Because our web development
          service are sure to make your heart skip a beat.
        </p>
      </div>
      <div className="allContent">
        <div>
          <Link className="startProject" to="/start-your-project">
            <div className="explore-more">
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Start Your Project</span>
              </button>
            </div>
          </Link>
        </div>
        <Services />
        <Technologies />
        <WhyNexGenElit />
        <HorizontalMail />
        <FAQ />
        <Diamond />
      </div>
    </div>
  );
}

export default Home;
