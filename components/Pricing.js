import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import qrCode from "./../public/assets/FormLink.png";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    // <div
    //   className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
    //   id="pricing"
    // >
    //   <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
    //     <div className="flex flex-col w-full">
    //       <ScrollAnimationWrapper>
    //         <motion.h3
    //           variants={scrollAnimation}
    //           className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
    //         >
    //           Choose Your Plan
    //         </motion.h3>
    //         <motion.p
    //           variants={scrollAnimation}
    //           className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
    //         >
    //           Let's choose the package that is best for you and explore it happily
    //           and cheerfully.
    //         </motion.p>
    //       </ScrollAnimationWrapper>
    //       <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
    //         <ScrollAnimationWrapper className="flex justify-center">
    //           <motion.div
    //             variants={scrollAnimation}
    //             className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
    //             whileHover={{
    //               scale : 1.1,
    //               transition: {
    //                 duration: .2
    //               }
    //             }}
    //           >
    //             <div className="p-4 lg:p-0 mt-6 lg:mt-16">
    //               <Image
    //                 src="/assets/Free.png"
    //                 width={145}
    //                 height={165}
    //                 alt="Free Plan"
    //               />
    //             </div>
    //             <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
    //               Free Plan
    //             </p>
    //             <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
    //               <li className="relative check custom-list my-2">
    //                 Unlimited Bandwitch
    //               </li>
    //               <li className="relative check custom-list my-2">
    //                 Encrypted Connection
    //               </li>
    //               <li className="relative check custom-list my-2">
    //                 No Traffic Logs
    //               </li>
    //               <li className="relative check custom-list my-2">
    //                 Works on All Devices
    //               </li>
    //             </ul>
    //             <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
    //               <p className="text-2xl text-black-600 text-center mb-4 ">
    //                 Free
    //               </p>
    //               <ButtonOutline>Select</ButtonOutline>
    //             </div>
    //           </motion.div>
    //         </ScrollAnimationWrapper>
    //         <ScrollAnimationWrapper className="flex justify-center">
    //           <motion.div
    //             variants={scrollAnimation}
    //             className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
    //             whileHover={{
    //               scale : 1.1,
    //               transition: {
    //                 duration: .2
    //               }
    //             }}
    //           >
    //           <div className="p-4 lg:p-0 mt-6 lg:mt-16">
    //             <Image
    //               src="/assets/Standard.png"
    //               width={145}
    //               height={165}
    //               alt="Standard Plan"
    //             />
    //           </div>
    //           <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
    //             Standard Plan{" "}
    //           </p>
    //           <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
    //             <li className="relative check custom-list my-2">
    //               Unlimited Bandwitch
    //             </li>
    //             <li className="relative check custom-list my-2">
    //               Encrypted Connection
    //             </li>
    //             <li className="relative check custom-list my-2">
    //               No Traffic Logs
    //             </li>
    //             <li className="relative check custom-list my-2">
    //               Works on All Devices
    //             </li>
    //             <li className="relative check custom-list my-2">
    //               Connect Anyware{" "}
    //             </li>
    //           </ul>
    //           <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
    //             <p className="text-2xl text-black-600 text-center mb-4 ">
    //               $9 <span className="text-black-500">/ mo</span>
    //             </p>
    //             <ButtonOutline>Select</ButtonOutline>
    //           </div>
    //           </motion.div>
    //         </ScrollAnimationWrapper>
    //         <ScrollAnimationWrapper className="flex justify-center">
    //           <motion.div
    //             variants={scrollAnimation}
    //             className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
    //             whileHover={{
    //               scale : 1.1,
    //               transition: {
    //                 duration: .2
    //               }
    //             }}
    //           >
    //           <div className="p-4 lg:p-0 mt-6 lg:mt-16">
    //             <Image
    //               src="/assets/Premium.png"
    //               width={145}
    //               height={165}
    //               alt="Premium Plan"
    //             />
    //           </div>
    //           <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
    //             Premium Plan{" "}
    //           </p>
    //           <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
    //             <li className="relative check custom-list my-2">
    //               Unlimited Bandwitch
    //             </li>
    //             <li className="relative check custom-list my-2">
    //               Encrypted Connection
    //             </li>
    //             <li className="relative check custom-list my-2">
    //               No Traffic Logs
    //             </li>
    //             <li className="relative check custom-list my-2">
    //               Works on All Devices
    //             </li>
    //             <li className="relative check custom-list my-2">
    //               Connect Anyware{" "}
    //             </li>
    //             <li className="relative check custom-list my-2">
    //               Get New Features{" "}
    //             </li>
    //           </ul>
    //           <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
    //             <p className="text-2xl text-black-600 text-center mb-4 ">
    //               $12 <span className="text-black-500">/ mo</span>
    //             </p>

    //             <ButtonOutline>Select</ButtonOutline>
    //           </div>
    //           </motion.div>
    //         </ScrollAnimationWrapper>
    //       </div>
    //     </div>
    //     <div className="flex flex-col w-full my-16">
    //       <ScrollAnimationWrapper>
    //         <motion.h3
    //           variants={scrollAnimation}
    //           className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
    //           Huge Global Network of Fast VPN{" "}
    //         </motion.h3>
    //         <motion.p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
    //           See LaslesVPN everywhere to make it easier for you when you move
    //           locations.
    //         </motion.p>
    //       </ScrollAnimationWrapper>
    //       <ScrollAnimationWrapper>
    //         <motion.div className="py-12 w-full px-8 mt-16" variants={scrollAnimation}>
    //           <Maps className="w-full h-auto" />
    //         </motion.div>
    //       </ScrollAnimationWrapper>
    //       <ScrollAnimationWrapper>
    //         <motion.div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap" variants={scrollAnimation}>
    //           {/* <Netflix className="h-18 w-auto" /> */}
    //           <img
    //             src="/assets/Icon/amazon.png"
    //             className="h-14 w-auto mt-4 lg:mt-2"
    //             alt=""
    //           />
    //           <img
    //             src="/assets/Icon/netflix.png"
    //             className="h-14 w-auto mt-2 lg:mt-0"
    //             alt=""
    //           />
    //           <img
    //             src="/assets/Icon/reddit.png"
    //             className="h-12 w-auto mt-2 lg:mt-0"
    //             alt=""
    //           />
    //           <img
    //             src="/assets/Icon/discord.png"
    //             className="h-14 w-auto mt-2 lg:mt-0"
    //             alt=""
    //           />
    //           <img
    //             src="/assets/Icon/spotify.png"
    //             className="h-12 w-auto mt-2 lg:mt-0"
    //             alt=""
    //           />
    //         </motion.div>
    //       </ScrollAnimationWrapper>
    //     </div>
    //     <div className="flex flex-col w-full my-16" id="testimoni">
    //       <ScrollAnimationWrapper>
    //         <motion.h3
    //           variants={scrollAnimation}
    //           className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
    //           Trusted by Thousands of Happy Customer{" "}
    //         </motion.h3>
    //         <motion.p
    //           variants={scrollAnimation}
    //           className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
    //         >
    //           These are the stories of our customers who have joined us with great
    //           pleasure when using this crazy feature.
    //         </motion.p>
    //       </ScrollAnimationWrapper>
    //       <ScrollAnimationWrapper className="w-full flex flex-col py-12">
    //         <motion.div variants={scrollAnimation}>
    //           <Testimoni />
    //         </motion.div>
    //       </ScrollAnimationWrapper>
    //       <ScrollAnimationWrapper className="relative w-full mt-16">
    //         <motion.div variants={scrollAnimation} custom={{duration: 3}}>
    //           <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
    //             <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
    //               <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
    //                 Subscribe Now for <br /> Get Special Features!
    //               </h5>
    //               <p>Let's subscribe with us and find the fun.</p>
    //             </div>
    //             <ButtonPrimary>Get Started</ButtonPrimary>
    //           </div>
    //           <div
    //             className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
    //             style={{ filter: "blur(114px)" }}
    //             ></div>
    //         </motion.div>
    //       </ScrollAnimationWrapper>
    //     </div>
    //   </div>
    // </div>
    <>
      <div
        className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
        id="pricing"
      >
        <div className="box-content h-24"></div>
        <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
          <div className="flex flex-col w-full"></div>
          <ScrollAnimationWrapper className="relative w-full my-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-orange-500">
                  Themes
                </h3>
                <ol className="list-decimal text-left">
                  <li>AI for sustainable cities and communities</li>
                  <li>AI for quality education for sustainable development</li>
                  <li>AI for good health and wellbeing</li>
                  <li>
                    AI in agriculture for sustainable consumption and production
                  </li>
                </ol>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Steps to participate in AIdeathon
                </h3>
                <ol className="list-decimal text-left">
                  <li>
                    Participants must register online and submit proposals.
                  </li>
                  <li>
                    Teams of 2 to 4 students can register, and they must submit
                    a brief abstract in 750 words.
                  </li>
                  <li>
                    After the Preliminary Round the ideas will be shortlisted
                    and notified to the participants.
                  </li>
                  <li>
                    Shortlisted candidates must present their ideas in A2 format
                    posters on 27th September, 2023 in offline mode. Details
                    will be emailed to participants.
                  </li>
                  <li>All teams and participants will receive certificates.</li>
                  <li>
                    Idea copying from other sources is strictly prohibited.
                  </li>
                  <li>
                    Aldeathon committee decisions are based on evaluation and
                    recommendation from the expert jury committee,
                    making them final.
                  </li>
                </ol>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Evaluation Criteria:
                </h3>
                <ul className="list-decimal text-left">
                  <li>
                    Thoroughness: The idea should encompass a wide range of
                    specific criteria related to the chosen problem.
                  </li>
                  <li>
                    Innovation: Creative and inventive use of design to fulfill
                    requirements demonstrates innovative thinking.
                  </li>
                  <li>
                    Practicality: The submission should identify a real-world
                    issue and offer a fresh, practical solution.
                  </li>
                  <li>
                    Tech Feasibility: The solution should be technically
                    feasible and adaptable to both current and future contexts.
                  </li>
                  <li>
                    Outreach: The solution should benefit a significant number
                    of people.
                  </li>
                  <li>
                    Scalability: The solution's potential to be implemented at a
                    national or international level should be evident.
                  </li>
                </ul>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
      <div
        className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full justify-center"
        id="testimoni"
      >
        <h3>Important Dates</h3>
        <table>
          <tbody>
            <tr>
              <td>Last date to Register:</td>
              <td>19/09/2023</td>
            </tr>
            <tr>
              <td>Preliminary Round:</td>
              <td>Starts on 11/09/2023 and ends on 19/09/2023.</td>
            </tr>
            <tr>
              <td>Championship Round:</td>
              <td>27/09/2023 at 9.30 am.</td>
            </tr>
          </tbody>
        </table>
        <h3>Registrarion Fees</h3>
        <table>
          <tbody>
            <tr>
              <td>IEEE MEMBERS: ₹200</td>
              <td>NON IEEE MEMBERS: ₹300</td>
            </tr>
          </tbody>
        </table>
        <div className="box-content text-center">
          <Image
            src="/../public/assets/FormLink.png"
            alt="QRCode Link for Register form"
            quality={100}
            height={100}
            width={100}
            // layout="fill"
          />
        </div>
        <table>
          <tbody>
            <tr>
              <td>CHIEF PATRON</td>
              <td>SRI. DKSHIVAKUMAR, CHAIRMAN, NEF</td>
            </tr>
            <tr>
              <td>PATRON</td>
              <td>
                SRI. SLEPAKSHA, SECRETARY TRUSTEE, NEF <br />
                SRI. VENKATAPPA, ADDITIONAL SECRETARY TRUSTEE, NEF
              </td>
            </tr>
            <tr>
              <td>CONVENOR </td>
              <td>DR. N RANA PRATAP REDDY, PRINCIPAL, GAT</td>
            </tr>
            <tr>
              <td>CO - CONVENOR</td>
              <td>DR. PREETHI SATISH PROFESSOR & HEAD, AI & ML</td>
            </tr>
            <tr>
              <td>ADVISOR</td>
              <td>DR. ROSHAN JOY MARTIS ASSOC. PROFESSOR, DEPT. OF CSE</td>
            </tr>
          </tbody>
        </table>
        CO-ORDINATORS
        <table>
          <tbody>
            <tr>
              <td>FACULTY</td>
              <td>LAKSHMIKANTHA G C</td>
            </tr>
            <tr>
              <td></td>
              <td>ASST. PROFESSOR, DEPT. OF AI & ML</td>
            </tr>
            <tr>
              <td></td>
              <td>7975441021</td>
            </tr>
            <tr>
              <td>STUDENT</td>
              <td>HARSHITHA K SHIGGAVKAR</td>
            </tr>
            <tr>
              <td></td>
              <td>8073204311</td>
            </tr>
            <tr>
              <td></td>
              <td>RITHESH KUNDAR</td>
            </tr>
            <tr>
              <td></td>
              <td>7338359108</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col w-full my-16" id="testimoni">
        <ScrollAnimationWrapper className="relative w-full mt-16">
          <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
            <div className="absolute rounded-xl  py-2 -mt-20 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
              <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                  Register Now!
                </h5>
              </div>
              <ButtonPrimary href="https://docs.google.com/forms/d/e/1FAIpQLSeyEIPX2rHQLSDqowUGENbddS3DaRPOcTou8nsq2kuMEd6N_Q/viewform">
                Register
              </ButtonPrimary>
            </div>
            <div
              className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
              style={{ filter: "blur(114px)" }}
            ></div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </>
  );
};

export default Pricing;
