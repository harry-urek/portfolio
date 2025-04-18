"use client";

import { GraduationCap, Calendar } from 'lucide-react';

interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  gpa: string;
}

const educationItems: EducationItem[] = [
  {
    institution: "Siksha O Anusandhan University, ITER",
    degree: "Bachelor of Engineering in Computer Science",
    location: "Bhubaneshwar, Odisha, India",
    period: "Sep. 2021 - June 2025",
    gpa: "GPA: 3.1, CGPA(7.91/10.0)"
  },
  {
    institution: "Indian Institute Of Technology-Madras",
    degree: "Bachelor of Science in Data Science",
    location: "Chennai, Tamil Nadu, India",
    period: "Aug. 2023 - Dec. 2027",
    gpa: "GPA: 3.0, CGPA(7.56/10.0)"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Education</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          My academic background in Computer Science and Data Science
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-gray-200 pl-10 py-4">
          {educationItems.map((item, index) => (
            <div key={index} className="mb-12 relative">
              <div className="absolute -left-12 top-0 bg-black p-2 rounded-full text-white">
                <GraduationCap size={20} />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-black/5">
                <h3 className="text-xl font-bold mb-1">{item.institution}</h3>
                <h4 className="text-lg font-medium text-gray-800 mb-2">{item.degree}</h4>
                <div className="flex items-center text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{item.period}</span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <p className="text-gray-600">{item.location}</p>
                  <p className="mt-1 md:mt-0 font-medium text-black">{item.gpa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 