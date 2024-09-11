import React from "react";
import { User } from "lucide-react";
import Image from "next/image";

const speakers = [
  {
    name: "Dr. Madhu Nicholas",
    role: "Founder & CEO, Arobel Int. Pvt.Ltd.",
    image: "/Madhu.jpeg",
  },
  {
    name: "Asharaf K. Poil",
    role: "Managing Director, Wellcare Group, Qatar",
    image: "/Ashraf.jpeg",
  },
  {
    name: "Dr. Deepa Arora",
    role: "CEO, Clinexcel Life Science Private limited",
    image: "/Deepa.jpeg",
  },
  {
    name: "Dr. Pramod Kashid",
    role: "CEO, Expecto Health Science, Singapore",
    image: "/Pramod.jpeg",
  },
  {
    name: "Arjun Arora",
    role: "CMD, Sharva International & Research Pvt. Ltd., A PPP with CSIR IIIM Ministry  of Science & Technology, Govt. of India",
    image: "/Arjun.jpeg",
  },
  {
    name: "Mrs. Maharukh Rustomjee",
    role: "Founder, Chief Scientist & Managing Partner  of R&D, Amaterasu Lifesciecnes LLP, Mumbai",
    image: "/Maharukh.jpeg",
  },
  {
    name: "Ayub Shaikh",
    role: "Managing Director, Huntmetrics Private Limited",
    image: "/Ayub.jpeg",
  },
  {
    name: "Manish NN Vanvari",
    role: "CEO & Investor",
    image: "/Manish.jpeg",
  },
  {
    name: "Radhika Bajoria",
    role: "Founder, Radically Yours",
    image: "/Radhika.jpeg",
  },
  {
    name: "Dr. Rupali Paranjape",
    role: "Founder, Blue Ocean Compliance, Vadodara, Gujarat",
    image: "/Rupali.jpeg",
  },
];

const SpeakerCard = ({ name, role, image }: any) => (
  <div className="bg-[#F9D689] rounded-lg shadow-md p-6 flex flex-col items-center transition-transform hover:scale-105">
    {image ? (
      <Image
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mb-4 object-cover"
        width={128}
        height={128}
      />
    ) : (
      <User size={128} className="text-[#6c0707] mb-4" />
    )}
    <h3 className="text-[#6c0707] font-bold text-xl mb-2">{name}</h3>
    <p className="text-[#6c0707] text-center">{role}</p>
  </div>
);

const SpeakersSection = () => {
  return (
    <section className="py-16 bg-[#F5E7B2]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#6c0707] mb-12">
          Our Distinguished Speakers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} {...speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
