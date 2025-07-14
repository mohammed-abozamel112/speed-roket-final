'use client';

import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';

const ClientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <LanguageProvider>{children}</LanguageProvider>;
};

export default ClientProvider;
