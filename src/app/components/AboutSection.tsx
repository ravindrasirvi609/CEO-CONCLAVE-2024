"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdEventSeat, MdGroup, MdSchedule } from "react-icons/md";
import { BsFillLightbulbFill, BsGlobe } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutSection: React.FC = () => {
  const stats = [
    { icon: MdEventSeat, text: "250+ Seats", value: "250+" },
    { icon: MdGroup, text: "Industry Leaders", value: "50+" },
    { icon: BsFillLightbulbFill, text: "Innovative Sessions", value: "4" },
    { icon: BsGlobe, text: "Countries Represented", value: "20+" },
  ];

  const objectives = [
    "Foster innovation in pharmaceutical research",
    "Address regulatory challenges and opportunities",
    "Explore emerging technologies in drug discovery",
    "Facilitate networking among industry leaders",
    "Promote collaboration between academia and industry",
    "Discuss sustainable practices in pharma manufacturing",
    "Explore AI and machine learning applications in healthcare",
  ];

  return (
    <section id="about" className="py-20 bg-[#F9D689] px-4 md:px-0">
      <div className="container mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-5xl font-bold text-center text-[#6c0707] mb-16"
        >
          About the Pharma CEO Conclave
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-3xl font-semibold text-[#6c0707] mb-6">
              Our Vision
            </h3>
            <p className="text-xl text-[#6c0707] mb-8 leading-relaxed">
              The Pharma CEO Conclave is a premier gathering of visionary
              leaders in the pharmaceutical industry. Our mission is to create a
              platform that fosters innovation, addresses global health
              challenges, and shapes the future of healthcare through
              collaborative discussions and strategic partnerships.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white p-4 rounded-lg shadow-md"
                >
                  <stat.icon className="text-4xl text-[#E0A75E] mr-4" />
                  <div>
                    <p className="text-3xl font-bold text-[#6c0707]">
                      {stat.value}
                    </p>
                    <p className="text-lg text-[#6c0707]">{stat.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-3xl font-semibold text-[#6c0707] mb-6">
              Key Objectives
            </h3>
            <ul className="space-y-4">
              {objectives.map((objective, index) => (
                <li
                  key={index}
                  className="flex items-start bg-white p-4 rounded-lg shadow-md"
                >
                  <svg
                    className="w-6 h-6 text-[#E0A75E] mr-4 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-lg text-[#6c0707]">{objective}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.9 }}
          className="mt-16 bg-white p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-3xl font-semibold text-[#6c0707] mb-6 text-center">
            Why Attend?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <MdSchedule className="text-5xl text-[#E0A75E] mb-4" />
              <h4 className="text-xl font-semibold text-[#6c0707] mb-2">
                Insightful Sessions
              </h4>
              <p className="text-[#6c0707]">
                Gain valuable insights from industry experts and thought leaders
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaHandshake className="text-5xl text-[#E0A75E] mb-4" />
              <h4 className="text-xl font-semibold text-[#6c0707] mb-2">
                Networking Opportunities
              </h4>
              <p className="text-[#6c0707]">
                Connect with peers and potential partners in the pharmaceutical
                industry
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <BsGlobe className="text-5xl text-[#E0A75E] mb-4" />
              <h4 className="text-xl font-semibold text-[#6c0707] mb-2">
                Global Perspective
              </h4>
              <p className="text-[#6c0707]">
                Gain a global perspective on the challenges and opportunities in
                healthcare
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
