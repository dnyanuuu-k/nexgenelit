import React, { useEffect } from "react";
import "../WhyNexGenElit/WhyNexGenElit.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function WhyNexGenElit() {
  useEffect(() => {
    // const animationImg = document.querySelectorAll(".item .img-container");
    const animationItems = document.querySelectorAll(".imgAnimations .item");
    animationItems.forEach((item, index) => {
      item.addEventListener("mousemove", () => {
        animationItems.forEach((item) => {
          item.classList.remove("active");
        });
        item.classList.add("active");
      });
    });
  }, []);

  useGSAP(() => {
    const animationImg = document.querySelectorAll(".item .img-container");
    const animationItem = document.querySelectorAll(".imgAnimations .item");
    animationItem.forEach((items, index) => {
      items.addEventListener("mousemove", (dets) => {
        let clientX = dets.x;
        let clientY = dets.y / 2;
        if (window.innerWidth >= 480) {
          clientY = dets.y / 2;
        } else {
          clientY = dets.y;
        }
        animationImg.forEach((img) => {
          gsap.to(animationImg[index], {
            x: clientX,
            y: clientY,
            opacity: 1,
            duration: 2.5,
            background: "#f3e9dd",
            scale: 1.25,
            ease: "elastic.out(1,0.3)",
          });

          gsap.to(img, {
            opacity: 0,
          });

          // gsap.from(itemContainer, {
          //   background: "none",
          //   delay: 2,
          // });

          // gsap.to(itemContainer[index], {
          //   background: "#f3e9dd",
          // });
        });
        // itemContainer[index].style.backgroundColor = "#f3e9dd";
      });
    });
  });

  return (
    <div className="whyNex">
      {/* <img src="/images/collab.svg" alt="" />
      <img src="/images/creativity.svg" alt="" />
      <img src="/images/innovation.svg" alt="" />
      <img src="/images/passion.svg" alt="" /> */}
      <div className="headings">
        <h4 className="first-heading">
          Why <span>NexGen Elit ?</span>
        </h4>
        <h4 className="second-heading">
          <span>Because</span> We're Not Your Average Digital Agency Why Settle
          for Ordinary When You Can Have <span>Extraordinary?</span>
        </h4>
      </div>
      <div className="imgAnimations">
        <div className="itemContainer">
          <div className="item">
            <div className="sub-headings">
              <h5>01</h5>
              <h2>Creativity</h2>
            </div>
            <div className="img-container">
              <img src="/images/creativity.svg" alt="" />
            </div>
            <p className="heading-para">
              We don't just think outside the box; we dance on its edges.
              Prepare for a journey where the only limit is your imagination.
            </p>
          </div>
        </div>
        <div className="itemContainer">
          <div className="item">
            <div className="sub-headings">
              <h5>02</h5>
              <h2>Innovation</h2>
            </div>
            <div className="img-container">
              <img src="/images/innovation.svg" alt="" />
            </div>
            <p>
              We're not here to follow trends; we're here to set them. Say hello
              to cutting-edge solutions that'll have your competitors green with
              envy.
            </p>
          </div>
        </div>
        <div className="itemContainer">
          <div className="item">
            <div className="sub-headings">
              <h5>03</h5>
              <h2>Passion</h2>
            </div>
            <div className="img-container">
              <img src="/images/passion.svg" alt="" />
            </div>
            <p>
              We eat, sleep, and breathe digital. Our team's passion is
              contagious – consider yourself warned
            </p>
          </div>
        </div>
        <div className="itemContainer">
          <div className="item">
            <div className="sub-headings">
              <h5>04</h5>
              <h2>Collaboration</h2>
            </div>
            <div className="img-container">
              <img src="/images/collab.svg" alt="" />
            </div>
            <p>
              Your vision, our expertise – let's make magic together. We're not
              just service providers; we're your partners in success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyNexGenElit;
