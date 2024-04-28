"use client";
import React, { useEffect, useState } from "react";

function QualificationSection() {
  useEffect(() => {
    const tabs = document.querySelectorAll("[data-target]");
    const tabContents = document.querySelectorAll("[data-content]");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
          tabContent.classList.remove("qualification__active");
        });
        target.classList.add("qualification__active");

        tabs.forEach((tab) => {
          tab.classList.remove("qualification__active");
        });
        tab.classList.add("qualification__active");
      });
    });

    return () => {
      tabs.forEach((tab) => {
        tab.removeEventListener("click", () => handleClick(tab));
      });
    };
  }, []);

  return (
    <>
      <section className="qualification__section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className="qualification__button button--flex qualification__active"
              data-target="#education"
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>

            <div
              className="qualification__button button--flex"
              data-target="#work"
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Work
            </div>
          </div>

          <div className="qualification__sections">
            {/* <!--==================== QUALIFICATION CONTENT 1 ====================--> */}
            <div
              className="qualification__content qualification__active"
              data-content
              id="education"
            >
              {/* <!--==================== QUALIFICATION 1 ====================-->  */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    B. Tech in CSE
                    {/* Class-10<sup>th</sup>{" "} */}
                  </h3>
                  <span className="qualification__subtitle">
                    Takshshila Institute of Engineering and Technology, Jabalpur
                    (M.P.)
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2015 - 2019
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* <!--==================== QUALIFICATION 2 ====================-->  */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    Class-12<sup>th</sup>
                  </h3>
                  <span className="qualification__subtitle">
                    Maharani Janki Kunwar College, Bettiah, Bihar{" "}
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2012 - 2014
                  </div>
                </div>
              </div>

              {/* <!--==================== QUALIFICATION 3 ====================-->  */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">B. Tech in CSE</h3>
                  <span className="qualification__subtitle">
                    Class-10<sup>th</sup>{" "}
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2012
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  {/* <!-- <span className="qualification__line"></span> --> */}
                </div>
              </div>
            </div>

            {/* <!--==================== QUALIFICATION CONTENT 2 ====================--> */}
            <div className="qualification__content" data-content id="work">
              {/* <!--==================== QUALIFICATION 1 ====================-->  */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Full Stack Developer</h3>
                  <span className="qualification__subtitle">
                    APPSINVO Private Ltd, DELHI, IN
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2020 - current
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* <!--==================== QUALIFICATION 2 ====================-->  */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Web Developer</h3>
                  <span className="qualification__subtitle">
                    IT HOURS SOLUTIONS, DELHI, IN
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    09-2019 – 03-2020
                  </div>
                </div>
              </div>
              {/* <!--==================== QUALIFICATION 3 ====================-->  */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">PHP Intern</h3>
                  <span className="qualification__subtitle">
                    Omninous Solutions Private Ltd, MOHALI, IN
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    06-2019 – 09-2019
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  {/* <!-- <span className="qualification__line"></span> --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default QualificationSection;
