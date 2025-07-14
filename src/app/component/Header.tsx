"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/app/images/logo.png";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const { t, language, setLanguage } = useLanguage();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setMobileMenuOpen(false);
  };

  const handleLanguageChange = (lang: "en" | "ar") => {
    setLanguage(lang);
  };

  return (
    <>
      <header className="">
        <nav className="fixed w-full bg-[#141c4e49] shadow-lg z-50 transition-colors duration-300 p-1">
          <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center space-x-2">
                <Link
                  href="/"
                  className="transition duration-300 flex items-center"
                  onClick={() => handleLinkClick("home")}
                >
                  <Image src={Logo} alt="Speed Rocket" className="w-28" />
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  href="#home"
                  className={`text-white text-sm font-medium transition duration-300 ${
                    activeLink === "home"
                      ? "border-b-2 border-blue-500"
                      : "hover:text-blue-400"
                  }`}
                  onClick={() => handleLinkClick("home")}
                >
                  {t("home")}
                </Link>
                <Link
                  href="#about"
                  className={`text-white text-sm font-medium transition duration-300 ${
                    activeLink === "about"
                      ? "border-b-2 border-blue-500"
                      : "hover:text-blue-400"
                  }`}
                  onClick={() => handleLinkClick("about")}
                >
                  {t("about")}
                </Link>
                <Link
                  href="#services"
                  className={`text-white text-sm font-medium transition duration-300 ${
                    activeLink === "services"
                      ? "border-b-2 border-blue-500"
                      : "hover:text-blue-400"
                  }`}
                  onClick={() => handleLinkClick("services")}
                >
                  {t("services")}
                </Link>

                <Link
                  href="#contact"
                  className={`text-white text-sm font-medium transition duration-300 ${
                    activeLink === "contact"
                      ? "border-b-2 border-blue-500"
                      : "hover:text-blue-400"
                  }`}
                  onClick={() => handleLinkClick("contact")}
                >
                  {t("contact")}
                </Link>
                <a
                  target="_blank"
                  href="http://wa.me/966502057206"
                  className="ml-6 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md text-white text-sm font-semibold hover:brightness-110 transition duration-300"
                >
                  {t("connect")}
                </a>
                {/* Language Switcher */}
                <div className="flex items-center">
                  <button
                    onClick={() =>
                      handleLanguageChange(language === "en" ? "ar" : "en")
                    }
                    className="ml-6 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md text-white text-sm font-semibold hover:brightness-110 transition duration-300"
                  >
                    {language === "en" ? "AR" : "EN"}
                  </button>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center space-x-2">
                {/* Mobile Language Switcher */}
                <div className="flex items-center mr-2">
                  <button
                    onClick={() =>
                      handleLanguageChange(language === "en" ? "ar" : "en")
                    }
                    className="px-4 py-1 rounded bg-blue-600 text-white hover:brightness-110 transition duration-300"
                  >
                    {language === "en" ? "AR" : "EN"}
                  </button>
                </div>
                <button
                  type="button"
                  id="mobile-menu-button"
                  aria-controls="mobile-menu"
                  aria-expanded={mobileMenuOpen}
                  onClick={toggleMobileMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#2a2f5a] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 transition duration-300"
                >
                  {/* Hamburger icon */}
                  <svg
                    className={`${mobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  {/* Close icon */}
                  <svg
                    className={`${mobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className={`${
              mobileMenuOpen ? "block" : "hidden"
            } md:hidden bg-[#0a0f2e] shadow-lg transition-all duration-300`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="#home"
                className={`block px-3 py-2 rounded-md text-base font-medium text-white transition duration-300 ${
                  activeLink === "home"
                    ? "border-b-2 border-blue-500"
                    : "hover:text-blue-400"
                }`}
                onClick={() => handleLinkClick("home")}
              >
                {t("home")}
              </Link>
              <Link
                href="#about"
                className={`block px-3 py-2 rounded-md text-base font-medium text-white transition duration-300 ${
                  activeLink === "about"
                    ? "border-b-2 border-blue-500"
                    : "hover:text-blue-400"
                }`}
                onClick={() => handleLinkClick("about")}
              >
                {t("about")}
              </Link>
              <Link
                href="#services"
                className={`block px-3 py-2 rounded-md text-base font-medium text-white transition duration-300 ${
                  activeLink === "services"
                    ? "border-b-2 border-blue-500"
                    : "hover:text-blue-400"
                }`}
                onClick={() => handleLinkClick("services")}
              >
                {t("services")}
              </Link>

              <Link
                href="#contact"
                className={`block px-3 py-2 rounded-md text-base font-medium text-white transition duration-300 ${
                  activeLink === "contact"
                    ? "border-b-2 border-blue-500"
                    : "hover:text-blue-400"
                }`}
                onClick={() => handleLinkClick("contact")}
              >
                {t("contact")}
              </Link>
              <a
                target="_blank"
                href="http://wa.me/966502057206"
                className="w-full mt-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md text-white text-sm font-semibold hover:brightness-110 transition duration-300"
              >
                {t("connect")}
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
