"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.css";

function ContactSection() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact Me</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Get in Touch</div>
              <p>
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be a
                part of your visions. Email me with any questions or inquiries.
                I&quot;ll happy to answer your questions and set up a meeting
                with you.
              </p>
              <div className="icons">
                <a href="https://instagram.com/aistscience">
                  <div className="row">
                    <i className="fa-solid fa-user-large"></i>
                    <div className="info">
                      <div className="head">Name</div>
                      <div className="sub-title">
                        <a
                          href="#"
                          style={{ textDecoration: "none", color: "#333" }}
                        >
                          {" "}
                          Mohit Kumar
                        </a>
                      </div>
                    </div>
                  </div>
                </a>

                <div className="row">
                  <i className="fa-solid fa-location-dot"></i>
                  <div className="info">
                    <div className="head">&nbsp;Address</div>
                    <div className="sub-title">
                      &nbsp;Laxmi Nagar, Delhi, India
                    </div>
                  </div>
                </div>

                <div className="row">
                  <i className="fas fa-envelope"></i>
                  {/* <i className="fa-solid fa-envelope"></i> */}
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">
                      <a
                        href="mailto:#"
                        style={{ textDecoration: "none", color: "#333" }}
                      >
                        {" "}
                        mohitkumar.mk889@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <i className="bi bi-translate"></i>
                  <div className="info">
                    <div className="head">Language Known</div>
                    <div className="sub-title">
                      Hindi, English, Bhojpuri, Bengali
                    </div>
                  </div>
                </div>

                <br />

                <div className="social-menu">
                  <ul>
                    <li>
                      <a href="https://github.com/Mohitkumar889">
                        <FontAwesomeIcon icon={faGithub} className="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/mohit-kumar-013740159">
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
                        {/* <i className="fa-brands fa-linkedin-in"></i> */}
                      </a>
                    </li>
                    {/* <li>
                      <a href="https://www.instagram.com/___kaaashx___/">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li> */}
                    <li>
                      <a href="https://X.com/Mohitku889">
                        <FontAwesomeIcon icon={faTwitter} className="icon" />
                      </a>
                    </li>
                    {/* <li>
                      <a
                        href="https://aistechx.com/"
                        title="Get Educate with Us"
                      >
                        <i className="fa-solid fa-graduation-cap"></i>
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>

            <div className="column right">
              <div className="text">Message me</div>
              <form action="#">
                <div className="fields">
                  <div className="field name">
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="field email">
                    <input type="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="field">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="field textarea">
                  <textarea
                    cols="30"
                    rows="10"
                    placeholder="Message.."
                    required
                  ></textarea>
                </div>
                <div className="button-area">
                  <button type="submit">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
