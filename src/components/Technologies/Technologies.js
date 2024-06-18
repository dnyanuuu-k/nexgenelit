import React, { useEffect } from "react";
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

const technologyTabs = [
  {
    category: "Mobile",
    items: [
      { icon: FaAppStoreIos, name: "iOS" },
      { icon: IoLogoAndroid, name: "Android" },
      { icon: FaReact, name: "React Native" },
      { icon: SiFlutter, name: "Flutter" },
      { icon: FaSwift, name: "Swift" },
      { icon: TbBrandKotlin, name: "Kotlin" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { icon: FaAngular, name: "Angular" },
      { icon: FaReact, name: "React JS" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: FaVuejs, name: "Vue JS" },
      { icon: FaHtml5, name: "HTML 5" },
      { icon: FaCss3Alt, name: "CSS 3" },
      { icon: IoLogoJavascript, name: "JavaScript" },
    ],
  },
  {
    category: "Backend",
    items: [
      { icon: DiPhp, name: "PHP" },
      { icon: FaJava, name: "Java" },
      { icon: FaNode, name: "Node" },
    ],
  },
];

function Technologies() {
  useEffect(() => {
    const technologyTabBtns = document.querySelectorAll(".tab_btn");
    const technologyContents = document.querySelectorAll(".content");

    technologyTabBtns.forEach((tabBtn, index) => {
      tabBtn.addEventListener("click", () => {
        technologyTabBtns.forEach((btn) => btn.classList.remove("active"));
        tabBtn.classList.add("active");

        technologyContents.forEach((content) =>
          content.classList.remove("active")
        );
        technologyContents[index].classList.add("active");
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
        <div className="technologies-content">
          <div className="tab_box">
            {technologyTabs.map((tab, index) => (
              <button
                className={`tab_btn ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <p>{tab.category}</p>
              </button>
            ))}
          </div>
          <div className="content_box">
            {technologyTabs.map((tab, index) => (
              <div
                className={`content ${index === 0 ? "active" : ""}`}
                key={index}
              >
                {tab.items.map((item, idx) => (
                  <div className="content-item" key={idx}>
                    <item.icon />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
