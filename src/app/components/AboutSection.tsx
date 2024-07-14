"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdEventSeat } from "react-icons/md";
import { BsFillLightbulbFill } from "react-icons/bs";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#F9D689] px-4 md:px-0">
      <div className="container mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl font-bold text-center text-[#6c0707] mb-12"
        >
          About the Conclave
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-[#6c0707] mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-[#6c0707] mb-6">
              The CEO Conclave aims to bring together leaders in the
              pharmaceutical industry to foster innovation, discuss regulatory
              challenges, and explore emerging technologies in drug discovery
              and manufacturing.
            </p>
            <div className="flex items-center mb-4">
              <MdEventSeat className="text-3xl text-[#E0A75E] mr-4" />
              <p className="text-lg text-[#6c0707]">500+ Seats</p>
            </div>
            <div className="flex items-center">
              <BsFillLightbulbFill className="text-3xl text-[#E0A75E] mr-4" />
              <p className="text-lg text-[#6c0707]">20+ Innovative Sessions</p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-[#6c0707] mb-4">
              Key Objectives
            </h3>
            <ul className="space-y-4">
              {[
                "Foster innovation in pharmaceutical research",
                "Address regulatory challenges and opportunities",
                "Explore emerging technologies in drug discovery",
                "Facilitate networking among industry leaders",
                "Promote collaboration between academia and industry",
              ].map((objective, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#E0A75E] mr-2 mt-1"
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
      </div>
    </section>
  );
};

export default AboutSection;
