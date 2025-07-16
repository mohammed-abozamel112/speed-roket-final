"use client";

import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Image from "next/image";
import ServicesPerson from "./ServicesPerson";
// Replace lucide-react icons with simple SVGs or placeholders
const PlaneIcon = () => (
  <svg
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      d="M2 16l20-5-20-5v4l15 1-15 1v4z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ShipIcon = () => (
  <svg
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      d="M3 20l9-16 9 16H3z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const TruckIcon = () => (
  <svg
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <rect
      x="1"
      y="7"
      width="15"
      height="10"
      rx="2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="6"
      cy="19"
      r="2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="18"
      cy="19"
      r="2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 7v-4h4v4"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const WarehouseIcon = () => (
  <svg
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <rect
      x="3"
      y="10"
      width="18"
      height="11"
      rx="2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 10V7l9-4 9 4v3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const FileTextIcon = () => (
  <svg
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="8"
      y1="8"
      x2="16"
      y2="8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="8"
      y1="12"
      x2="16"
      y2="12"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="8"
      y1="16"
      x2="12"
      y2="16"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.24.72 3.32a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.08.35 2.19.59 3.32.72a2 2 0 0 1 1.72 2z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg
    className={`w-3 h-3 ${
      filled ? "text-yellow-400 fill-current" : "text-gray-400"
    }`}
    fill={filled ? "currentColor" : "none"}
    viewBox="0 0 20 20"
  >
    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
  </svg>
);
const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <circle
      cx="9"
      cy="7"
      r="4"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="17"
      cy="7"
      r="4"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23 21v-2a4 4 0 0 0-3-3.87"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Services: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: PlaneIcon,
      title: t("Consultations"),
      description: t("ConsultationsDesc"),
      ConsultationsModelDesc: t("ConsultationsModelDesc"),
      ConsultationsModelDesc1: t("ConsultationsModelDesc1"),
      ConsultationsModelDesc2: t("ConsultationsModelDesc2"),
      ConsultationsModelDesc3: t("ConsultationsModelDesc3"),
      image:
        "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      reviews: "2.1K",
      status: isRTL ? "متاح" : "Available",
      statusColor: "bg-green-500",
      gradient: "from-blue-600/20 to-cyan-600/20",
    },
    {
      icon: ShipIcon,
      title: t("Export"),
      description: t("ExportDesc"),
      ExportModelDesc: t("ExportModelDesc"),
      ExportModelDesc1: t("ExportModelDesc1"),
      ExportModelDesc2: t("ExportModelDesc2"),
      ExportModelDesc3: t("ExportModelDesc3"),
      ExportModelDesc4: t("ExportModelDesc4"),
      ExportModelDesc5: t("ExportModelDesc5"),
      ExportModelDesc6: t("ExportModelDesc6"),
      image:
        "https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      reviews: "3.2K",
      status: isRTL ? "متاح" : "Available",
      statusColor: "bg-green-500",
      gradient: "from-cyan-600/20 to-blue-600/20",
    },
    {
      icon: TruckIcon,
      title: t("Shipping"),
      description: t("ShippingDesc"),
      ShippingModelDesc: t("ShippingModelDesc"),
      ShippingModelDesc1: t("ShippingModelDesc1"),
      ShippingModelDesc2: t("ShippingModelDesc2"),
      ShippingModelDesc3: t("ShippingModelDesc3"),
      ShippingModelDesc4: t("ShippingModelDesc4"),
      ShippingModelDesc5: t("ShippingModelDesc5"),
      ShippingModelDesc6: t("ShippingModelDesc6"),
      image:
        "https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      reviews: "1.8K",
      status: isRTL ? "متاح" : "Available",
      statusColor: "bg-green-500",
      gradient: "from-green-600/20 to-emerald-600/20",
    },
    {
      icon: WarehouseIcon,
      title: t("AirFreight"),
      description: t("warehousingDesc"),
      AirFreightModelDesc: t("AirFreightModelDesc"),
      image:
        "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.6,
      reviews: "1.5K",
      status: isRTL ? "متاح" : "Available",
      statusColor: "bg-green-500",
      gradient: "from-purple-600/20 to-pink-600/20",
    },
    {
      icon: FileTextIcon,
      title: t("customsClearance"),
      description: t("customsClearanceDesc"),
      customsClearanceModelDesc: t("customsClearanceModelDesc"),
      customsClearanceModelDesc1: t("customsClearanceModelDesc1"),
      customsClearanceModelDesc2: t("customsClearanceModelDesc2"),
      customsClearanceModelDesc3: t("customsClearanceModelDesc3"),
      customsClearanceModelDesc4: t("customsClearanceModelDesc4"),
      image:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      reviews: "2.3K",
      status: isRTL ? "متاح" : "Available",
      statusColor: "bg-green-500",
      gradient: "from-orange-600/20 to-red-600/20",
    }
  ];

  const [selectedServiceIndex, setSelectedServiceIndex] = useState<
    number | null
  >(null);

  const openModal = (index: number) => {
    setSelectedServiceIndex(index);
  };

  const closeModal = () => {
    setSelectedServiceIndex(null);
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="py-20 w-full relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="block">{t("servicesTitle")}</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t("servicesSubtitle")}
          </p>
        </div>
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-6 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full">
            <div
              className={`w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse  ${
                isRTL ? "ml-2" : "mr-2"
              }`}
            ></div>
            <span className="text-sm font-medium text-blue-300">
              {t("companyServiceTitle")}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="block">{t("companyServiceTitle")}</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t("companyServiceSubTitle")}
          </p>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t("companyServiceDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group relative">
                {/* Main Card */}
                <div
                  onClick={() => openModal(index)}
                  className="relative bg-white/5 backdrop-blur-md rounded-3xl p-1 h-full cursor-pointer transform transition-all duration-700 hover:scale-105 hover:rotate-1 border border-white/10"
                >
                  <div
                    className={`relative h-full bg-gradient-to-br ${service.gradient} rounded-2xl overflow-hidden`}
                  >
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>

                    {/* Content */}
                    <div className="relative z-10 p-6 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <div
                            className={`w-3 h-3 ${service.statusColor} rounded-full animate-pulse`}
                          ></div>
                          <span className="text-white text-sm font-medium">
                            {service.status}
                          </span>
                        </div>
                        <button className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                          <div className="grid grid-cols-2 gap-0.5">
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                          </div>
                        </button>
                      </div>

                      {/* Service Icon */}
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent />
                        </div>
                      </div>

                      {/* Service Info */}
                      <div className="flex-grow">
                        <div className="flex items-center mb-2">
                          <h3 className="text-xl font-bold text-white mr-2">
                            {service.title}
                          </h3>
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center mb-4">
                          <div className="flex items-center mr-4">
                            <span className="text-white font-semibold mr-1">
                              {service.rating}
                            </span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <StarIcon
                                  key={i}
                                  filled={i < Math.floor(service.rating)}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center text-gray-300 text-sm">
                            <UsersIcon className="w-3 h-3 mr-1" />
                            {service.reviews}
                          </div>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollToContact();
                        }}
                        className="w-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 rounded-xl py-3 px-4 text-white font-medium transition-all duration-300 flex items-center justify-center group-hover:shadow-lg"
                      >
                        <PhoneIcon
                          className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`}
                        />
                        {t("getQuote")}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div
                  className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ transitionDelay: "200ms" }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedServiceIndex !== null && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 rounded-2xl max-w-lg w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-400"
              aria-label="Close modal"
            >
              &times;
            </button>
            {(() => {
              const service = services[selectedServiceIndex];
              const IconComponent = service.icon;
              return (
                <>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                      <IconComponent />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={800}
                    className="rounded-lg mb-4 w-full h-auto object-cover max-h-64"
                  />
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  {/* Render additional modal description fields */}
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
                    {service.ConsultationsModelDesc && (
                      <li>{service.ConsultationsModelDesc}</li>
                    )}
                    {service.ConsultationsModelDesc1 && (
                      <li>{service.ConsultationsModelDesc1}</li>
                    )}
                    {service.ConsultationsModelDesc2 && (
                      <li>{service.ConsultationsModelDesc2}</li>
                    )}
                    {service.ConsultationsModelDesc3 && (
                      <li>{service.ConsultationsModelDesc3}</li>
                    )}

                    {service.ExportModelDesc && (
                      <li>{service.ExportModelDesc}</li>
                    )}
                    {service.ExportModelDesc1 && (
                      <li>{service.ExportModelDesc1}</li>
                    )}
                    {service.ExportModelDesc2 && (
                      <li>{service.ExportModelDesc2}</li>
                    )}
                    {service.ExportModelDesc3 && (
                      <li>{service.ExportModelDesc3}</li>
                    )}
                    {service.ExportModelDesc4 && (
                      <li>{service.ExportModelDesc4}</li>
                    )}
                    {service.ExportModelDesc5 && (
                      <li>{service.ExportModelDesc5}</li>
                    )}
                    {service.ExportModelDesc6 && (
                      <li>{service.ExportModelDesc6}</li>
                    )}

                    {service.ShippingModelDesc && (
                      <li>{service.ShippingModelDesc}</li>
                    )}
                    {service.ShippingModelDesc1 && (
                      <li>{service.ShippingModelDesc1}</li>
                    )}
                    {service.ShippingModelDesc2 && (
                      <li>{service.ShippingModelDesc2}</li>
                    )}
                    {service.ShippingModelDesc3 && (
                      <li>{service.ShippingModelDesc3}</li>
                    )}
                    {service.ShippingModelDesc4 && (
                      <li>{service.ShippingModelDesc4}</li>
                    )}
                    {service.ShippingModelDesc5 && (
                      <li>{service.ShippingModelDesc5}</li>
                    )}
                    {service.ShippingModelDesc6 && (
                      <li>{service.ShippingModelDesc6}</li>
                    )}

                    {service.AirFreightModelDesc && (
                      <li>{service.AirFreightModelDesc}</li>
                    )}

                    {service.customsClearanceModelDesc && (
                      <li>{service.customsClearanceModelDesc}</li>
                    )}
                    {service.customsClearanceModelDesc1 && (
                      <li>{service.customsClearanceModelDesc1}</li>
                    )}
                    {service.customsClearanceModelDesc2 && (
                      <li>{service.customsClearanceModelDesc2}</li>
                    )}
                    {service.customsClearanceModelDesc3 && (
                      <li>{service.customsClearanceModelDesc3}</li>
                    )}
                    {service.customsClearanceModelDesc4 && (
                      <li>{service.customsClearanceModelDesc4}</li>
                    )}
                  </ul>
                  <div className="flex items-center mb-4">
                    <span className="text-white font-semibold mr-2">
                      {service.rating}
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          filled={i < Math.floor(service.rating)}
                        />
                      ))}
                    </div>
                    <span className="text-gray-300 ml-4">
                      {service.reviews} reviews
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      closeModal();
                      scrollToContact();
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 px-4 font-medium transition-all duration-300"
                  >
                    {t("getQuote")}
                  </button>
                </>
              );
            })()}
          </div>
        </div>
      )}
      <ServicesPerson/>
    </section>
  );
};

export default Services;
