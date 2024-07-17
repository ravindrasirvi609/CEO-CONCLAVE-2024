"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaBuilding } from "react-icons/fa";
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
      // Define payment gateway URLs
      const paymentUrls = {
        student: "https://rzp.io/l/buJcxni4L",
        teacher: "https://rzp.io/l/TuvjZq8",
        professional: "https://rzp.io/l/UajHcUkX",
        opfmembers: "https://rzp.io/l/ehBNiiGkh",
      };

      // Redirect to the appropriate payment gateway
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

  return (
    <section id="registration" className="py-20 bg-[#F9D689] px-4 md:px-0">
      <div className="container mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl font-bold text-center text-[#6c0707] mb-12"
        >
          Registration
        </motion.h2>
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-[#6c0707] mb-2">
              Name
            </label>
            <div className="flex items-center border-b border-[#E0A75E] py-2">
              <FaUser className="text-[#E0A75E] mr-2" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="appearance-none bg-transparent border-none w-full text-[#6c0707] mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#6c0707] mb-2">
              Email
            </label>
            <div className="flex items-center border-b border-[#E0A75E] py-2">
              <FaEnvelope className="text-[#E0A75E] mr-2" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="appearance-none bg-transparent border-none w-full text-[#6c0707] mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-[#6c0707] mb-2">
              Phone
            </label>
            <div className="flex items-center border-b border-[#E0A75E] py-2">
              <FaPhone className="text-[#E0A75E] mr-2" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="appearance-none bg-transparent border-none w-full text-[#6c0707] mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="affiliation" className="block text-[#6c0707] mb-2">
              Affiliation
            </label>
            <div className="flex items-center border-b border-[#E0A75E] py-2">
              <FaBuilding className="text-[#E0A75E] mr-2" />
              <input
                type="text"
                id="affiliation"
                name="affiliation"
                value={formData.affiliation}
                onChange={handleChange}
                required
                className="appearance-none bg-transparent border-none w-full text-[#6c0707] mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="registrationType"
              className="block text-[#6c0707] mb-2"
            >
              Registration Type
            </label>
            <select
              id="registrationType"
              name="registrationType"
              value={formData.registrationType}
              onChange={handleChange}
              required
              className="block w-full bg-white border border-[#E0A75E] text-[#6c0707] py-3 px-4 rounded leading-tight focus:outline-none focus:border-[#6c0707]"
            >
              <option value="student">Student (1770 ₹)</option>
              <option value="teacher">Academia (2500 ₹)</option>
              <option value="professional">
                Industry Professional (3500 ₹)
              </option>
              <option value="opfmembers">OPF Members (1500 ₹)</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#6c0707] hover:bg-[#E0A75E] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
            disabled={loading}
          >
            {loading ? "Redirecting..." : "Pay Now"}
          </button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default RegistrationSection;
