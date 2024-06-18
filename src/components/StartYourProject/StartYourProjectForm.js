import React, { useEffect, useState } from "react";
import "../StartYourProject/StartYourProjectForm.scss";
// import emailjs from '@emailjs/browser';
import { send } from "@emailjs/browser";
import Testimonials from "../Testimonials/Testimonials";
// import Spline from "@splinetool/react-spline";

function StartYourProjectForm() {
  useEffect(() => {
    const inputs = document.querySelectorAll(".checkBoxes label input");
    const labels = document.querySelectorAll(".checkBoxes label");

    inputs.forEach((input, index) => {
      input.addEventListener("change", () => {
        if (input.checked) {
          labels[index].style.backgroundColor = "white";
          labels[index].style.color = "black";
          labels[index].style.borderColor = "black";
          console.log(input.value);
        } else {
          labels[index].style.backgroundColor = "black";
          labels[index].style.color = "white";
          labels[index].style.borderColor = "white";
        }
      });
    });
  }, []);

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [interestedIn, setInterestedIn] = useState([]);
  // const [attachment, setAttachment] = useState();

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setInterestedIn([...interestedIn, value]);
    } else {
      setInterestedIn(interestedIn.filter((val) => val !== value));
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = "service_xd4ow8v";
    const templeteId = "template_xfegfbk";
    const userId = "mAEwXl68SH4ip20_3";
    const data = {
      first_name: firstName,
      last_name: lastName,
      message: message,
      email: email,
      budget: budget,
      value: interestedIn,
    };

    send(serviceId, templeteId, data, userId).then((response) => {
      if ((response.status = "200")) {
        alert("Submitted");
      } else {
        alert("error occured");
      }
    });
  };

  return (
    <div className="container">
      <div className="bgVideo">
        <video src="/videos/bg4.mp4" muted loop autoPlay></video>
        {/* <Spline scene="https://prod.spline.design/4NLtR8ylsV2hSNkb/scene.splinecode" /> */}
      </div>
      <div className="intro">
        <div className="left-side">
          <h5>Got questions?</h5>
          <h5>Need some digital therapy?</h5>
          <h5>Or just want to say hi?</h5>
          <h5>
            Don't be shy, reach out to us! Our digital wizards are eagerly
            awaiting your summoning. Click that button below to unleash the
            madness. Let's get your project started!
          </h5>
        </div>
        <div className="right-side">
          <span>New Buisness</span>
          <div className="number">
            <h6>+91 72196 60800</h6>
          </div>
          <div className="email">
            <h6>hello@nexgenelit.com</h6>
          </div>
          <div className="question">
            <p>Have a quick question you need answering?</p>
            <div>
              <p>Check out - FAQ's :</p>
              <a href="">Working With NexGen Elit</a>
            </div>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form className="form" action="">
          <legend>I am Interested In :</legend>
          <div className="checkBoxes">
            <label>
              <input
                onChange={handleCheckboxChange}
                type="checkbox"
                name="interestedIn"
                id="aNewWebsite"
                value={"A New Website"}
              />
              <span className="checkBtn">A new Website</span>
            </label>
            <label>
              <input
                onChange={handleCheckboxChange}
                type="checkbox"
                name="interestedIn"
                id="eCommerce"
                value={"E - Commerce"}
              />
              <span className="checkBtn">E - Commerce</span>
            </label>
            <label>
              <input
                onChange={handleCheckboxChange}
                type="checkbox"
                name="interestedIn"
                id="development"
                value={"Development"}
              />
              <span className="checkBtn">Development</span>
            </label>
            <label>
              <input
                onChange={handleCheckboxChange}
                type="checkbox"
                name="interestedIn"
                id="branding"
                value={"Branding"}
              />
              <span className="checkBtn">Branding</span>
            </label>
            <label>
              <input
                onChange={handleCheckboxChange}
                type="checkbox"
                name="interestedIn"
                id="appFromScratch"
                value={"App From Scratch"}
              />
              <span className="checkBtn">App From Scratch</span>
            </label>
            <label>
              <input
                onChange={handleCheckboxChange}
                type="checkbox"
                name="interestedIn"
                id="motionGraphics"
                value={"Motion Graphics"}
              />
              <span className="checkBtn">Motion Graphics</span>
            </label>
          </div>
          <div className="inputData">
            <div className="names">
              <input
                required
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                placeholder="First Name*"
              />
              <input
                required
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                placeholder="Last Name*"
              />
            </div>
            <input
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Email*"
            />
            <input
              required
              onChange={(e) => {
                setBudget(e.target.value);
              }}
              type="number"
              placeholder="Budget ($)"
            />
          </div>
          <div className="message">
            <input
              required
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              type="text"
              placeholder="Message"
            />
            <div className="submit">
              <div>
                <div>
                  <div className="checkbox-wrapper-24">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="check"
                      defaultValue
                    />
                    <label htmlFor="newsletter">
                      <span />
                      <p>
                        I'm happy to receive a monthly newsletter from NexGen
                        Elit
                      </p>
                    </label>
                  </div>
                  <div className="checkbox-wrapper-24">
                    <input
                      type="checkbox"
                      id="privacyPolicy"
                      name="check"
                      defaultValue
                    />
                    <label htmlFor="privacyPolicy">
                      <span />
                      <p>
                        I understand that NexGen Elit will securely hold my data
                        in accordance with their privacy policy.
                      </p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="submitButton">
                <div className="explore-more">
                  <button type="submit" className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span onClick={sendEmail} className="button-text">
                      Submit
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="operation">
        <h2>If you don’t want to send a Mail</h2>
        <h6>How To Reach Us</h6>
        <p>
          For those brave enough to embrace the madness, there are multiple ways
          to summon us from the depths:
        </p>
        <ul>
          <li>
            <span>Send a Raven:</span> Scribble your message on parchment and
            send it via carrier raven. We'll be sure to intercept it before it
            reaches the Night King.
          </li>
          <li>
            <span>elepathic Communication:</span> Focus your mind's eye and
            transmit your thoughts directly to our digital cortex. We'll be
            listening for your psychic signals.
          </li>
          <li>
            <span>Summoning Ritual:</span>
            Light the ceremonial candles, draw the sigils of power, and chant
            our name into the void. We may just appear before you, ready to do
            your bidding.
          </li>
        </ul>
        <h3>Hours of Operation</h3>
        <p>
          We operate on the edge of time itself, where the hours blur into
          eternity. While our mortal vessels require rest, our digital essence
          is always vigilant. Reach out whenever the urge strikes, and we'll
          answer the call.
        </p>
      </div>
      <Testimonials />
    </div>
  );
}

export default StartYourProjectForm;
