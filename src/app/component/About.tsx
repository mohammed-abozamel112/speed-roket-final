"use client";

import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Image from "next/image";
import AboutImg from "@/app/images/about.webp";

const StatIcon: React.FC<{ type: string; className?: string }> = ({
  type,
  className,
}) => {
  // Simple SVG icons as replacements
  switch (type) {
    case "award":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 13v7M9 20l3-3 3 3"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
    case "users":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="8" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
          <circle cx="16" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
          <path
            d="M2 20c0-3 4-5 6-5s6 2 6 5"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
    case "package":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect
            x="3"
            y="7"
            width="18"
            height="10"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M3 7l9 5 9-5" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "globe":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="6"
            ry="10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M2 12h20" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    default:
      return null;
  }
};

const About: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const stats = [
    {
      icon: "award",
      number: "20+",
      label: t("yearsExperience"),
      color: "text-blue-600",
    },
    {
      icon: "users",
      number: "5000+",
      label: t("happyClients"),
      color: "text-green-600",
    },
    {
      icon: "package",
      number: "1M+",
      label: t("deliveredPackages"),
      color: "text-orange-600",
    },
    {
      icon: "globe",
      number: "50+",
      label: t("globalOffices"),
      color: "text-purple-600",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 m-auto min-h-screen flex items-center relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {t("aboutTitle")}
            </h2>

            <p className="text-`lg text-gray-400 mb-4 leading-relaxed">
              {t("aboutDescription")}
            </p>
            <p className="text-lg text-gray-400 mb-4 leading-relaxed">
              {t("aboutDiscription2")}
            </p>
            <h3 className="text-3xl font-semibold text-gray-300 mb-3">
              {t("aboutVision")}
            </h3>
            <p className="text-lg text-gray-400 mb-4 leading-relaxed">
              {t("aboutVisionDescription")}
            </p>
            <h3 className="text-3xl font-semibold text-gray-300 mb-3">
              {t("aboutMission")}
            </h3>
            <p className="text-lg text-gray-400 mb-4 leading-relaxed">
              {t("aboutMissionDescription")}
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 text-gray-700 hover:text-gray-100 rounded-lg bg-gray-50 hover:bg-gray-500 transition-colors"
                >
                  <StatIcon
                    type={stat.icon}
                    className={`h-8 w-8 ${stat.color} mx-auto mb-2`}
                  />
                  <div className="text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3">
              <Image
                src={AboutImg}
                alt="Logistics operations"
                className="rounded-lg shadow-lg object-cover w-full max-h-[400px] md:max-h-[480px]"
              />
            </div>
            <div className="absolute bottom-0 left-0 md:-bottom-6 md:-left-6 bg-blue-600 text-white p-4 md:p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-semibold font-bold">24/7</div>
              <div className="text-sm">
                {isRTL ? "دعم فني" : "Customer Support"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
