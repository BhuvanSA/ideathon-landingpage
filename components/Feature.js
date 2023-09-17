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
  "More Details coming soon",
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
          <h2 className="text-4xl font-semibold text-center mb-10 text-orange-500">
            About
          </h2>

          <ScrollAnimationWrapper>
            <motion.div
              className="h-full w-full p-1 mb-6"
              variants={scrollAnimation}
            >
              <h3 className="text-xl font-semibold mb-2">About AIdeathon</h3>
              <p>
                Aldeathon is specially designed for brainstorming to bring out
                and foster hidden talents from participants. It also provides a
                unique platform for individuals from different perspectives,
                interests, and innovative minds to get together and discuss
                challenging problems in order to propose solutions to the
                impending practical problems. Aldeathon solicitates new and
                unpresented ideas and innovative concepts to present in the
                event which can be prospectively implemented.
              </p>
            </motion.div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <motion.div
              className="h-full w-full p-1 mb-6"
              variants={scrollAnimation}
            >
              <h3 className="text-xl font-semibold mb-2">About GAT</h3>
              <p>
                Global Academy of Technology(GAT), established in 2001, has
                quickly risen to become one of the premier Engineering and
                Management Institutes in Bengaluru. GAT provides quality
                Education with a vibrant and nurturing environment to harness
                professional skills. The campus is spread over 10 acres,
                offering students ample opportunities to engage in a variety of
                academic and non-academic activities towards holistic
                development. Along with academic excellence, GAT places great
                emphasis on the overall development of the students by providing
                suitable exposure to industry and research, participation in
                various co-curricular and extracurricular activities along with
                mentoring and counseling support. GAT has committed towards
                holistic development and made it an ideal choice among students
                looking for comprehensive education.
              </p>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div
              className="h-full w-full p-1"
              variants={scrollAnimation}
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">About Department</h3>
                <p>
                  The Department of Artificial Intelligence and Machine Learning
                  is a community for academic excellence and innovation. The
                  curriculum is designed to provide a strong foundation in core
                  computer science, artificial intelligence, and machine
                  learning specialization concepts. The students benefit from
                  this dynamic learning environment. We are proud in hosting
                  numerous events like Alfiesta, BoT lab inauguration, Webathon,
                  and many more. The department has introduced various vibrant
                  student clubs and facilitated expert guidance from the
                  talented faculty. The department solicitates ultimate support
                  for initiatives that aim to increase the representation of
                  underrepresented groups in technical fields.
                </p>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>

          {/* Add other sections (Details about the Rounds, Rules and Regulations, Event Participation, Other Considerations, Evaluation Criteria, and Timeline for the Competition) following a similar structure */}
        </div>
      </section>
    </div>
  );
};

export default Feature;
