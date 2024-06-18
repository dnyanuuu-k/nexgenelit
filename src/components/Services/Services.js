import React from "react";
import "../Services/Services.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";

const servicesData = [
  {
    title: ["WEB DESIGN &", "DEVELOPMENT"],
    buttons: ["Creative Development", "Web Apps", "E - Commerce", "WordPress"],
    description:
      "Web Development: We don't just build websites; we sculpt digital masterpieces that captivate, engage, and convert. Say goodbye to boring templates and hello to bespoke brilliance.",
    videoSrc: "/videos/webDev.mp4",
    linkText: "Book Now",
  },
  {
    title: ["APP DESIGN &", "DEVELOPMENT"],
    buttons: ["Android App", "iOS App", "E - Commerce", "Business Solution"],
    description:
      "App Development: Because who doesn't want their brand in everyone's pocket? Whether you're dreaming of the next big thing or need to streamline your business operations, we've got the service to make it happen.",
    videoSrc: "/videos/moble.mp4",
    linkText: "Book Now",
  },
  {
    title: ["DIGITAL", "MARKETING"],
    buttons: ["Google Ads", "Email Marketing", "Facebook Marketing"],
    description:
      "Picture this: your online presence as irresistible as cat videos on a Monday morning. Sound purr-fect? That's what we do best! From catchy campaigns to social media sorcery, we'll make sure your brand is the talk of the digital town. Get ready to watch your online presence go viral!",
    videoSrc: "/videos/digital.mp4",
    linkText: "Book Now",
  },
  {
    title: ["SOCIAL MEDIA", "MARKETING"],
    buttons: ["Creative Development", "Web Apps", "E - Commerce", "WordPress"],
    description:
      "Web Development: We don't just build websites; we sculpt digital masterpieces that captivate, engage, and convert. Say goodbye to boring templates and hello to bespoke brilliance.",
    videoSrc: "/videos/social.mp4",
    linkText: "Book Now",
  },
];

function Services() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if (window.innerWidth >= 480) {
      const array = gsap.utils.toArray(".services-item ,.headings");
      array.forEach((element) => {
        gsap.to(element, {
          scale: 0.95,
          scrollTrigger: {
            trigger: element,
            start: "top 12%",
            endTrigger: ".services-content",
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            scrub: 1,
          },
        });
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
      },
    });
  });

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
          {servicesData.map((service, index) => (
            <div className="services-item" key={index}>
              <div className="left-side">
                {service.title.map((line, idx) => (
                  <h3 className="third-heading" key={idx}>
                    {line}
                  </h3>
                ))}
                <div className="buttons">
                  {service.buttons.map((button, idx) => (
                    <button className="btn2" key={idx}>
                      {button}
                    </button>
                  ))}
                </div>
                <p>{service.description}</p>
                <Link to="/start-your-project">
                  <div className="explore-more">
                    <button className="learn-more">
                      <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                      </span>
                      <span className="button-text">{service.linkText}</span>
                    </button>
                  </div>
                </Link>
              </div>
              <div className="right-side">
                <video src={service.videoSrc} autoPlay loop muted />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
