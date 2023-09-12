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
          <h2 className="text-3xl font-semibold text-center mb-8">About</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">About AIdeathon</h3>
            <p>
              Aldeathon is specially designed for brainstorming to bring out and
              foster hidden talents from participants. It also provides a unique
              platform for individuals from different perspectives, interests,
              and innovative minds to get together and discuss challenging
              problems in order to propose solutions to the impending practical
              problems. Aldeathon solicitates new and unpresented ideas and
              innovative concepts to present in the event which can be
              prospectively implemented.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">About GAT</h3>
            <p>
              Global Academy of Technology(GAT), established in 2001, has
              quickly risen to become one of the premier Engineering and
              Management Institutes in Bengaluru. GAT provides quality Education
              with a vibrant and nurturing environment to harness professional
              skills. The campus is spread over 10 acres, offering students
              ample opportunities to engage in a variety of academic and
              non-academic activities towards holistic development. Along with
              academic excellence, GAT places great emphasis on the overall
              development of the students by providing suitable exposure to
              industry and research, participation in various co-curricular and
              extracurricular activities along with mentoring and counseling
              support. GAT has committed towards holistic development and made
              it an ideal choice among students looking for
              comprehensive education.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">About Department</h3>
            <p>
              The Department of Artificial Intelligence and Machine Learning is
              a community for academic excellence and innovation. The curriculum
              is designed to provide a strong foundation in core computer
              science, artificial intelligence, and machine learning
              specialization concepts. The students benefit from this dynamic
              learning environment. We are proud in hosting numerous events like
              Alfiesta, BoT lab inauguration, Webathon, and many more. The
              department has introduced various vibrant student clubs and
              facilitated expert guidance from the talented faculty. The
              department solicitates ultimate support for initiatives that aim
              to increase the representation of underrepresented groups in
              technical fields.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Themes</h3>
            <ol className="list-disc pl-6">
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
            <ol className="list-disc pl-6">
              <li>Participants must register online and submit proposals.</li>
              <li>
                Teams of 2 to 4 students can register, and they must submit a
                brief abstract in 750 words.
              </li>
              <li>
                After the Preliminary Round the ideas will be shortlisted and
                notified to the participants.
              </li>
              <li>
                Shortlisted candidates must present their ideas in A2 format
                posters on 27th September, 2023 in offline mode. Details will be
                emailed to participants.
              </li>
              <li>All teams and participants will receive certificates.</li>
              <li>Idea copying from other sources is strictly prohibited.</li>
              <li>
                Aldeathon committee decisions are based on evaluation and
                recommendation from the expert jury committee,
                making them final.
              </li>
            </ol>
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
