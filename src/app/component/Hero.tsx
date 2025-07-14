"use client";
import React, { Fragment } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { Engine } from "@tsparticles/engine";
import { useLanguage } from "../contexts/LanguageContext";
import Logo from "@/app/images/logo.png";
import Image from "next/image";

const Hero: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  const particlesOptions = {
    fullScreen: { enable: false },
    particles: {
      number: {
        value: 80,
        density: { enable: true, value_area: 800 },
      },
      color: { value: "#3b82f6" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: true, speed: 2, size_min: 0.1, sync: false },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#3b82f6",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        outModes: "out",
        bounce: false,
        attract: { enable: true, rotateX: 600, rotateY: 1200 },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "push" },
          resize: { enable: true, delay: 0 },
        },
        modes: {
          grab: { distance: 140, links: { opacity: 1 } },
          push: { quantity: 4 },
        },
      },
    },
    retina_detect: true,
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Fragment>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
      >
        {/* Particle Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}
          />
        </div>

        {/* Floating 3D Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/20 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-orange-500/20 filter blur-3xl animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center py-24">
          <div className={`text-center md:text-${isRTL ? "right" : "left"}`}>
            <div className="inline-flex items-center mb-6 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full group hover:shadow-lg transition-all duration-500">
              <Image src={Logo} alt={t('heroSub')} className="w-10"/>
              <span className="text-sm font-medium text-blue-300 group-hover:text-blue-100 transition-colors duration-300">
                {t('heroSub')}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              <span className="block">
                {t("heroTitle").split(" ").slice(0, 2).join(" ")}
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 bg-[length:200%] bg-clip-text text-transparent animate-pulse">
                {t("heroTitle").split(" ").slice(2).join(" ")}
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-blue-200 mb-6">
              {t("heroSubtitle")}
            </h2>

            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              {t("heroDescription")}
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center ${
                isRTL ? "md:justify-end" : "md:justify-start"
              } ${isRTL ? "sm:flex-row-reverse" : ""}`}
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg font-medium group overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-orange-500/25 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center text-white">
                  {t("getQuote")}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-lg font-medium border border-transparent hover:border-white/30 hover:shadow-lg transition-all duration-500 text-white flex items-center justify-center"
              >
                {t("ourServices")}
              </button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto md:mx-0">
              <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl hover:-translate-y-2 transition-transform duration-300 hover:shadow-lg border border-white/10">
                <div className="text-blue-400 mb-2 flex justify-center"></div>
                <h3 className="font-semibold text-white text-sm text-center">
                  {isRTL ? "سرعة البرق" : "Lightning Fast"}
                </h3>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl hover:-translate-y-2 transition-transform duration-300 hover:shadow-lg border border-white/10">
                <div className="text-orange-400 mb-2 flex justify-center"></div>
                <h3 className="font-semibold text-white text-sm text-center">
                  {isRTL ? "آمن" : "Secure"}
                </h3>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl hover:-translate-y-2 transition-transform duration-300 hover:shadow-lg border border-white/10">
                <div className="text-cyan-400 mb-2 flex justify-center"></div>
                <h3 className="font-semibold text-white text-sm text-center">
                  {isRTL ? "مبتكر" : "Innovative"}
                </h3>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            {/* Main 3D Card */}
            <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-1 w-full h-96 transform transition-transform duration-700 hover:scale-105">
              <div className="relative h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-80 hover:opacity-100 transition-opacity duration-500"
                  style={{
                    backgroundImage:
                      'url("https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920")',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent"></div>

                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="grid grid-cols-2 gap-4 text-white text-center">
                      <div>
                        <div className="text-2xl font-bold text-orange-400">
                          20+
                        </div>
                        <div className="text-xs text-gray-300">
                          {t("yearsExperience")}
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-400">
                          5000+
                        </div>
                        <div className="text-xs text-gray-300">
                          {t("happyClients")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-500/10 rounded-full backdrop-blur-sm border border-blue-400/20 animate-bounce"></div>
            <div
              className="absolute -bottom-8 -right-8 w-24 h-24 bg-orange-500/10 rounded-full backdrop-blur-sm border border-orange-400/20 animate-bounce"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

       
      </section>
    </Fragment>
  );
};

export default Hero;
