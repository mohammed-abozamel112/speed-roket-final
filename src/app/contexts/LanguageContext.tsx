"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",

    // Hero Section
    heroSub: "Speed Rocket Company",
    heroTitle: "Speed Rocket Company",
    heroSubtitle:
      "Reliable, Fast, and Secure Transportation Services Worldwide",
    heroDescription:
      "We provide comprehensive logistics solutions for businesses of all sizes. From air freight to ocean shipping, our expert team ensures your cargo reaches its destination safely and on time.",
    getQuote: "Get Quote",
    ourServices: "Our Services",

    // Services
    servicesTitle: "Our Services",
    servicesSubtitle:
      "Comprehensive logistics solutions tailored to your needs",

    airFreight: "Air Freight",
    airFreightDesc:
      "Fast and reliable air cargo services for urgent shipments worldwide.",

    oceanFreight: "Ocean Freight",
    oceanFreightDesc:
      "Cost-effective sea freight solutions for large volume shipments.",

    landTransport: "Land Transport",
    landTransportDesc: "Efficient ground transportation and trucking services.",

    warehousing: "Warehousing",
    warehousingDesc: "Secure storage and distribution center management.",

    customsClearance: "Customs Clearance",
    customsClearanceDesc:
      "Expert customs brokerage and documentation services.",

    supplyChain: "Supply Chain",
    supplyChainDesc: "End-to-end supply chain management and optimization.",

    // About
    aboutTitle: "About Our Company",
    aboutSubtitle: "Leading the way in global logistics",
    aboutDescription:
      "With over 20 years of experience in the shipping and logistics industry, we have built a reputation for excellence and reliability. Our team of experts works around the clock to ensure your cargo is delivered safely and on time.",

    yearsExperience: "Years Experience",
    happyClients: "Happy Clients",
    deliveredPackages: "Delivered Packages",
    globalOffices: "Global Offices",

    // Contact
    contactTitle: "Contact Us",
    contactSubtitle: "Get in touch for a free consultation",

    address: "Address",
    addressValue: "123 Logistics Street, Shipping District, Dubai, UAE",
    phone: "Phone",
    phoneValue: "+971 4 123 4567",
    email: "Email",
    emailValue: "info@shippingco.com",
    WhyUs:"Why Choose Us?",    
    GlobalNetWork:"Global Network",    
    WorldwideShipping:"Worldwide shipping coverage with local expertise",    
    RealTimeTracking:"Real-time Tracking",    
    TrackYourShipments:"Track your shipments 24/7 with our advanced system",    
    CompetitiveRates:"Competitive Rates",    
    BestPrices:"Best prices without compromising on quality",    
    ExpertSupport:"Expert Support",    
    ProfessionalTeam:"Professional team ready to assist you anytime",    

    // Footer
    footerDescription:
      "Your trusted partner for global shipping and logistics solutions. We deliver excellence in every shipment.",
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved.",
    FidCorr:"© 2025 FID. All rights reserved. Designed by FID Company",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    services: "الخدمات",
    about: "من نحن",
    contact: "اتصل بنا",
   

    // Hero Section
    heroTitle: "شركة سبيد روكيت",
    heroSub: "شركة سبيد روكيت",
    heroSubtitle: "خدمات نقل موثوقة وسريعة وآمنة في جميع أنحاء العالم",
    heroDescription:
      "نحن نقدم حلول لوجستية شاملة للشركات من جميع الأحجام. من الشحن الجوي إلى الشحن البحري، يضمن فريق الخبراء لدينا وصول بضائعك إلى وجهتها بأمان وفي الوقت المحدد.",
    getQuote: "احصل على عرض سعر",
    ourServices: "خدماتنا",

    // Services
    servicesTitle: "خدماتنا",
    servicesSubtitle: "حلول لوجستية شاملة مصممة خصيصاً لاحتياجاتك",

    airFreight: "الشحن الجوي",
    airFreightDesc:
      "خدمات شحن جوي سريعة وموثوقة للشحنات العاجلة في جميع أنحاء العالم.",

    oceanFreight: "الشحن البحري",
    oceanFreightDesc: "حلول شحن بحري فعالة من حيث التكلفة للشحنات كبيرة الحجم.",

    landTransport: "النقل البري",
    landTransportDesc: "خدمات نقل بري وشاحنات فعالة.",

    warehousing: "التخزين",
    warehousingDesc: "إدارة التخزين الآمن ومراكز التوزيع.",

    customsClearance: "التخليص الجمركي",
    customsClearanceDesc: "خدمات وساطة جمركية ووثائق متخصصة.",

    supplyChain: "سلسلة التوريد",
    supplyChainDesc: "إدارة وتحسين سلسلة التوريد من البداية إلى النهاية.",

    // About
    aboutTitle: "عن شركتنا",
    aboutSubtitle: "نقود الطريق في اللوجستيات العالمية",
    aboutDescription:
      "مع أكثر من 20 عاماً من الخبرة في صناعة الشحن واللوجستيات، بنينا سمعة للتميز والموثوقية. يعمل فريق الخبراء لدينا على مدار الساعة لضمان تسليم بضائعك بأمان وفي الوقت المحدد.",

    yearsExperience: "سنوات من الخبرة",
    happyClients: "عملاء سعداء",
    deliveredPackages: "طرود تم تسليمها",
    globalOffices: "مكاتب عالمية",
    

    // Contact
    contactTitle: "اتصل بنا",
    contactSubtitle: "تواصل معنا للحصول على استشارة مجانية",

    address: "العنوان",
    addressValue:
      "123 شارع اللوجستيات، منطقة الشحن، دبي، الإمارات العربية المتحدة",
    phone: "الهاتف",
    phoneValue: "+971 4 123 4567",
    email: "البريد الإلكتروني",
    emailValue: "info@shippingco.com",
    WhyUs:"لماذا تختارنا؟",    
    GlobalNetWork:"شبكة عالمية",    
    WorldwideShipping:"تغطية شحن عالمية بخبرة محلية",    
    RealTimeTracking:"تتبع فوري",    
    TrackYourShipments:"تتبع شحناتك على مدار الساعة طوال أيام الأسبوع مع نظامنا المتطور",    
    CompetitiveRates:"أسعار تنافسية",    
    BestPrices:"أفضل الأسعار دون المساومة على الجودة",    
    ExpertSupport:"دعم الخبراء",    
    ProfessionalTeam:"فريق محترف جاهز لمساعدتك في أي وقت", 

    // Footer
    footerDescription:
      "شريكك الموثوق لحلول الشحن واللوجستيات العالمية. نحن نقدم التميز في كل شحنة.",
    quickLinks: "روابط سريعة",
    followUs: "تابعنا",
    allRightsReserved: "جميع الحقوق محفوظة.",
    FidCorr:"© 2025 FID.جميع حقوق النشر محفوظه لشركة فيد للتسويق والبرمجيات",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? "rtl" : "ltr"} className={isRTL ? "font-arabic" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};
