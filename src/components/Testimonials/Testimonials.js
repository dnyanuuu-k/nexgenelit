import React from "react";
import Slider from "react-slick";
import "../Testimonials/Testimonials.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="testimonial">
      <div>
        <h2>Client's fort know for digital wealth</h2>
      </div>

      <div>
        <Slider {...settings}>
          <div>
            <figure className="card">
              <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>

              <blockquote>
                NexGen Elit transformed my online store with their exceptional
                web development skills. They optimized my site for speed,
                usability, and conversions, resulting in a significant increase
                in sales. Their team is truly dedicated to helping businesses
                thrive in the digital world.
              </blockquote>
              <div className="author">
                <h5>
                  Lisa Martinez <span>E-commerce Entrepreneur </span>
                </h5>
              </div>
            </figure>
          </div>
          <div>
            <figure className="card">
              <div className="stars">&#9733;&#9733;&#9733;&#9733;</div>

              <blockquote>
                I was blown away by NexGen Elit's creativity and expertise in
                crafting our company's website. They went above and beyond to
                ensure every aspect of the design aligned with our brand
                identity. I highly recommend them to anyone looking for
                top-notch web development services.
              </blockquote>
              <div className="author">
                <h5>
                  Mark Thompson<span> Founder of Innovate Labs</span>
                </h5>
              </div>
            </figure>
          </div>
          <div>
            <figure className="card">
              <div className="stars">&#9733;&#9733;&#9733;&#9733;</div>

              <blockquote>
                NexGen Elit delivered a stunning website that exceeded our
                expectations. Their attention to detail and commitment to
                excellence are evident in every aspect of their work. We've
                received numerous compliments on our new site, thanks to NexGen
                Elit's expertise.
              </blockquote>
              <div className="author">
                <h5>
                  Jessica Adams
                  <span> Marketing Manager at Global Solutions</span>
                </h5>
              </div>
            </figure>
          </div>
          <div>
            <figure className="card">
              <div className="stars">&#9733;&#9733;&#9733;</div>
              <blockquote>
                Working with NexGen Elit was a game-changer for my business.
                They not only created a beautiful website but also provided
                invaluable guidance on digital marketing strategies. I'm
                grateful for their dedication to helping small businesses
                succeed.
              </blockquote>
              <div className="author">
                <h5>
                  Ryan Cooper<span> Small Business Owner</span>
                </h5>
              </div>
            </figure>
          </div>
          {/* <div>
            <figure className="card">
              <blockquote>
                NexGen Elit's team is a pleasure to work with. They're
                professional, responsive, and truly care about their clients'
                success. Our new website has elevated our brand presence and has
                been instrumental in attracting new customers. I highly
                recommend NexGen Elit to anyone seeking exceptional web
                development services.
              </blockquote>
              <div className="author">
                <h5>
                  Sophie Evans <span> CEO of Tech Innovations</span>
                </h5>
              </div>
            </figure>
          </div> */}
          <div>
            <figure className="card">
              <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>

              <blockquote>
                NexGen Elit exceeded my expectations with their innovative
                approach to web design. They took the time to understand our
                brand and delivered a website that truly captures our essence.
                Their professionalism and attention to detail are unmatched.
              </blockquote>
              <div className="author">
                <h5>
                  Sarah Johnson <span> Founder of Creative Solutions</span>
                </h5>
              </div>
            </figure>
          </div>
          <div>
            <figure className="card">
              <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>

              <blockquote>
                I can't thank NexGen Elit enough for their outstanding work on
                our website redesign project. From start to finish, they were
                responsive, creative, and dedicated to delivering results. Our
                new website has received rave reviews from clients and
                stakeholders alike.
              </blockquote>
              <div className="author">
                <h5>
                  Michael Brown{" "}
                  <span> Marketing Director at Bright Ideas Agency</span>
                </h5>
              </div>
            </figure>
          </div>
          <div>
            <figure className="card">
              <div className="stars">&#9733;&#9733;&#9733;&#9733;</div>

              <blockquote>
                Choosing NexGen Elit for my website development was the best
                decision I made for my business. They listened to my ideas,
                offered valuable insights, and created a website that perfectly
                reflects my brand. I couldn't be happier with the outcome!
              </blockquote>
              <div className="author">
                <h5>
                  Emily White <span>Small Business Owner</span>
                </h5>
              </div>
            </figure>
          </div>
          <div>
            <figure className="card">
              <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>

              <blockquote>
                NexGen Elit transformed my vision into reality with their expert
                web development services. Their team demonstrated exceptional
                technical skills and a deep understanding of user experience.
                I'm grateful for their contribution to the success of my
                startup.
              </blockquote>
              <h5>
                David Lee <span> Startup Entrepreneur</span>
              </h5>
            </figure>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
