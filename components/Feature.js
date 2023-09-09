import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits.",
  "Jaime Lannister",
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    // <div
    //   className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
    //   id="feature"
    // >
    //   <div className="box-content h-24"></div>
    //   <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
    //     <ScrollAnimationWrapper className="flex w-full justify-end">
    //       <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
    //         <Image
    //           src="/assets/Illustration2.png"
    //           alt="VPN Illustrasi"
    //           layout="responsive"
    //           quality={100}
    //           height={414}
    //           width={508}
    //         />
    //       </motion.div>
    //     </ScrollAnimationWrapper>
    //     <ScrollAnimationWrapper>
    //       <motion.div
    //         className="text-center flex flex-col items-end justify-center ml-auto w-full lg:w-9/12"
    //         variants={scrollAnimation}
    //       >
    //         <div className="mr-32 ml-0 text-left">
    //           <h3 className="m-0 text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
    //             Eligiblity Criteria
    //           </h3>
    //         </div>
    //         <p className="my-2 text-black-500">
    //           You can explore the features that we provide with fun and have
    //           their own functions each feature.
    //         </p>
    //         <ul className="text-black-500 self-start list-inside ml-8">
    //           {features.map((feature, index) => (
    //             <motion.li
    //               className=" ml-2 relative circle-check custom-list"
    //               custom={{ duration: 2 + index }}
    //               variants={scrollAnimation}
    //               key={feature}
    //               whileHover={{
    //                 scale: 1.1,
    //                 transition: {
    //                   duration: 0.2,
    //                 },
    //               }}
    //             >
    //               {feature}
    //             </motion.li>
    //           ))}
    //         </ul>
    //       </motion.div>
    //     </ScrollAnimationWrapper>
    //   </div>
    // </div>
    <div
      id="feature"
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
    >
      <div className="box-content h-24"></div>
      <section className="bg-white-500 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">
            About IDEAthon
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Introduction</h3>
            <p>
              IDEAthon is not just an event; it's a platform where innovation,
              creativity, and problem-solving converge. It's where brilliant
              minds come together to explore challenging problems and propose
              practical solutions. IDEAthon is the stage for turning ideas into
              actionable strategies, roadmaps, and solutions that have the
              potential to reshape the future.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Eligibility</h3>
            <ul className="list-disc pl-6">
              <li>
                Only registered undergraduate or graduate students in current
                programs are eligible to participate in the competition.
              </li>
              <li>
                Only GAT students are eligible to take part in IDEAthon-2023.
              </li>
              <li>
                Teams that are currently in the advanced idea, prototype, or
                research phase are eligible.
              </li>
              <li>
                The students have to provide their student ID card as part of
                the application process.
              </li>
              <li>
                The IDEAthon - 2023 team is entirely within its rights to
                request any such additional evidence in the event of a suspect
                of candidature.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">
              Details about the Rounds Edit - Required
            </h3>
            <ul className="list-disc pl-6">
              <li>
                Only registered undergraduate or graduate students in current
                programs are eligible to participate in the competition.
              </li>
              <li>
                Only GAT students are eligible to take part in IDEAthon-2023.
              </li>
              <li>
                Teams that are currently in the advanced idea, prototype, or
                research phase are eligible.
              </li>
              <li>
                The students have to provide their student ID card as part of
                the application process.
              </li>
              <li>
                The IDEAthon - 2023 team is entirely within its rights to
                request any such additional evidence in the event of a suspect
                of candidature.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">
              Rules and Regulations
            </h3>
            <ul className="list-disc pl-6">
              <li>Teams of 2 to 4 students are allowed to register.</li>
              <li>The competition consists of three rounds.</li>
              <li>
                Registration requires completing the form honestly and providing
                a brief abstract without any false information.
              </li>
              <li>
                Participants should be prepared to showcase their ideas using a
                PowerPoint presentation and a working prototype.
              </li>
              <li>Copying ideas from others is strictly prohibited.</li>
              <li>Decisions made by the organizers are final.</li>
              <li>
                Proposals will be judged on their originality and viability.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Event Participation:</h3>
            <ul className="list-disc pl-6">
              <li>
                Participants must register online and submit their proposals.
              </li>
              <li>
                Selected participants will present their ideas on the event day
                following an initial assessment of submitted ideas.
              </li>
              <li>
                Concepts will be displayed as A2 format posters on the event day
                (details will be emailed to participants).
              </li>
              <li>
                Rewards will be split between two winning entries in each
                competition category.
              </li>
              <li>
                All participating teams and individuals will receive
                certificates.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Evaluation Criteria:</h3>
            <ul className="list-disc pl-6">
              <li>
                Thoroughness: The idea should encompass a wide range of specific
                criteria related to the chosen problem.
              </li>
              <li>
                Innovation: Creative and inventive use of design to fulfill
                requirements demonstrates innovative thinking.
              </li>
              <li>
                Practicality: The submission should identify a real-world issue
                and offer a fresh, practical solution.
              </li>
              <li>
                Tech Feasibility: The solution should be technically feasible
                and adaptable to both current and future contexts.
              </li>
              <li>
                Outreach: The solution should benefit a significant number of
                people.
              </li>
              <li>
                Scalability: The solution's potential to be implemented at a
                national or international level should be evident.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">
              Timeline for the Competition:
            </h3>
            <ul className="list-disc pl-6">
              <li>
                Round 1: September 11, 2023 - September 12, 2023. All
                submissions must be completed by the deadline.
              </li>
              <li>
                Round 2: September 13, 2023 - September 14, 2023. All
                submissions must be completed by the deadline.
              </li>
              <li>
                Final Round: September 15, 2023, at 9:30 am. Teams must report
                to GAT Campus on September 15, 2023. Further information will be
                communicated via email.
              </li>
            </ul>
          </div>

          {/* Add other sections (Details about the Rounds, Rules and Regulations, Event Participation, Other Considerations, Evaluation Criteria, and Timeline for the Competition) following a similar structure */}
        </div>
      </section>
    </div>
  );
};

export default Feature;
