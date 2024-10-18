import React from "react";
import { User } from "lucide-react";
import Image from "next/image";

const speakers = [
  {
    name: "Mr. Harish K. Jain",
    role: "President FOPE & Director - Embiotic Laboratories (P) Ltd.",
    image: "/harish.jpeg",
  },
  {
    name: "Dr. Madhu Nicholas",
    role: "Founder & CEO, Arobel Int. Pvt.Ltd.",
    image: "/Madhu.jpeg",
  },
  {
    name: "Dr. Deepa Arora",
    role: "CEO, Clinexcel Life Science Private limited",
    image: "/Deepa.jpeg",
  },
  {
    name: "Mr. Manoj Krishna",
    role: "Founder & Director, Crozair Technicea Pvt. Ltd., Mumbai",
    image: "/manoj.jpg",
  },
  {
    name: "Dr. K. Someshwar",
    role: "Co-Founder & Director, Bell Pharmaceuticals",
    image: "/someshwar.jpeg",
  },
  {
    name: "Mr. Chandan Bhar",
    role: "Owner, B&BIP",
    image: "/chandan.jpeg",
  },
  {
    name: "Mr. Sadanand Shetty",
    role: "Founder, Sindhu Organics",
    image: "/Sadanand.jpeg",
  },
  {
    name: "Mr. Muralidhar N Ingale",
    role: "Director at Valeshvar Biotech Pvt. Limited",
    image: "/murlidhar.jpg",
  },
  {
    name: "Dr. Vaishali Tawde",
    role: "Ex. Managing Director, Ideal Cures",
    image: "/vaishali.jpeg",
  },
  {
    name: "Dr. Pramod Kashid",
    role: "CEO, Expecto Health Science, Singapore",
    image: "/pramod.jpeg",
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
    name: "Mr. Amit Panchal",
    role: "Founder & CEO, DOW ENGIFAB LLP",
    image: "/Amit.jpeg",
  },
  {
    name: "Dr. Rupali Paranjape",
    role: "Founder, Blue Ocean Compliance, Vadodara, Gujarat",
    image: "/Rupali.jpeg",
  },
  {
    name: "Dr. Sanjay Gade",
    role: "Co-founder, Proexp Pharma Pvt. Ltd.",
    image: "/SanjayGade.jpeg",
  },
  {
    name: "Dr. Satya Vadlamani",
    role: "CMD, Murlikrishna Pharm Private Limited",
    image: "/satya.jpg",
  },
  {
    name: "Mr. Debasish M Banerjee",
    role: "Managing Partner at Infusion Pharma Solutions",
    image: "/debashish.webp",
  },

  {
    name: "Mr. Vipul Kumar",
    role: "Co-Founder & Director, Genexis Biotech Pvt. Ltd.",
    image: "/vipul.jpeg",
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
