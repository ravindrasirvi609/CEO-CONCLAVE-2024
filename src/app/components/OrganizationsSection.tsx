"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaHandsHelping } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const OrganizationsSection: React.FC = () => {
  return (
    <section id="organizations" className="py-20 bg-[#F9D689] px-4 md:px-0">
      <div className="container mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl font-bold text-center text-[#6c0707] mb-12"
        >
          Organizing Bodies
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <div className="flex items-center mb-4">
                <FaHandsHelping className="text-3xl text-[#E0A75E] mr-4" />
                <h3 className="text-2xl font-semibold text-[#6c0707]">
                  Host: Operant Pharmacy Federation (OPF)
                </h3>
              </div>
              <p className="text-[#6c0707] mb-4">
                Operant Pharmacy Federation (OPF) aims to spread more about the
                Pharmacy Profession by organising different exhibitions,
                conferences, workshops, seminars, and camps. We feel proud that
                OPF is one of the internationally recognised easels for
                Biomedical and Pharmaceutical study.
              </p>
              <p className="text-[#6c0707] mb-4">
                With high-quality reviews, original research work, short
                communications, Ethics Forum, case report, Education Forum, and
                others, we aim to contribute our best efforts in the field of
                Pharmacy & Biomedical.
              </p>
              <p className="text-[#6c0707] mb-4">
                At OPF, we are working hard to create a positive impact in the
                field of global healthcare. We are focusing on research works,
                wellness, community pharmacy, along with the arrangement of
                national and international conventions, promotions of causes
                related to the pharmaceutical industry and ethical business
                practices, that are essential to ensure the success of our
                pharmacy profession.
              </p>
              <p className="text-[#6c0707]">
                We are extremely glad to help researchers in their dissertation
                works as we believe that all researchers are contributing
                equally to the field of Pharmacy and Biomedical. Our editors
                help them in their works and honour them for their efforts in
                the same field. The research papers are also made available
                online which helps students and other researchers in knowing
                more about the industry.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <div className="flex items-center mb-4">
                <FaUniversity className="text-3xl text-[#E0A75E] mr-4" />
                <h3 className="text-2xl font-semibold text-[#6c0707]">
                  Organizer: Dr. D. Y. Patil Institute of Pharmaceutical
                  Sciences & Research
                </h3>
              </div>
              <p className="text-[#6c0707] mb-4">
                Dr. D. Y. Patil Institute of Pharmaceutical Sciences & Research
                is a premier institution dedicated to excellence in
                pharmaceutical education and research.
              </p>
              <p className="text-[#6c0707] mb-4">
                With state-of-the-art facilities and a team of experienced
                faculty members, the institute provides a conducive environment
                for learning and innovation in the field of pharmacy.
              </p>
              <p className="text-[#6c0707]">
                The institute is committed to producing skilled professionals
                who can contribute significantly to the pharmaceutical industry
                and healthcare sector.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationsSection;
