import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import LinkedIn from "../../public/assets/Icon/linkedin.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  const emailAddress = "aimlgat2022@gmail.com";
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-2 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-2 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <LogoVPN className="h-8 w-auto mb-6" />
          <p className="mb-4">
            <strong className="font-medium">Organized By</strong> Global Academy
            of Technology
          </p>
          <p className="mb-4">
            <strong className="font-medium">Executed By</strong> Dept of AI & ML
          </p>
          <p className="mb-4">
            <strong className="font-medium">Email </strong>
            <a href={`mailto:${emailAddress}`}> {emailAddress}</a>
          </p>
          <p className="mb-4">
            <strong className="font-medium">Designed By</strong>
            <a href={""}></a>
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <a
              href="https://www.facebook.com/profile.php?id=100088874345617&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ai-ml-a41198260"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md"
            >
              <LinkedIn className="h-6 w-6" />
            </a>
            {/* <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md"> */}
            <a
              href="https://www.instagram.com/gat_aiml/?igshid=NjIwNzIyMDk2Mg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md"
            >
              <Instagram className="h-6 w-6" />
            </a>
            {/* </div> */}
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} Copyright. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
