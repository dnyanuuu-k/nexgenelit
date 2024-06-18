import React from "react";
import { useEffect } from "react";
import "../Technologies/Technologies.scss";
import {
  FaAngular,
  FaAppStoreIos,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaNode,
  FaReact,
  FaSwift,
  FaVuejs,
} from "react-icons/fa";
import { IoLogoAndroid, IoLogoJavascript } from "react-icons/io";
import { SiFlutter, SiTypescript } from "react-icons/si";
import { DiPhp } from "react-icons/di";
import { TbBrandKotlin } from "react-icons/tb";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

function Technologies() {
  useEffect(() => {
    const technologyTabBtns = document.querySelectorAll(".tab_btn");

    const technologyContets = document.querySelectorAll(".content");
    technologyTabBtns.forEach((tabBtns, index) => {
      tabBtns.addEventListener("click", () => {
        technologyTabBtns.forEach((tabBtn) => {
          tabBtn.classList.remove("active");
        });
        tabBtns.classList.add("active");

        technologyContets.forEach((tabContent) => {
          tabContent.classList.remove("active");
        });
        technologyContets[index].classList.add("active");
      });
    });
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".mainHeadings", {
      xPercent: 130,
      stagger: 1,
      delay: 0.5,
      duration: 2.5,
      opacity: 1,
      scrollTrigger: {
        trigger: ".technologies",
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
        // markers: true,
      },
    });
  });
  useGSAP(() => {
    gsap.from(".img-contents img", {
      xPercent: 130,
      stagger: 1,
      delay: 0.5,
      duration: 2.5,
      opacity: 1,
      rotate: 45,
      scrollTrigger: {
        trigger: ".technologies",
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
        // markers: true,
      },
    });
  });

  return (
    <div>
      <div className="technologies">
        <div className="heading">
          <div className="mainHeadingsContainer">
            <h2 className="mainHeadings">Technologies</h2>
            <h2 className="mainHeadings secondary-heading">We Work With</h2>
          </div>
          <div className="img-contents">
            <img src="/images/arrow-white.svg" alt="alt-image" />
          </div>
        </div>
        {/* <h4 className="fourth-heading">Technologies We Work With</h4> */}
        <div className="technologies-content">
          <div className="tab_box">
            <button className="tab_btn active">
              <p>Mobile</p>
            </button>
            <button className="tab_btn">
              <p>Frontend</p>
            </button>
            <button className="tab_btn">
              <p>Backend</p>
            </button>
          </div>
          <div className="content_box">
            {/* Android  */}
            <div className="content active">
              <div className="content-item">
                <FaAppStoreIos />
                <span>IOS</span>
              </div>
              <div className="content-item">
                <IoLogoAndroid />
                <span>Android</span>
              </div>
              <div className="content-item">
                <FaReact />
                <span>React Native</span>
              </div>
              <div className="content-item">
                <SiFlutter />
                <span>Flutter</span>
              </div>
              <div className="content-item">
                <FaSwift />
                <span>Swift</span>
              </div>
              <div className="content-item">
                <TbBrandKotlin />
                <span>Kotlin</span>
              </div>
            </div>

            {/* Frontend  */}

            <div className="content">
              <div className="content-item">
                <FaAngular />
                <span>Angular</span>
              </div>
              <div className="content-item">
                <FaReact />
                <span>React JS</span>
              </div>
              <div className="content-item">
                <SiTypescript />
                <span>Type Script</span>
              </div>
              <div className="content-item">
                <FaVuejs />
                <span>Vue JS</span>
              </div>
              <div className="content-item">
                <FaHtml5 />
                <span>HTML 5</span>
              </div>
              <div className="content-item">
                <FaCss3Alt />
                <span>CSS 3</span>
              </div>
              <div className="content-item">
                <IoLogoJavascript />
                <span>JS</span>
              </div>
            </div>
            <div className="content">
              <div className="content-item">
                <DiPhp />
                <span>PHP</span>
              </div>
              <div className="content-item">
                <FaJava />
                <span>JAVA</span>
              </div>
              <div className="content-item">
                <FaNode />
                <span>Node</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
