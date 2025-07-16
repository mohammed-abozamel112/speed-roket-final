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
    /* company services */
    companyServiceTitle: "Corporate & Trader Services",
    companyServiceSubTitle:
      "Close deals from anywhere—maximize profits with minimal costs",
    companyServiceDescription:
      "At Speed Rocket, we understand the importance of your business success. We provide detailed market analysis, reliable sourcing data, and strong networking support with trusted suppliers, factories, and regulatory bodies across industries—helping you make informed import/export decisions with confidence.",
    Consultations: "Professional Consultations & Custom Quotations",
    ConsultationsDesc: "Expert advisory in agriculture, industry, and trade.",
    ConsultationsDesc2:
      "Our specialists provide tailored sourcing advice, competitive supplier quotes, and end-to-end logistics support. We analyze your needs, recommend the best suppliers in China, and deliver cost-effective, high-quality solutions—from shipping to Saudi customs clearance.",
    ConsultationsModelDesc: "Detailed demand analysis",
    ConsultationsModelDesc1: "Reliable supplier shortlisting",
    ConsultationsModelDesc2: "Best pricing & quality assurance",
    ConsultationsModelDesc3: "Door-to-door shipping & customs clearance in KSA",
    Export: "Global Export Solutions",
    ExportDesc:
      "Expand into international markets with professional export support.",
    ExportModelDesc: "We help businesses boost export capabilities through:",
    ExportModelDesc1: "Market segmentation & demand analysis",
    ExportModelDesc2: "Market-entry strategy & positioning",
    ExportModelDesc3: "Compliance with customs & trade regulations",
    ExportModelDesc4: "Quotation preparation, samples & factory visits",
    ExportModelDesc5: "Quality control, shipping & Incoterms guidance",
    ExportModelDesc6: "Financial transactions & risk management",
    Shipping: "Ocean Freight Solutions",
    ShippingDesc: "Flexible, end-to-end LCL & FCL shipping for all cargo types",
    ShippingModelDesc:
      "Whether full-container (FCL) or loose cargo (LCL), import or export—we provide reliable sea freight services covering every logistics step:",
    ShippingModelDesc1: "Worldwide shipping routes",
    ShippingModelDesc2: "Consolidation services",
    ShippingModelDesc3: "Door-to-door customs clearance",
    ShippingModelDesc4: "Documentation & customs handling",
    ShippingModelDesc5: "Real-time cargo tracking",
    ShippingModelDesc6: "Cargo insurance options",
    AirFreight: "Air Cargo Solutions",
    warehousingDesc: "Fast, efficient, and precise global air shipping",
    AirFreightModelDesc:
      "Time-sensitive shipments? We offer priority air freight for imports/exports with same-day dispatch and full logistics coordination.",
    customsClearance: "Saudi Customs Clearance",
    customsClearanceDesc:
      "Fastest manual & electronic customs clearance in Saudi Arabia",
    customsClearanceModelDesc:
      "Customs is the most critical stage of importing—our legal and technical experts streamline Saudi customs procedures with:",
    customsClearanceModelDesc1:
      "Document preparation (commercial invoices, COO, etc.)",
    customsClearanceModelDesc2: "Direct liaison with customs officials",
    customsClearanceModelDesc3: "Swift clearance processing",
    customsClearanceModelDesc4: "Legal & technical advisory",

    // service for persons
    ServiceForPerson: "Personal Import Services",
    ServiceForPersonSubTitle:
      "Import from China at wholesale prices – customize your order & save big",
    ServiceForPersonDescription:
      "Want to buy high-quality products from China at wholesale prices without the hassle? Speed Rocket’s personal import service offers a seamless, professional experience—whether you’re a first-time buyer or a startup owner. We handle every step for you: from sourcing reliable suppliers to door-to-door delivery in Saudi Arabia and GCC countries.",
    decoration: "Building Materials & Interior Decor",
    decorationDesc: "Source all interior/exterior finishes from China",
    decorationDesc2:
      "Flooring, lighting, ceramics, facades, paints – modern decor pieces & unique designs",
    decorationImage: "https://cdn.pixabay.com/photo/2024/12/24/10/04/kitchen-9288111_1280.jpg",
    furniture: "Custom Furniture Import",
    furnitureDesc: "Choose furniture tailored to your taste & budget",
    furnitureDesc2:
      "Home, office, and hotel furniture – custom designs, premium materials, high-quality craftsmanship",
    furnitureImage: "https://cdn.pixabay.com/photo/2019/03/08/20/17/kitchen-4043098_1280.jpg",
    accessories: "Cars & Auto Parts",
    accessoriesDesc: "Import new or used vehicles from China",
    accessoriesDesc2:
      "Genuine spare parts & car accessories with quality assurance",
    accessoriesImage: "https://cdn.pixabay.com/photo/2016/05/06/16/32/car-1376190_1280.jpg",

    // About
    aboutTitle: "About Us",
    aboutDescription:
      "At Speed Rocket, we provide everything you need to import high-quality products from China at the best prices, ensuring efficient and fast handling of all logistics and customs procedures. With years of expertise in the Chinese market, we have built a strong network of trusted factories and suppliers, enabling us to manage the entire import process from sourcing to delivery at your warehouse while maintaining the highest standards of quality and precision.",

    aboutDiscription2:
      "We combine smart sourcing strategies with reliable logistics solutions, offering end-to-end import and customs clearance services to businesses and individuals across Saudi Arabia and beyond.",

    aboutVision: "Our Vision",
    aboutVisionDescription:
      "To become the most trusted partner in China sourcing, logistics, and customs clearance, delivering integrated services that drive the growth and expansion of our clients' businesses.",

    aboutMission: "Our Mission",
    aboutMissionDescription:
      "At Speed Rocket, we empower businesses and individuals to import goods from China smartly and securely through end-to-end supply chain solutions, covering every step from factory sourcing to doorstep delivery.",

    yearsExperience:
      "Finding and contracting with the best factories & suppliers",
    happyClients: "Production supervision & quality control",
    deliveredPackages: "Arranging international sea & air freight",
    globalOffices: "Efficient and fast customs clearance procedures",

    // Contact
    contactTitle: "Contact Us",
    contactSubtitle: "Get in touch for a free consultation",

    address: "Address",
    addressValue: "123 Logistics Street, Shipping District, Dubai, UAE",
    phone: "Phone",
    phoneValue: "+971 4 123 4567",
    email: "Email",
    emailValue: "info@shippingco.com",
    WhyUs: "Why Choose Us?",
    GlobalNetWork: "Global Network",
    WorldwideShipping: "Worldwide shipping coverage with local expertise",
    RealTimeTracking: "Real-time Tracking",
    TrackYourShipments: "Track your shipments 24/7 with our advanced system",
    CompetitiveRates: "Competitive Rates",
    BestPrices: "Best prices without compromising on quality",
    ExpertSupport: "Expert Support",
    ProfessionalTeam: "Professional team ready to assist you anytime",

    // Footer
    footerDescription:
      "Your trusted partner for global shipping and logistics solutions. We deliver excellence in every shipment.",
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved.",
    FidCorr: "© 2025 FID. All rights reserved. Designed by FID Company",
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

    // Services for companies
    servicesTitle: "خدماتنا",
    servicesSubtitle: "حلول لوجستية شاملة مصممة خصيصاً لاحتياجاتك",
    // Services for companies
    companyServiceTitle: " خدمات الشركات والتجار",
    companyServiceSubTitle: "اعقد صفقتك من مكانك وحقق أقصى ربح بأقل تكلفة",
    companyServiceDescription:
      "في سبيد روكيت، نعي تمامًا أهمية نجاح صفقاتك التجارية. نوفّر لك دراسة دقيقة ومعلومات موثوقة تساعدك على اتخاذ قرارات مدروسة، مع دعم قوي من شبكة علاقات واسعة تشمل الشركات والمؤسسات والهيئات في مختلف القطاعات",

    /* Consultations */
    Consultations: " خدمات استشارية وعروض أسعار مخصصة",
    ConsultationsDesc:
      "استشارات احترافية في مجالات الزراعة، الصناعة، والتجارة.",
    ConsultationsDesc2:
      "يعمل فريقنا من الخبراء على تزويدك بأفضل النصائح وأدق عروض الأسعار من كبار الموردين في الصين. نحن نحلل احتياجاتك، نرشح الموردين الأنسب، ونوفّر عروض أسعار واقعية مدعومة بخبرة لوجستية متكاملة.",
    /* description in model */
    ConsultationsModelDesc: "تحليل مفصل لطلبك",
    ConsultationsModelDesc1: "ترشيح موردين موثوقين",
    ConsultationsModelDesc2: "أفضل أسعار وجودة عالية",
    ConsultationsModelDesc3:
      "حلول تغطي الشحن والتخليص الجمركي حتى بابك في السعودية",

    /* Export */
    Export: " خدمات التصدير",
    ExportDesc: "نفتح لك أبواب الأسواق العالمية بكفاءة ومهنية.",
    ExportModelDesc:
      "نوفر الدعم الكامل للشركات لزيادة قدراتها التصديرية، من خلال",
    ExportModelDesc1: "تحليل الأسواق المستهدفة وتقسيم الشرائح",
    ExportModelDesc2: "تحديد المكانة السوقية واستراتيجيات الدخول",
    ExportModelDesc3: "معرفة متطلبات التشريعات الجمركية وغير الجمركية",
    ExportModelDesc4: "تجهيز عروض الأسعار، وتحضير النماذج والزيارات",
    ExportModelDesc5: "تقديم استشارات جودة، وشروط الشحن والتسليم",
    ExportModelDesc6: "إدارة المعاملات المالية ومخاطر التصدير",

    /* Shipping services */
    Shipping: "خدمات الشحن البحري",
    ShippingDesc: "حلول شحن بحرية مرنة ومتكاملة لأي نوع من الشحنات",
    ShippingModelDesc:
      "سواء كانت شحنتك كاملة (FCL) أو أقل من حاوية (LCL)، استيراد أو تصدير — نوفر خدمات بحرية احترافية تغطي كل مرحلة من مراحل الشحن",
    ShippingModelDesc1: "شحن لجميع الأسواق العالمية",
    ShippingModelDesc2: "تجميع شحنات عالمية",
    ShippingModelDesc3: "التخليص الجمركي والتوصيل حتى الباب",
    ShippingModelDesc4: "تحضير الوثائق والتعاملات الجمركية",
    ShippingModelDesc5: "تتبع الشحنات لحظيًا",
    ShippingModelDesc6: "برامج تأمين للشحنات",

    /* Airfreight services */
    AirFreight: "خدمات الشحن الجوي",
    warehousingDesc: "سرعة، كفاءة، ودقة في التوصيل العالمي",
    AirFreightModelDesc:
      "سواء كانت شحنتك كاملة (FCL) أو أقل من حاوية (LCL)، استيراد أو تصدير — نوفر خدمات بحرية احترافية تغطي كل مرحلة من مراحل الشحن",

    /* خدمات التخليص الجمركي */
    customsClearance: "خدمات التخليص الجمركي",
    customsClearanceDesc: "أسرع وأدق تخليص جمركي يدويًا أو إلكترونيًا",
    customsClearanceModelDesc:
      "نحن نعلم أن التخليص الجمركي هو المرحلة الأهم في سلسلة الاستيراد، ولذلك نوفر لك فريقًا من المحترفين القانونيين والفنيين ذوي الخبرة الطويلة في الأنظمة الجمركية بالمملكة",
    customsClearanceModelDesc1: "تجهيز جميع المستندات المطلوبة",
    customsClearanceModelDesc2: "التعامل المباشر مع مسؤولي الجمارك",
    customsClearanceModelDesc3: "إنهاء الإجراءات بسرعة ومرونة",
    customsClearanceModelDesc4: "استشارات فنية وقانونية مخصصة",

    // service for persons
    ServiceForPerson: "خدمات الأفراد من سبيد روكيت",
    ServiceForPersonSubTitle:
      "استيراد شخصي من الصين بأسعار الجملة – خصص طلبك ووفر أكثر",
    ServiceForPersonDescription:
      "هل ترغب في شراء منتجات عالية الجودة من الصين بأسعار الجملة بدون عناء مع خدمة الاستيراد الشخصي من سبيد روكيت نوفر لك تجربة استيراد احترافية ومخصصة سواء كنت فردًا يشتري لأول مرة أو صاحب مشروع ناشئ نقوم بكل الخطوات نيابة عنك من البحث عن المورد وحتى التوصيل لباب منزلك في السعودية ودول الخليج",

    /* Building finishes and decoration */
    decoration: " تشطيبات المباني والديكور",
    decorationDesc: "استورد جميع مستلزمات التشطيب الداخلي والخارجي من الصين",
    decorationDesc2:
      "الأرضيات، الإضاءة، السيراميك، الواجهات، والدهانات - قطع الديكور العصرية والتصاميم الفريدة",
    decorationImage:
      "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800",
    /*furniture */
    furniture: "الأثاث",
    furnitureDesc: "اختر أثاثك حسب ذوقك وميزانيتك",
    furnitureDesc2:
      "أثاث منزلي، مكتبي، فندقي تصميمات مخصصة، تنوع في المواد، جودة تصنيع عالية",
    furnitureImage:
      "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800",
    /* Cars and accessories*/
    accessories: " السيارات وملحقاتها",
    accessoriesDesc: "استيراد سيارات جديدة أو مستعملة",
    accessoriesDesc2: "قطع غيار أصلية واكسسوارات السيارات بجودة مضمونة",
    accessoriesImage:
      "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800",

    // About
    aboutTitle: "من نحن",
    aboutDescription:
      "في سبيد روكيت، نوفّر لك كل ما تحتاجه لاستيراد منتجاتك من الصين بأعلى جودة وأفضل سعر، مع ضمان إنهاء جميع الإجراءات اللوجستية والجمركية بكفاءة وسرعة.",
    aboutDiscription2:
      "نعمل بخبرة طويلة في السوق الصيني، ونملك شبكة علاقات قوية مع أهم المصانع والموردين، مما يمكّننا من إدارة عملية الاستيراد من المصدر وحتى باب مستودعك، مع الالتزام بأعلى معايير الجودة والدقة في كل خطوة.",
    aboutVision: "رؤيتنا",

    aboutVisionDescription:
      "أن نكون الشريك الموثوق والأول في مجال الاستيراد من الصين والخدمات اللوجستية والتخليص الجمركي، من خلال تقديم خدمات متكاملة تسهم في نمو وتوسّع أعمال عملائنا على مستوى المملكة وخارجها.",
    aboutMission: "رسالتنا",
    aboutMissionDescription:
      "في سبيد روكيت، نعمل على تمكين الشركات والأفراد من استيراد البضائع من الصين بطريقة ذكية وآمنة، عبر حلول متكاملة تغطي جميع مراحل سلسلة التوريد",
    yearsExperience: " البحث والتعاقد مع أفضل المصانع والموردين",
    happyClients: "الإشراف على الإنتاج وفحص الجودة",
    deliveredPackages: "ترتيب عمليات الشحن الدولي البحري والجوي",
    globalOffices: "إنهاء إجراءات التخليص الجمركي بسرعة وكفاءة",

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
    WhyUs: "لماذا تختارنا؟",
    GlobalNetWork: "شبكة عالمية",
    WorldwideShipping: "تغطية شحن عالمية بخبرة محلية",
    RealTimeTracking: "تتبع فوري",
    TrackYourShipments:
      "تتبع شحناتك على مدار الساعة طوال أيام الأسبوع مع نظامنا المتطور",
    CompetitiveRates: "أسعار تنافسية",
    BestPrices: "أفضل الأسعار دون المساومة على الجودة",
    ExpertSupport: "دعم الخبراء",
    ProfessionalTeam: "فريق محترف جاهز لمساعدتك في أي وقت",

    // Footer
    footerDescription:
      "شريكك الموثوق لحلول الشحن واللوجستيات العالمية. نحن نقدم التميز في كل شحنة.",
    quickLinks: "روابط سريعة",
    followUs: "تابعنا",
    allRightsReserved: "جميع الحقوق محفوظة.",
    FidCorr: "جميع حقوق النشر محفوظه لشركة فيد للتسويق والبرمجيات",
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
  const [language, setLanguage] = useState<Language>("ar");

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
