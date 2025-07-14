'use client'

import React from 'react'
import { FaWhatsapp, FaSnapchatGhost, FaTiktok, FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa'
import { useLanguage } from "../contexts/LanguageContext";
const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-5 m-auto bg-white flex items-center flex-col justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      <div className="flex justify-center space-x-8 mb-4 text-white text-2xl">
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-yellow-400 transition duration-300">
          <FaWhatsapp />
        </a>
        <a href="https://www.snapchat.com/" target="_blank" rel="noopener noreferrer" aria-label="Snapchat" className="hover:text-yellow-400 transition duration-300">
          <FaSnapchatGhost />
        </a>
        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-yellow-400 transition duration-300">
          <FaTiktok />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-yellow-400 transition duration-300">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-yellow-400 transition duration-300">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-yellow-400 transition duration-300">
          <FaFacebookF />
        </a>
      </div>
      <div className="text-white text-sm">
        {t('FidCorr')}
      </div>
    </footer>
  )
}

export default Footer
