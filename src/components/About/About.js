import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import "../About/About.scss";
import { Link } from "react-router-dom";

function About() {
  // Refs for the elements we want to animate
  const descriptionRefs = useRef([]);
  const thickTextRef = useRef(null); // Ref for the thick-text span

  // Refs for the title elements
  const titleH1Ref = useRef(null);
  const titlePRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animation for each description span
    descriptionRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.5 + index * 0.5,
        }
      );
    });

    // GSAP animation for increasing letter spacing on scroll
    // ScrollTrigger.create({
    //   trigger: thickTextRef.current,
    //   start: "top 70%", // Start when the top of the thick-text span reaches the top of the viewport
    //   end: "bottom bottom", // End when the bottom of the thick-text span reaches the bottom of the viewport
    //   onUpdate: (self) => {
    //     gsap.to(thickTextRef.current, {
    //       letterSpacing: 20 * self.progress, // Increase letter spacing based on scroll progress
    //       ease: "linear", // Set easing to "none" for sensitive response
    //     });
    //   },
    // });

    // GSAP animation for the h1 element (right to left)
    gsap.fromTo(
      titleH1Ref.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 200,
        ease: "linear",
        scrollTrigger: {
          trigger: titleH1Ref.current,
          start: "top 80%", // Adjust the start point as needed
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    // GSAP animation for the p element (left to right)
    gsap.fromTo(
      titlePRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 200,
        ease: "linear",
        scrollTrigger: {
          trigger: titlePRef.current,
          start: "top 80%", // Adjust the start point as needed
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    // GSAP animation for the h1 element (drop from top)

    // GSAP animation for the p element (fade in and scale)
    gsap.fromTo(
      ".content-div p , .content-div .subtitle",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "linear",
        scrollTrigger: {
          trigger: ".content-div",
          start: "top 90%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );

    // GSAP animation for rotating elements
    gsap.fromTo(
      [".one"], // selecting elements with class names one, two, and three
      { rotation: 10 }, // initial rotation
      {
        rotation: -7, // desired rotation angle
        transformOrigin: "initial", // set the transform origin to initial
        duration: 20, // animation duration
        ease: "none", // no easing for a more linear effect
        scrollTrigger: {
          trigger: ".one", // adjust trigger point as needed
          start: "top 90%", // adjust start point as needed
          end: "bottom 20%", // adjust end point as needed
          scrub: true, // smooth animation while scrolling
        },
      }
    );

    gsap.fromTo(
      [".two"], // selecting elements with class names one, two, and three
      { rotation: -5 }, // initial rotation
      {
        rotation: 1, // desired rotation angle
        transformOrigin: "initial", // set the transform origin to initial
        duration: 20, // animation duration
        ease: "none", // no easing for a more linear effect
        scrollTrigger: {
          trigger: ".two", // adjust trigger point as needed
          start: "top 90%", // adjust start point as needed
          end: "bottom 20%", // adjust end point as needed
          scrub: true, // smooth animation while scrolling
        },
      }
    );

    gsap.fromTo(
      [".three"],
      { rotation: 5 },
      {
        rotation: -2,
        transformOrigin: "initial",
        duration: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".three",
          start: "top 90%",
          end: "bottom 30%",
          scrub: true,
        },
      }
    );

    // New GSAP animation for the desc-one element

    // New GSAP animation for the desc-two element
    gsap.fromTo(
      ".description-div",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".desc-two",
          start: "top 90%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );

    // GSAP animation for the left-card element
    gsap.fromTo(
      ".left-card",
      { x: -200, rotation: -10, opacity: 0 },
      {
        x: 0,
        rotation: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".left-div",
          start: "top 90%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );

    // GSAP animation for the right-card element
    gsap.fromTo(
      ".right-card",
      { x: 200, rotation: 10, opacity: 0 },
      {
        x: 0,
        rotation: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".right-div",
          start: "top 90%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="about">
      <div className="parent">
        <h2>About Us</h2>
        <h1>NexGen Elit</h1>
        <div className="left-content"></div>
        <div className="right-content">
          <div className="description">
            <span
              className="content"
              ref={(el) => (descriptionRefs.current[0] = el)}
            >
              Welcome, dreamers, creators, and visionaries, to the vibrant
              world, At NexGen Elit, we're not just tech fans. We're like dream
              builders online, making your ideas real. Think of us as the
              creators of amazing digital stuff that looks perfect.
            </span>
            <span
              className="content"
              ref={(el) => (descriptionRefs.current[1] = el)}
            >
              Whether you're starting a new business, growing a small one, or
              already a big shot, we're here to help you do great things in the
              digital world.
            </span>
            <span
              className="content"
              ref={(el) => (descriptionRefs.current[2] = el)}
            >
              Well, well, well, look who still stumbled upon the digital
              playground of NexGen Elit! Pull up a virtual chair and get ready
              for a journey into the whimsical world of web development, app
              creation, and all things digital wizardry.
            </span>
          </div>
        </div>
      </div>
      <div className="who">
        <div className="title">
          <h2 ref={titleH1Ref}>Who are we?</h2>
          <p ref={titlePRef}>Ah, the million-dollar question</p>
        </div>
        <div className="flexdiv">
          <div className="img-div">
            <img src="./images/about/who2.png" alt="alt-image" />
          </div>
          <div className="content-div">
            <h3 className="subtitle">
              Who are the mysterious minds behind
              <br />
              NexGen Elit?
            </h3>
            <p>
              Well, we're a motley crew of digital dreamers, united by our
              passion for innovation and our love for all things tech. From the
              coding wizards to the marketing mavens, each member of our team
              brings their own unique flair to the table, creating a symphony of
              creativity that's guaranteed to leave you spellbound.
            </p>
          </div>
        </div>
      </div>

      <div className="why">
        <div className="content">
          <div className="one">Why NexGen Elit?</div>
          <div className="two">
            Because We're Not Your Average Digital Agency
          </div>
          <div className="three">
            WHY SETTLE FOR ORDINARY WHEN YOU CAN HAVE EXTRAORDINARY?
          </div>
        </div>
        <p className="description">
          You might be wondering, "Why choose NexGen Elit?" Well, aside from our
          undeniable charm and irresistible wit (did we mention we're pretty
          funny?), we're also pretty darn good at what we do. With a track
          record of success and a portfolio that's hotter than a freshly brewed
          cup of coffee, we're the trusted experts you can rely on to deliver
          results that exceed your wildest expectations.
        </p>
      </div>

      <div className="what">
        <div className="left-div">
          <div className="left-card">
            <div className="imgDiv">
              <img src="./images/about/left1.png" alt="alt-image" />
            </div>
            <div className="card-div">
              <h3>
                What's Cooking in the <br />
                Digital Kitchen of <br />
                NexGen Elit?
              </h3>
              <p>
                Now, you might be wondering, "What exactly does NexGen Elit do?"
                Well, buckle up, because we're about to blow your digital socks
                off! From crafting websites that make you go "wow" to developing
                apps that make you go "whoa," we're here to turn your wildest
                digital dreams into reality. Whether you're a startup looking to
                make a splash or a seasoned entrepreneur ready to take the next
                leap, NexGen Elit is your ultimate partner in digital success.
              </p>
            </div>
          </div>
          {/* <div className="left-img"> <img src={contact} alt="alt-image" /> </div> */}
        </div>

        <div className="right-div">
          <div className="right-card">
            <div className="imgDiv">
              <img src="./images/about/right.png" alt="alt-image" />
            </div>
            <div className="card-div">
              <h3>
                Our Promise: More Than <br />
                Just a Digital Firm?
              </h3>
              <p>
                When you work with NexGen Elit, you're not just another
                client—you're part of the family. We'll go above and beyond to
                ensure your experience with us is nothing short of
                extraordinary. From our first brainstorming session to the final
                launch (and all the coffee breaks in between), we'll be by your
                side every step of the way, offering support, guidance, and
                plenty of laughs along the way.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contactinfo">
        <div className="flex-div">
          <div className="description-div">
            <p className="desc-one">
              So, why choose NexGen Elit? Because in a world filled with
              ordinary, we're anything but. With a fusion of creativity,
              expertise, and a touch of corporate humor, we're here to make your
              digital aspirations a reality. From captivating websites to
              groundbreaking apps, from strategic marketing campaigns to
              immersive user experiences, we're committed to pushing the
              boundaries of what's possible and turning your digital dreams into
              soaring realities.
            </p>
            <div className="desc-two">
              <p className="line-one">
                Feeling brave enough to step into the unknown? Embrace the{" "}
                <br />
                madness and join us in the twisted realm of NexGen Elit.
                <br />
                <span>Click now to book appointment.</span>
              </p>
              <div className="line-two">
                <Link to="/start-your-project">
                  <button>
                    <span>CONTACT US</span>
                  </button>
                </Link>
              </div>
              <p className="line-three">
                where dreams and nightmares collide. Dare to defy the <br />
                digital norm and let us unleash the craziness within. <br />
                <span>Your digital destiny awaits... if you dare.</span>
              </p>
            </div>
          </div>
          <div className="img-div">
            <img src="/images/about/contact2.png" alt="Who" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
