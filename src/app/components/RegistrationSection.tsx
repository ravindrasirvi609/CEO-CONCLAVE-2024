"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaCheckCircle,
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEventSeat } from "react-icons/md";
import axios from "axios";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const RegistrationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    affiliation: "",
    registrationType: "student",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("/api/registration", formData);
      const paymentUrls = {
        student: "https://rzp.io/l/buJcxni4L",
        teacher: "https://rzp.io/l/TuvjZq8",
        professional: "https://rzp.io/l/UajHcUkX",
        opfmembers: "https://rzp.io/l/ehBNiiGkh",
      };

      const paymentUrl =
        paymentUrls[formData.registrationType as keyof typeof paymentUrls];
      if (paymentUrl) {
        window.location.href = paymentUrl;
      } else {
        throw new Error("Invalid registration type");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(
        "There was an error submitting your registration. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const attendees = [
    "Pharmaceutical CEOs and executives",
    "Research and development professionals",
    "Regulatory affairs specialists",
    "Healthcare policymakers",
    "Academic researchers and professors",
    "Biotech entrepreneurs",
    "Students pursuing careers in pharmaceuticals",
  ];

  return (
    <section
      id="registration"
      className="py-20 bg-gradient-to-b from-[#F9D689] to-[#F5E7B2] px-4 md:px-0"
    >
      <div className="container mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-5xl font-bold text-center text-[#6c0707] mb-16"
        >
          Join the Pharma CEO Conclave
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.3 }}
          className="bg-white p-8 rounded-lg shadow-lg mb-16"
        >
          <h3 className="text-3xl font-semibold text-[#6c0707] mb-8 text-center">
            Event Highlights
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <FaCalendarAlt className="text-5xl text-[#E0A75E] mb-4" />
              <h4 className="text-xl font-semibold text-[#6c0707] mb-2">
                Date
              </h4>
              <p className="text-[#6c0707]">October 19, 2024</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaMapMarkerAlt className="text-5xl text-[#E0A75E] mb-4" />
              <h4 className="text-xl font-semibold text-[#6c0707] mb-2">
                Location
              </h4>
              <p className="text-[#6c0707]">DPU Pharmacy, Pune</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MdEventSeat className="text-5xl text-[#E0A75E] mb-4" />
              <h4 className="text-xl font-semibold text-[#6c0707] mb-2">
                Limited Seats
              </h4>
              <p className="text-[#6c0707]">Only 250 spots available</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaUsers className="text-5xl text-[#E0A75E] mb-4" />
              <h4 className="text-xl font-semibold text-[#6c0707] mb-2">
                Networking
              </h4>
              <p className="text-[#6c0707]">
                Connect with 50+ industry leaders
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-3xl font-semibold text-[#6c0707] mb-6">
              Who Should Attend?
            </h3>
            <ul className="space-y-4">
              {attendees.map((attendee, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-[#E0A75E] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg text-[#6c0707]">{attendee}</span>
                </li>
              ))}
            </ul>
          </motion.div> */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-3xl font-semibold text-[#6c0707] mb-6">
              Who Should Attend?
            </h3>
            <ul className="space-y-4">
              {attendees.map((objective, index) => (
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
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.9 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-3xl font-semibold text-[#6c0707] mb-6 text-center">
              Register Now
            </h3>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-[#6c0707] mb-2 font-semibold"
              >
                Name
              </label>
              <div className="flex items-center border-2 border-[#E0A75E] rounded-md py-2 px-3">
                <FaUser className="text-[#E0A75E] mr-2" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="appearance-none bg-transparent border-none w-full text-[#6c0707] mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="Your full name"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-[#6c0707] mb-2 font-semibold"
              >
                Email
              </label>
              <div className="flex items-center border-2 border-[#E0A75E] rounded-md py-2 px-3">
                <FaEnvelope className="text-[#E0A75E] mr-2" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="appearance-none bg-transparent border-none w-full text-[#6c0707] mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="Your email address"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-[#6c0707] mb-2 font-semibold"
              >
                Phone
              </label>
              <div className="flex items-center border-2 border-[#E0A75E] rounded-md py-2 px-3">
                <FaPhone className="text-[#E0A75E] mr-2" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="appearance-none bg-transparent border-none w-full text-[#6c0707] mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="Your phone number"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="affiliation"
                className="block text-[#6c0707] mb-2 font-semibold"
              >
                Affiliation
              </label>
              <div className="flex items-center border-2 border-[#E0A75E] rounded-md py-2 px-3">
                <FaBuilding className="text-[#E0A75E] mr-2" />
                <input
                  type="text"
                  id="affiliation"
                  name="affiliation"
                  value={formData.affiliation}
                  onChange={handleChange}
                  required
                  className="appearance-none bg-transparent border-none w-full text-[#6c0707] mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="Your company or institution"
                />
              </div>
            </div>
            <div className="mb-8">
              <label
                htmlFor="registrationType"
                className="block text-[#6c0707] mb-2 font-semibold"
              >
                Registration Type
              </label>
              <select
                id="registrationType"
                name="registrationType"
                value={formData.registrationType}
                onChange={handleChange}
                required
                className="block w-full bg-white border-2 border-[#E0A75E] text-[#6c0707] py-3 px-4 rounded-md leading-tight focus:outline-none focus:border-[#6c0707]"
              >
                <option value="student">Student (1770 ₹)</option>
                <option value="teacher">Academia (3000 ₹)</option>
                <option value="professional">
                  Industry Professional (5000 ₹)
                </option>
                <option value="opfmembers">OPF Members (1500 ₹)</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#6c0707] hover:bg-[#E0A75E] text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:shadow-outline transition duration-300 text-lg"
              disabled={loading}
            >
              {loading ? "Processing..." : "Register & Pay Now"}
            </button>
            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
