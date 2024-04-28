"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

function ProjectSection() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <section className="projects" id="projects">
        <div className="max-width">
          <h2 className="title">My Projects</h2>
          <Slider {...settings} className="carousel ">
            <div className="card">
              <Link href="https://www.themedicverse.com/" className="plink">
                <div className="box">
                  <Image
                    width={720}
                    height={600}
                    src="/images/medic_verse1.webp"
                    alt="medic verse"
                  />
                  <div className="text">The Medic verse</div>
                  <p>
                    A healthcare management platform designed to patient care,
                    enhance communication between healthcare providers.
                  </p>
                </div>
              </Link>
            </div>
            <div className="card">
              <Link href="https://weassistindia.com/" className="plink">
                <div className="box">
                  <Image
                    width={720}
                    height={600}
                    src="/images/india-assist.png"
                    alt="india-assist"
                  />
                  <div className="text">India Assist</div>
                  <p>
                    A comprehensive web application designed to provide
                    assistance and support to travelers visiting India.
                  </p>
                </div>
              </Link>
            </div>
            <div className="card">
              <Link href="https://cleverbandassist.com/" className="plink">
                <div className="box">
                  <Image
                    width={720}
                    height={600}
                    src="/images/cba.jpg"
                    alt="CBA"
                  />
                  <div className="text">Clever Band Assist</div>
                  <p>
                    All-in-one solution to manage band and concerts .It is free
                    band and concert management software
                  </p>
                </div>
              </Link>
            </div>
            <div className="card">
              <Link href="https://www.bookyourgift.in/" className="plink">
                <div className="box">
                  <Image
                    width={720}
                    height={600}
                    src="/images/byg.jpg"
                    alt="BYG"
                  />
                  <div className="text">Book Your Gift</div>
                  <p>
                    An e-commerce platform designed to for the process of buying
                    and sending gifts online.The platform allows users to browse
                    through a wide selection of gifts.
                  </p>
                </div>
              </Link>
            </div>
            <div className="card">
              <Link href="https://absolutematrimony.com/" className="plink">
                <div className="box">
                  <Image
                    width={720}
                    height={600}
                    src="/images/absoluteMatri.jpg"
                    alt="absolute"
                  />
                  <div className="text">Absolute Matrimony</div>
                  <p>
                    A matrimonial portal using the customer-to-customer (C2C)
                    business model. it offers features like free listings,
                    search and more.
                  </p>
                </div>
              </Link>
            </div>
            <div className="card">
              <Link href="https://web.employnxt.com/" className="plink">
                <div className="box">
                  <Image
                    width={720}
                    height={600}
                    src="/images/employnxt.jpg"
                    alt="employnxt"
                  />
                  <div className="text">EmployNXT</div>
                  <p>
                    Innovative job platform connecting employers and skilled
                    professionals efficiently.
                  </p>
                </div>
              </Link>
            </div>
            <div className="card">
              <Link href="https://www.diagnowise.com/" className="plink">
                <div className="box">
                  <Image
                    width={720}
                    height={600}
                    src="/images/diagnowise.jpg"
                    alt="diagnowise"
                  />
                  <div className="text">Diagnowise</div>
                  <p>
                    Medical diagnosis tool offering symptom analysis and health
                    information online.
                  </p>
                </div>
              </Link>
            </div>
          </Slider>
          {/* <div className="carousel owl-carousel">
            <div className="card">
              <div className="box">
                <Image
                  width={720}
                  height={600}
                  src="https://source.unsplash.com/720x600/?portfolio"
                  alt=""
                />
                <div className="text">Portfolio</div>
                <p>
                  #Project Details:- Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <Image
                  width={720}
                  height={600}
                  src="https://source.unsplash.com/720x600/?blog"
                  alt=""
                />
                <div className="text">Blog</div>
                <p>
                  #Project Details:- Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <Image
                  width={720}
                  height={600}
                  src="https://source.unsplash.com/720x600/?messanger"
                  alt=""
                />
                <div className="text">Messaging App</div>
                <p>
                  #Project Details:- Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <Image
                  width={720}
                  height={600}
                  src="https://source.unsplash.com/720x600/?app-clone"
                  alt=""
                />
                <div className="text">Clone</div>
                <p>
                  #Project Details:- Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <Image
                  width={720}
                  height={600}
                  src="https://source.unsplash.com/720x600/?code,demo"
                  alt=""
                />
                <div className="text">Demo</div>
                <p>
                  #Project Details:- Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default ProjectSection;
