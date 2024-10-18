"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaClock,
  FaUser,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ScheduleItem = ({
  time,
  title,
  speakers,
  description,
  isOpen,
  toggleOpen,
}: {
  time: string;
  title: string;
  speakers: string;
  description?: string;
  isOpen: boolean;
  toggleOpen: () => void;
}) => (
  <motion.div
    className="bg-white rounded-lg shadow-md mb-4 overflow-hidden"
    variants={fadeIn}
  >
    <div className="p-6 cursor-pointer" onClick={toggleOpen}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <FaClock className="text-[#E0A75E] mr-2" />
          <span className="font-semibold text-[#6c0707]">{time}</span>
        </div>
        {isOpen ? (
          <FaChevronUp className="text-[#6c0707]" />
        ) : (
          <FaChevronDown className="text-[#6c0707]" />
        )}
      </div>
      <h3 className="text-xl font-bold text-[#6c0707] mb-2">{title}</h3>
      <div className="flex items-center">
        <FaUser className="text-[#E0A75E] mr-2" />
        <span className="text-[#6c0707]">{speakers}</span>
      </div>
    </div>
    {isOpen && description && (
      <div className="px-6 pb-4 text-sm text-gray-600">{description}</div>
    )}
  </motion.div>
);

const ScheduleSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const scheduleItems = [
    {
      time: "08:30 AM",
      title: "Breakfast & CEO Roundtable Discussions",
      speakers: "All Attendees",
    },
    {
      time: "09:30 AM - 11:15 AM",
      title: "Inaugural Function",
      speakers: "Chief Guest, Guest of Honour",
      description: "Welcome address, keynote speeches, and felicitations",
    },
    {
      time: "11:30 AM - 12:30 PM",
      title:
        "Panel Discussion 1: On Changing Regulatory Reframes: Opportunities and Challenges",
      speakers: "Mr. Harish Jain, Mr. Chandan Bhar, Dr. Deepa Arora",
      description:
        "Explore the latest regulatory changes affecting the pharmaceutical industry and discuss strategies to navigate these challenges.",
    },
    {
      time: "12:30 PM - 01:20 PM",
      title:
        "Panel Discussion 2: Leadership and R&D: Bridging the Gap Between Research and Commercialization",
      speakers:
        "Dr. Maharukh Rustomjee, Mr. Vipul Kumar, Dr. Madhu Nicholas, Dr. Murlidhar Ingale, Dr. Vaishali Tawde",
      description:
        "Discuss effective ways to align research efforts with commercial goals and accelerate the transition from lab to market.",
    },
    {
      time: "01:20 PM - 02:30 PM",
      title: "Lunch cum Networking Break",
      speakers: "All Attendees",
    },
    {
      time: "02:30 PM - 03:30 PM",
      title: "CEO Round Table Discussions",
      speakers:
        "Dr. Pramod Kashid, Dr. Satya Vadlamani, Mr. Harish Jain, Mr. Manoj Krishna",
      description:
        "Join industry leaders for insightful discussions on current trends and future directions in the pharmaceutical sector.",
    },
    {
      time: "02:30 PM - 03:30 PM",
      title: "Keynote Session 2",
      speakers: "Dr. Sanjay Gade, Dr. Rupali Paranjape",
    },
    {
      time: "03:30 PM - 04:30 PM",
      title:
        "Panel Discussion 3: Leadership in the Digital Age: Embracing Technology and Innovation",
      speakers: "Mr. Ayub Shaikh, Mr. Manoj Krishna, Mr. Amit Panchal",
      description:
        "Explore how digital technologies are reshaping the pharmaceutical industry and discuss strategies for successful digital transformation.",
    },
    {
      time: "04:30 PM - 05:30 PM",
      title: "Valedictory Function",
      speakers: "Disguised Guest",
      description:
        "Concluding session with a brief report, participant feedback, certificate distribution, and vote of thanks.",
    },
  ];

  return (
    <section id="schedule" className="py-20 px-4 md:px-0 bg-gray-100">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#6c0707] mb-4">
            Program Schedule
          </h2>
          <p className="text-xl text-[#E0A75E]">
            2nd Pharma Industry CEO Conclave
          </p>
          <p className="text-lg text-gray-600">
            Pharma Leadership: Building a Culture of Innovation and Excellence
          </p>
          <div className="flex items-center justify-center mt-4">
            <FaMapMarkerAlt className="text-[#E0A75E] mr-2" />
            <span className="text-[#6c0707]">
              Dr. D. Y. Patil Institute of Pharmaceutical Sciences & Research,
              Pimpri, Pune
            </span>
          </div>
          <p className="text-[#6c0707] font-semibold mt-2">
            October 19th, 2024
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {scheduleItems.map((item, index) => (
            <ScheduleItem
              key={index}
              {...item}
              isOpen={openItems.includes(index)}
              toggleOpen={() => toggleItem(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
