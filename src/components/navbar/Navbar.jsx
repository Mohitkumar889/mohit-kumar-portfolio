"use client";
import { cn } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar() {
  const [stickyClass, setStickyClass] = useState("relative");
  const [showScrollTop, setShowScrollTop] = useState("");
  const [isSmoothScroll, setIsSmoothScroll] = useState(true);
  const [pathActive, setPathActive] = useState("");
  const [NavShow, setNavShow] = useState(false);

  const handleNav = () => {
    setNavShow(!NavShow);
  };

  useEffect(() => {
    const handleClick = () => {
      document.documentElement.style.scrollBehavior = "smooth";
    };
    const menuItems = document.querySelectorAll(".navbar .menu li a");
    window.addEventListener("scroll", stickNavbar);
    window.addEventListener("scroll", ScrollTop);
    menuItems.forEach((item) => {
      item.addEventListener("click", handleClick);
    });
    return () => {
      window.removeEventListener("scroll", stickNavbar);
      window.removeEventListener("scroll", ScrollTop);
      menuItems.forEach((item) => {
        item.removeEventListener("click", handleClick);
      });
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 20 ? setStickyClass("sticky") : setStickyClass("relative");
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: isSmoothScroll ? "smooth" : "auto" });
    setIsSmoothScroll(!isSmoothScroll);
  };

  const ScrollTop = () => {
    if (window != undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500 ? setShowScrollTop("show") : setShowScrollTop("");
    }
  };

  return (
    <>
      <div className={cn("scroll-up-btn", showScrollTop)} onClick={handleClick}>
        <i className="fas fa-angle-up"></i>
      </div>
      {/* <!-- Header --> */}
      {/* window.scrollY > 20 && "sticky" */}
      <nav className={cn("navbar ", stickyClass)}>
        <div className="max-width">
          <div className="logo">
            <a href="#">
              <Image
                width={85}
                height={70}
                src="/images/mohit-logo-1.png"
                alt="logo image"
                className="mklogo"
              />
              {/* <span>M</span>
              <span>K</span> */}
            </a>
          </div>
          <ul className={`menu ${NavShow && "active"}`}>
            <li>
              <Link
                href="/#home"
                className={cn("menu-btn", pathActive === "home" && "active")}
                onClick={() => {
                  setPathActive("home");
                  handleNav();
                }}
              >
                <strong>Home</strong>
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className={cn("menu-btn", pathActive === "about" && "active")}
                onClick={() => {
                  setPathActive("about");
                  handleNav();
                }}
              >
                <strong>About</strong>
              </Link>
            </li>
            <li>
              <Link
                href="/#qualification"
                className={cn(
                  "menu-btn",
                  pathActive === "qualification" && "active"
                )}
                onClick={() => {
                  setPathActive("qualification");
                  handleNav();
                }}
              >
                <strong>Qualification</strong>
              </Link>
            </li>
            <li>
              <Link
                href="/#skills"
                className={cn("menu-btn", pathActive === "skills" && "active")}
                onClick={() => {
                  setPathActive("skills");
                  handleNav();
                }}
              >
                <strong>Skills</strong>
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                className={cn(
                  "menu-btn",
                  pathActive === "projects" && "active"
                )}
                onClick={() => {
                  setPathActive("projects");
                  handleNav();
                }}
              >
                <strong>Projects</strong>
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className={cn("menu-btn", pathActive === "contact" && "active")}
                onClick={() => {
                  setPathActive("contact");
                  handleNav();
                }}
              >
                <strong>Contact</strong>
              </Link>
            </li>
          </ul>
          <div className={cn("menu-btn")}>
            <i
              className={cn("fas fa-bars")}
              onClick={() => {
                handleNav();
              }}
            ></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
