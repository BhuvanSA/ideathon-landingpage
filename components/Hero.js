import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import MarqueeText from "./misc/MarqueeText";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = ({
  listUser = [
    {
      name: "Per team",
      number: "2-4",
      icon: "/assets/Icon/user_group.svg",
    },
    {
      name: "Date",
      number: "27 Sep",
      icon: "/assets/Icon/calender.svg",
    },
    {
      name: "Cash Pool",
      number: "₹15000",
      icon: "/assets/Icon/cash_prize.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <motion.div
        className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
        variants={scrollAnimation}
      >
        <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="pb-3 text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
            <strong className=" text-orange-500">AIdeathon:</strong> <br />
            Unveiling Innovation{" "}
          </h1>
          {/* <p className="text-black-500 mt-4 mb-6"> */}
          {/* Fostering Innovation through Collaboration, Technology, and Creative */}
          {/* Thinking */}
          {/* </p> */}
          <ButtonPrimary href="https://ideathon-landingpage.vercel.app/register">
            Register Now{" "}
          </ButtonPrimary>
        </div>
        <div className="flex w-full">
          <motion.div className="h-full w-full" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration3.png"
              alt="girl with a laptop thinking"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </motion.div>
        </div>
      </motion.div>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper className="py-0 px-4 sm:px-0 my-4 rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 sm:py-6 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="mb-1 flex items-center justify-start sm:justify-center py-4 sm:py-4 w-full px-2 sm:w-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-80 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-16 h-16 mr-5 rounded-full">
                  <img src={listUsers.icon} className="h-9 w-9" />
                </div>
                <div className="flex flex-col">
                  <p className="text-3xl text-black-600 font-bold">
                    {listUsers.number}
                  </p>
                  <p className="text-xl text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
      <ScrollAnimationWrapper>
        <motion.div custom={{ duration: 3 + 4 }} variants={scrollAnimation}>
          <div className="relative w-full mt-4">
            <div className="text-center bg-orange-500 text-white-500  py-2 rounded-lg ">
              Note: The last date of submission extended from 19/09/2023 to
              24/09/2023
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Hero;
