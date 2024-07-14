"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ContactSection: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    try {
      const response = await axios.post("api/contact", {
        name,
        email,
        phone,
        message,
      });
      setSuccess("Message sent successfully!");
      console.log(response.data);
    } catch (error) {
      setError("Failed to send message. Please try again later.");
      console.error("API call failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl font-bold text-center text-[#6c0707] mb-12"
        >
          Contact Us
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-semibold text-[#6c0707] mb-4">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[#6c0707] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-[#E0A75E] rounded text-[#6c0707]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#6c0707] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-[#E0A75E] rounded text-[#6c0707]"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[#6c0707] mb-2">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-3 py-2 border border-[#E0A75E] rounded text-[#6c0707]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#6c0707] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-3 py-2 border border-[#E0A75E] rounded text-[#6c0707]"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#6c0707] text-white px-6 py-3 rounded-lg hover:bg-[#E0A75E] transition duration-300"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {error && <p className="text-red-500 mt-4">{error}</p>}
              {success && <p className="text-green-500 mt-4">{success}</p>}
            </form>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-[#6c0707] mb-4">
              Contact Information
            </h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <FaEnvelope className="text-[#E0A75E] mr-2" />
                <span>admin@opf.org.in</span>
              </p>
              <p className="flex items-center">
                <FaPhone className="text-[#E0A75E] mr-2" />
                <span>+91 1234567890</span>
              </p>
              <p className="flex items-center">
                <FaMapMarkerAlt className="text-[#E0A75E] mr-2" />
                <span>DPU Convention Center, Pune, India</span>
              </p>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-[#6c0707] mb-2">
                Location
              </h4>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d292616.0608921434!2d73.61076341031121!3d18.90313902816384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8612b48fd3f%3A0xf080ec8435d265c6!2sDr.%20D.%20Y.%20Patil%20Vidyapeeth%2C%20Pune!5e0!3m2!1sen!2sin!4v1720938087480!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
