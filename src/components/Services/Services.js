import React from "react";
import "../Services/Services.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";

function Services() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if (window.innerWidth >= 480) {
      const array = gsap.utils.toArray(".services-item ,.headings");
      array.forEach((element) => {
        gsap.to(
          element,
          {
            scale: 0.95,
            // opacity: 0,
            scrollTrigger: {
              trigger: element,
              start: "top 12%",
              endTrigger: ".services-content",
              end: "bottom bottom",
              pin: true,
              pinSpacing: false,
              scrub: 1,
            },
          },
          { array }
        );
      });
    }
  });

  useGSAP(() => {
    gsap.from(".mainHeading", {
      xPercent: 130,
      stagger: 1,
      delay: 0.5,
      duration: 2.5,
      opacity: 1,
      scrollTrigger: {
        trigger: ".headings",
        start: "top 90%",
        end: "bottom 90%",
        scrub: 1,
        // markers: true,
      },
    });
  });
  useGSAP(() => {
    gsap.from(".img-content img", {
      xPercent: 130,
      stagger: 1,
      delay: 0.5,
      duration: 2.5,
      opacity: 1,
      rotate: 45,
      scrollTrigger: {
        trigger: ".headings",
        start: "top 90%",
        end: "bottom 90%",
        scrub: 1,
        // markers: true,
      },
    });
  });
  useGSAP(() => {
    gsap.from(".img-content h5", {
      xPercent: 130,
      stagger: 1,
      delay: 0.5,
      duration: 2.5,
      opacity: 1,
      scrollTrigger: {
        trigger: ".headings",
        start: "top 90%",
        end: "bottom 90%",
        scrub: 1,
        // markers: true,
      },
    });
  });
  // useGSAP(() => {
  //   gsap.to(".services", {
  //     backgroundColor: "transparent",
  //     color: "black",
  //     stagger: 1,
  //     duration: 2.5,
  //     opacity: 1,
  //     scrollTrigger: {
  //       trigger: ".services-content",
  //       start: "top 90%",
  //       end: "top 100%",
  //       scrub: 1,
  //       // markers: true,
  //     },
  //   });
  // });

  // function changeLogoUrl() {
  //   const url = document.querySelector(".Navbar .logo img").attributes.src;
  //   const [logoUrl, setLogoUrl] = useState(url);
  //   setLogoUrl("./images/logo-b.png");
  // }

  // useGSAP(() => {
  //   gsap.to(".Navbar .menu-icon .line", {
  //     background: "black",
  //     stagger: 1,
  //     scrollTrigger: {
  //       trigger: ".services-content",
  //       start: "top 10%",
  //       end: "top 10%",
  //       scrub: 1,
  //     },
  //   });
  //   gsap.to(".Navbar .menu-icon ", {
  //     border: "3px solid black",
  //     scrollTrigger: {
  //       trigger: ".services-content",
  //       start: "top 10%",
  //       end: "top 10%",
  //       scrub: 1,
  //     },
  //   });
  // });

  return (
    <div id="services">
      <div className="services">
        <div className="headings">
          <div className="mainHeadingsContainer">
            <h2 className="mainHeading">OUR</h2>
            <h2 className="mainHeading secondary-heading">SERVICES</h2>
          </div>
          <div className="img-content">
            <img src="/images/arrow-white.svg" alt="alt-image" />
            <h5>Where Dreams Meet Reality</h5>
          </div>
        </div>

        <div className="services-content">
          {/* Web Development  */}

          <div className="services-item">
            <div className="left-side">
              <h3 className="third-heading">WEB DESIGN &</h3>
              <h3 className="third-heading">DEVELOPMENT</h3>
              <div className="buttons">
                <button className="btn2">Creative Development</button>
                <button className="btn2">Web Apps</button>
                <button className="btn2">E - Commerce</button>
                <button className="btn2">Wordpress</button>
              </div>
              <p>
                Web Development: We don't just build websites; we sculpt digital
                masterpieces that captivate, engage, and convert. Say goodbye to
                boring templates and hello to bespoke brilliance.
              </p>
              <Link to="/start-your-project">
                <div className="explore-more">
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Book Now</span>
                  </button>
                </div>
              </Link>
            </div>
            <div className="right-side">
              <video src="/videos/webDev.mp4" autoPlay loop muted />
            </div>
          </div>

          {/* App Development  */}

          <div className="services-item">
            <div className="left-side">
              <h3 className="third-heading">APP DESIGN &</h3>
              <h3 className="third-heading">DEVELOPMENT</h3>
              <div className="buttons">
                <button className="btn2">Android App</button>
                <button className="btn2">ISO App</button>
                <button className="btn2">E - Commerce</button>
                <button className="btn2">Buisness Solution</button>
              </div>
              <p>
                App Development: Because who doesn't want their brand in
                everyone's pocket? Whether you're dreaming of the next big thing
                or need to streamline your business operations, we've got the
                service to make it happen.
              </p>
              <Link to="/start-your-project">
                <div className="explore-more">
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Book Now</span>
                  </button>
                </div>
              </Link>
            </div>
            <div className="right-side">
              <video src="/videos/moble.mp4" autoPlay loop muted />
            </div>
          </div>

          {/* Digital Marketing  */}

          <div className="services-item">
            <div className="left-side">
              <h3 className="third-heading">DIGITAL</h3>
              <h3 className="third-heading">MARKETING</h3>
              <div className="buttons">
                <button className="btn2">Google Ads</button>
                <button className="btn2">Email Marketing</button>
                <button className="btn2">Facebook Marketing</button>
              </div>
              <p>
                Picture this: your online presence as irresistible as cat videos
                on a Monday morning. Sound purr-fect? That's what we do best!
                From catchy campaigns to social media sorcery, we'll make sure
                your brand is the talk of the digital town. Get ready to watch
                your online presence go viral!
              </p>
              <Link to="/start-your-project">
                <div className="explore-more">
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Book Now</span>
                  </button>
                </div>
              </Link>
            </div>
            <div className="right-side">
              <video src="/videos/digital.mp4" autoPlay loop muted />
            </div>
          </div>

          {/* Social Media Marketing  */}
          <div className="services-item">
            <div className="left-side">
              <h3 className="third-heading">SOCIAL MEDIA</h3>
              <h3 className="third-heading">MARKETING</h3>
              <div className="buttons">
                <button className="btn2">Creative Development</button>
                <button className="btn2">Web Apps</button>
                <button className="btn2">E - Commerce</button>
                <button className="btn2">Wordpress</button>
              </div>
              <p>
                Web Development: We don't just build websites; we sculpt digital
                masterpieces that captivate, engage, and convert. Say goodbye to
                boring templates and hello to bespoke brilliance.
              </p>
              <Link to="/start-your-project">
                <div className="explore-more">
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Book Now</span>
                  </button>
                </div>
              </Link>
            </div>
            <div className="right-side">
              <video src="/videos/social.mp4" autoPlay loop muted />
            </div>
          </div>
        </div>

        {/* Technologies  */}
      </div>
    </div>
  );
}

export default Services;
