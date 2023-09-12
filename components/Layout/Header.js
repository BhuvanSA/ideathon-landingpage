import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";
import LogoVPN from "../../public/assets/Logo.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <LogoVPN className="h-8 w-auto" />
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              // offset={-10}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 a")
              }
            >
              Home
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "feature"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              Details
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("pricing");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "pricing"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              Pricing
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimoni"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              Testimonial
            </LinkScroll>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            {/* <Link href="/"> */}
            {/* <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                  Sign In
              </a> */}
            {/* </Link> */}
            <ButtonOutline href="https://docs.google.com/forms/d/e/1FAIpQLSeyEIPX2rHQLSDqowUGENbddS3DaRPOcTou8nsq2kuMEd6N_Q/viewform">
              Register
            </ButtonOutline>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "about"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Home
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "feature"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              About
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("pricing");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "pricing"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Pricing
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "testimoni"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Testimonial
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
