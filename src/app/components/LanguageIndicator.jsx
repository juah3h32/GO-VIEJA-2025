"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GrLanguage } from 'react-icons/gr';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useTranslations } from "next-intl";

function LanguageIndicator({ locale }) {
  const t = useTranslations("Navbar");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Estado local para el idioma actual
  const [currentLocale, setCurrentLocale] = useState(locale);

  useEffect(() => {
    // Actualiza el idioma actual cada vez que el prop 'locale' cambie
    setCurrentLocale(locale);
  }, [locale]);

  const changeLanguage = (newLocale) => {
    // Asegúrate de que la URL esté bien formada
    const pathWithoutLocale = pathname.startsWith('/es') || pathname.startsWith('/en') || pathname.startsWith('/pt') || pathname.startsWith('/zh') || pathname.startsWith('/de') || pathname.startsWith('/ar')
      ? pathname.slice(3) // Remueve el idioma actual de la ruta
      : pathname;

    const params = new URLSearchParams(searchParams);
    // Cambia de idioma y conserva la misma ruta
    router.push(`/${newLocale}${pathWithoutLocale}?${params.toString()}`);
  };

  const languageOptions = [
    { lang: 'es', label: t("spanish") },
    { lang: 'en', label: t("english") },
    { lang: 'pt', label: t("portugues") },
    { lang: 'zh', label: t("mandarin") },
    { lang: 'de', label: t("aleman") },
    { lang: 'ar', label: t("arabe") },
  ];

  const currentLanguage = languageOptions.find((opt) => opt.lang === currentLocale) || languageOptions[0];

  return (
    <div className="relative group">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="ease-out transition-all duration-100 bg-orangeprimary text-whitesecondary px-6 py-2 border-solid rounded-2xl flex justify-center items-center hover:bg-graybg hover:border-orangeprimary hover:border"
        onClick={() => changeLanguage(currentLanguage.lang)}
      >
        <li className="text-center font-helony font-normal text-md transition-all duration-75 flex flex-row gap-3 items-center justify-center">
          <GrLanguage className="text-2xl" /> {currentLanguage.label}
        </li>
      </motion.button>

      {/* Menú desplegable */}
      <ul className="absolute hidden hover:flex group-hover:flex rounded-lg w-full flex-col mt-[0.2rem]">
        {languageOptions
          .filter((option) => option.lang !== currentLocale) // Excluye el idioma actual
          .map((option) => (
            <button key={option.lang} onClick={() => changeLanguage(option.lang)}>
              <li className="py-1 hover:bg-orangeprimary text-whitesecondary bg-gray-400 rounded-full mb-1 font-helony text-center w-full text-base">
                {option.label}
              </li>
            </button>
          ))}
      </ul>
    </div>
  );
}

export default LanguageIndicator;


// "use client";
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { GrLanguage } from 'react-icons/gr';
// import { useRouter, usePathname, useSearchParams } from 'next/navigation';
// import { useTranslations } from "next-intl";

// function LanguageIndicator({ locale }) {
//   const t = useTranslations("Navbar");
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   // Estado local para el idioma actual
//   const [currentLocale, setCurrentLocale] = useState(locale);

//   useEffect(() => {
//     // Actualiza el idioma actual cada vez que el prop 'locale' cambie
//     setCurrentLocale(locale);
//   }, [locale]);

//   const changeLanguage = (newLocale) => {
//     const pathWithoutLocale = pathname.startsWith('/en') || pathname.startsWith('/es') || pathname.startsWith('/pt')
//       ? pathname.slice(3) 
//       : pathname;

//     const params = new URLSearchParams(searchParams);
//     router.push(`/${newLocale}${pathWithoutLocale}?${params.toString()}`);
//   };

//   const languageOptions = [
//     { lang: 'es', label: t("spanish") },
//     { lang: 'en', label: t("english") },
//     { lang: 'pt', label: t("portugues") },
//     { lang: 'zh', label: t("mandarin") },
//     { lang: 'de', label: t("aleman") },
//     { lang: 'ar', label: t("arabe") },
//   ];

//   const currentLanguage = languageOptions.find((opt) => opt.lang === currentLocale) || languageOptions[0];

//   return (
//     <div className="relative group">
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className="ease-out transition-all duration-100 bg-orangeprimary text-whitesecondary px-6 py-2 border-solid rounded-2xl flex justify-center items-center hover:bg-graybg hover:border-orangeprimary hover:border"
//         onClick={() => changeLanguage(currentLanguage.lang)}
//       >
//         <li className="text-center font-helony font-normal text-md transition-all duration-75 flex flex-row gap-3 items-center justify-center">
//           <GrLanguage className="text-2xl" /> {currentLanguage.label}
//         </li>
//       </motion.button>

//       {/* Menú desplegable */}
//       <ul className="absolute hidden hover:flex group-hover:flex rounded-lg w-full flex-col mt-[0.2rem]">
//         {languageOptions
//           .filter((option) => option.lang !== currentLocale) 
//           .map((option) => (
//             <button key={option.lang} onClick={() => changeLanguage(option.lang)}>
//               <li className="py-1 hover:bg-orangeprimary text-whitesecondary bg-gray-400 rounded-full mb-1 font-helony text-center w-full text-base">
//                 {option.label}
//               </li>
//             </button>
//           ))}
//       </ul>
//     </div>
//   );
// }

// export default LanguageIndicator;


// "use client"
// import { motion } from 'framer-motion';
// import { GrLanguage } from 'react-icons/gr';
// import { useRouter, usePathname, useSearchParams } from 'next/navigation';
// import { useTranslations } from "next-intl";

// function LanguageIndicator() {
//   const t = useTranslations("Navbar");

//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const locale = router.locale; // Asegura que estás obteniendo el idioma actual

//   const changeLanguage = (newLocale) => {
//     const pathWithoutLocale = pathname.startsWith('/en') || pathname.startsWith('/es') || pathname.startsWith('/pt')
//       ? pathname.slice(3) 
//       : pathname;

//     const params = new URLSearchParams(searchParams);
//     router.push(`/${newLocale}${pathWithoutLocale}?${params.toString()}`);
//   };

//   const languageOptions = [
//     { lang: 'es', label: t("spanish") },
//     { lang: 'en', label: t("english") },
//     { lang: 'pt', label: t("portugues") },
//   ];

//   const currentLanguage = languageOptions.find((opt) => opt.lang === locale) || languageOptions[0];

//   return (
//     <div className="relative group">
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className="ease-out transition-all duration-100 bg-orangeprimary text-whitesecondary px-6 py-2 border-solid rounded-2xl flex justify-center items-center hover:bg-graybg hover:border-orangeprimary hover:border"
//         onClick={() => changeLanguage(currentLanguage.lang)}
//       >
//         <li className="text-center font-helony font-normal text-md transition-all duration-75 flex flex-row gap-3 items-center justify-center">
//           <GrLanguage className="text-2xl" /> {currentLanguage.label}
//         </li>
//       </motion.button>

//       {/* Menú desplegable */}
//       <ul className="absolute hidden hover:flex group-hover:flex rounded-lg w-full flex-col mt-[0.2rem]">
//         {languageOptions
//           .filter((option) => option.lang !== locale) // Filtra el idioma actual
//           .map((option) => (
//             <button key={option.lang} onClick={() => changeLanguage(option.lang)}>
//               <li className="py-1 hover:bg-orangeprimary text-whitesecondary bg-gray-400 rounded-full mb-1 font-helony text-center w-full text-base">
//                 {option.label}
//               </li>
//             </button>
//           ))}
//       </ul>
//     </div>
//   );
// }

// export default LanguageIndicator;


// "use client"
// import { motion } from 'framer-motion';
// import { GrLanguage } from 'react-icons/gr';
// import { useRouter, usePathname, useSearchParams } from 'next/navigation';
// import { useTranslations } from "next-intl";

// function LanguageIndicator(locale) {

//     const t = useTranslations("Navbar");

//     const router = useRouter();
//     const pathname = usePathname();
//     const searchParams = useSearchParams();

//   const changeLanguage = (newLocale) => {
//     const pathWithoutLocale = pathname.startsWith('/en') || pathname.startsWith('/es') || pathname.startsWith('/pt')
//       ? pathname.slice(3) // Remueve '/es', '/en', o '/pt' al inicio
//       : pathname;

//     const params = new URLSearchParams(searchParams);
//     router.push(`/${newLocale}${pathWithoutLocale}?${params.toString()}`);
//   };

//   const languageOptions = [
//     { lang: 'es', label: 'spanish' },
//     { lang: 'en', label: 'english' },
//     { lang: 'pt', label: 'portugues' },
//   ];

//   const currentLanguage = languageOptions.find((opt) => opt.lang === locale) || languageOptions[0];

//   return (
//     <div className="relative group">
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className="ease-out transition-all duration-100 bg-orangeprimary text-whitesecondary px-6 py-2 border-solid rounded-2xl flex justify-center items-center hover:bg-graybg hover:border-orangeprimary hover:border"
//         onClick={() => changeLanguage(currentLanguage.lang)}
//       >
//         <li className="text-center font-helony font-normal text-md transition-all duration-75 flex flex-row gap-3 items-center justify-center">
//           <GrLanguage className="text-2xl" /> {currentLanguage.label}
//         </li>
//       </motion.button>

//       {/* Menú desplegable */}
//       <ul className="absolute hidden hover:flex group-hover:flex rounded-lg w-full flex-col mt-[0.2rem]">
//         {languageOptions
//           .filter((option) => option.lang !== locale)
//           .map((option) => (
//             <button key={option.lang} onClick={() => changeLanguage(option.lang)}>
//               <li className="py-1 hover:bg-orangeprimary text-whitesecondary bg-gray-400 rounded-full mb-1 font-helony text-center w-full text-base">
//                 {option.label}
//               </li>
//             </button>
//           ))}
//       </ul>
//     </div>
//   );
// }

// export default LanguageIndicator;
