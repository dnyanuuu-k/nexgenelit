// import React, { useEffect } from "react";
// import gsap from "gsap";
import "../FAQ/FAQ.scss";
import { useGSAP } from "@gsap/react";
function FAQ() {
  useGSAP(() => {
    const quetions = document.querySelectorAll(".question");
    const plusIcon = document.querySelectorAll(".plusIcon");
    const answers = document.querySelectorAll(".answer");
    quetions.forEach((tabBtns, index) => {
      tabBtns.addEventListener("click", () => {
        answers.forEach((tabContent) => {
          tabContent.classList.remove("active");
          plusIcon[index].style.cssText = "transform: rotate(45deg)";
        });
        // plusIcon[index].classList.toggle("active");
        answers[index].classList.toggle("active");
      });
    });
  }, []);

  return (
    <div className="faq">
      {/* <div className="waveContainer">
        <img src="/images/wave6.svg" alt="alt-image" />
      </div> */}
      <h2 className="main-heading">FAQ's</h2>
      <div className="questions-container">
        <div className="item">
          <div className="question">
            <h4>How much does web design and development typically cost?</h4>
            <h4 className="plusIcon">+</h4>
          </div>
          <div className="answer">
            <p>
              Well, here at NexGen Elit, we like to say our prices are like a
              box of chocolates—ranging from sweet and affordable at $3k to
              luxurious and decadent at $150k. But fear not, we're all about
              making dreams come true, so we'll work with you to find the
              perfect price tag for your project. And hey, we've even got a
              minimum project size of $1.5k because, let's face it, even the
              tiniest projects deserve some love. So, let's chat and find the
              perfect fit for your budget!
            </p>
          </div>
        </div>
        <div className="item">
          <div className="question">
            <h4>How long does a project usually take?</h4>
            <h4 className="plusIcon">+</h4>
          </div>
          <div className="answer">
            <p>
              Ah, the age-old question: how long does it take to build Rome—or,
              in our case, a website? Well, buckle up because we're in it for
              the long haul. A typical web design and build project can take
              around 8-12 weeks, while our brand-into-website-and-marketing
              extravaganza might have you waiting for up to 6 months (or more!).
              But hey, good things come to those who wait, right? And don't
              worry, we'll make sure to sprinkle in some milestones and
              timelines to keep things spicy and exciting!
            </p>
          </div>
        </div>
        <div className="item">
          <div className="question">
            <h4>Can your creative agency accommodate tight deadlines?</h4>
            <h4 className="plusIcon">+</h4>
          </div>
          <div className="answer">
            <p>
              Tight deadlines? Pshh, we eat those for breakfast! Here at NexGen
              Elit, we're like the superheroes of the digital world—ready to
              swoop in and save the day, no matter how fast the deadline is
              approaching. Flexibility and focus are our middle names, and we'll
              move mountains (or at least lines of code) to make sure your
              project gets done on time. So, sit back, relax, and watch as we
              work our magic!
            </p>
          </div>
        </div>
        <div className="item">
          <div className="question">
            <h4>
              What ongoing support and maintenance do you offer post-launch?
            </h4>
            <h4 className="plusIcon">+</h4>
          </div>
          <div className="answer">
            <p>
              Ah, post-launch support—the unsung hero of the digital world!
              Think of us as your trusty sidekicks, here to keep your digital
              fortress safe and sound long after the initial excitement has worn
              off. From regular updates to performance tuning, we've got your
              back every step of the way. Because let's face it, even
              superheroes need a little TLC from time to time!
            </p>
          </div>
        </div>
        <div className="item">
          <div className="question">
            <h4>
              How do you handle revisions and feedback during the design
              process?
            </h4>
            <h4 className="plusIcon">+</h4>
          </div>
          <div className="answer">
            <p>
              Ah, feedback—the bread and butter of any creative endeavor! Here
              at NexGen Elit, we thrive on your thoughts, tweaks, and "aha"
              moments. Consider us your personal chefs, cooking up a storm in
              the digital kitchen and adding just the right amount of spice to
              every iteration. So, speak up, let your voice be heard, and
              together, we'll create something truly delicious!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
