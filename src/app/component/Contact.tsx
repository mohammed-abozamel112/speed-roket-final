"use client";
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const IconMapPin = () => (
  <svg
    className="h-6 w-6 text-white"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21c-4.418 0-8-5.373-8-10a8 8 0 1116 0c0 4.627-3.582 10-8 10zm0-10a2 2 0 100-4 2 2 0 000 4z"
    />
  </svg>
);

const IconPhone = () => (
  <svg
    className="h-6 w-6 text-white"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.47l.7 2.1a2 2 0 01-.45 2.11l-1.27 1.27a16.001 16.001 0 006.58 6.58l1.27-1.27a2 2 0 012.11-.45l2.1.7A2 2 0 0121 18.72V22a2 2 0 01-2 2h-1C7.82 24 3 19.18 3 13V5z"
    />
  </svg>
);

const IconMail = () => (
  <svg
    className="h-6 w-6 text-white"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const IconClock = () => (
  <svg
    className="h-6 w-6 text-white"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
  </svg>
);

const Contact: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const contactInfo = [
    {
      icon: IconMapPin,
      label: t("address"),
      value: t("addressValue"),
      color: "bg-red-500",
    },
    {
      icon: IconPhone,
      label: t("phone"),
      value: t("phoneValue"),
      color: "bg-green-500",
    },
    {
      icon: IconMail,
      label: t("email"),
      value: t("emailValue"),
      color: "bg-blue-500",
    },
    {
      icon: IconClock,
      label: "Working Hours",
      value: "24/7 Customer Support",
      color: "bg-orange-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 m-auto bg-white h-auto flex items-center w-full bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("contactTitle")}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t("contactSubtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                  >
                    <div
                      className={`${info.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                    >
                      <IconComponent />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {info.label}
                    </h3>
                    <p className="text-gray-600 text-sm">{info.value}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 text-white h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">{t("WhyUs")}</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div
                    className={`w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0 ${
                      isRTL ? "ml-2" : "mr-2"
                    }`}
                  ></div>
                  <div>
                    <h4 className="font-semibold mb-1">{t("GlobalNetWork")}</h4>
                    <p className="text-blue-100 text-sm">
                      {t("WorldwideShipping")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className={`w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0 ${
                      isRTL ? "ml-2" : "mr-2"
                    }`}></div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      {t("RealTimeTracking")}
                    </h4>
                    <p className="text-blue-100 text-sm">
                      {t("TrackYourShipments")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className={`w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0 ${
                      isRTL ? "ml-2" : "mr-2"
                    }`}></div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      {t("CompetitiveRates")}
                    </h4>
                    <p className="text-blue-100 text-sm">{t("BestPrices")}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className={`w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0 ${
                      isRTL ? "ml-2" : "mr-2"
                    }`}></div>
                  <div>
                    <h4 className="font-semibold mb-1">{t("ExpertSupport")}</h4>
                    <p className="text-blue-100 text-sm">
                      {t("ProfessionalTeam")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
