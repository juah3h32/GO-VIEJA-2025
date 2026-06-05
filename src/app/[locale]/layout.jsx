import localFont from "next/font/local";
import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import fs from 'fs';
import path from 'path';


const helony = localFont({
  src: "../fonts/Helony.otf",
  variable: "--font-helony",
  weight: "400",
});

const morganite = localFont({
  src: "../fonts/Morganite-ExtraBold.ttf",
  variable: "--font-morganite",
  weight: "800",
});

const SFPro = localFont({
  src: "../fonts/SF-Pro.ttf",
  variable: "--font-SFPro",
  weight: "400",
})

const morganiteItalic = localFont({
  src: "../fonts/MorganitePro-BoldOblique.ttf",
  variable: "--font-morganite-italic",
  weight: "800"
});

const moisetteItalic = localFont({
  src: "../fonts/Moisette-Italic.otf",
  variable: "--font-moisette-italic",
  weight: "800"
});

const moisetteRegular = localFont({
  src: "../fonts/Moisette-Regular.otf",
  variable: "--font-moisette-regular",
  weight: "800"
});

const rolideRegular= localFont({
  src: "../fonts/Rolide-Regular.otf",
  variable: "--font-rolide-regular",
  weight: "400"
});

export const metadata = {
  title: "Grupo Ortiz",
  description: "Somos, desde 1959, una empresa 100% mexicana dedicada a crear productos de calidad, sostenibles y económicos. Brindamos servicio a Estados Unidos, México, Sudamérica y recientemente a Europa.",
};


export default async function LocaleLayout({ children, 
  params}
) {
 
  const { locale } = await params;

  const messages = await import(`../../../messages/${locale}.json`)
  .then (m => m. default)


  return (
    <html lang={locale}>
      <body className={`${helony.variable} ${moisetteItalic.variable} ${rolideRegular.variable} ${moisetteRegular.variable} ${SFPro.variable} ${morganite.variable} ${morganiteItalic.variable} antialiased bg-whitesecondary`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
          <Footer locale={locale}/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


// function RootLayout({ children, locale, messages }) {
//   return (
//     <html lang={locale}>
//       <body className={`${helony.variable} ${morganite.variable} ${morganiteItalic.variable} antialiased bg-whitesecondary`}>
//         <NextIntlClientProvider locale={locale} messages={messages}>
//           {children}
//           <Footer />
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }

// export default LocaleLayout;




// import localFont from "next/font/local";
// import "../globals.css";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { NextIntlClientProvider } from 'next-intl';
// import { getMessages } from 'next-intl/server';
// import { notFound } from 'next/navigation';
// import { routing } from '../../i18n/routing';

// export async function LocaleLayout({ children, params }) {
//   const { locale } = params;

//   // Verifica que el locale sea válido
//   if (!routing.locales.includes(locale)) {
//     notFound();
//   }

//   // Retorna el layout con RootLayout y el locale
//   return (
//     <RootLayout locale={locale}>
//       {children}
//     </RootLayout>
//   );
// }

// const helony = localFont({
//   src: "../fonts/Helony.otf",
//   variable: "--font-helony",
//   weight: "400",
// });

// const morganite = localFont({
//   src: "../fonts/Morganite-ExtraBold.ttf",
//   variable: "--font-morganite",
//   weight: "800",
// });

// const morganiteItalic = localFont({
//   src: "../fonts/MorganitePro-BoldOblique.ttf",
//   variable: "--font-morganite-italic",
//   weight: "800",
//   style: "italic",
// });

// export const metadata = {
//   title: "Grupo Ortiz",
//   description: "Somos, desde 1959, una empresa 100% mexicana dedicada a crear productos de calidad, sostenibles y económicos. Brindamos servicio a Estados Unidos, México, Sudamérica y recientemente a Europa.",
// };

// function RootLayout({ children, locale }) {
//   return (
//     <html lang={locale}>
//       <body className={`${helony.variable} ${morganite.variable} ${morganiteItalic.variable} antialiased bg-whitesecondary`}>
//         <NextIntlClientProvider locale={locale}>
//           {children}
//           <Footer />
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }

// export default RootLayout;


// import localFont from "next/font/local";
// import "../globals.css";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import {NextIntlClientProvider} from 'next-intl';
// import {getMessages} from 'next-intl/server';
// import {notFound} from 'next/navigation';
// import {routing} from '../../i18n/routing';

// export async function LocaleLayout({ children, params }) {
//   const { locale } = params;

//   // Ensure that the incoming `locale` is valid
//   if (!routing.locales.includes(locale)) {
//     notFound();
//   }
// }



// const helony = localFont({
//   src: "../fonts/Helony.otf",
//   variable: "--font-helony",
//   weight: "400",
// });

// const morganite = localFont({
//   src: "../fonts/Morganite-ExtraBold.ttf",
//   variable: "--font-morganite",
//   weight: "800",
// });

// const morganiteItalic = localFont({
//   src: "../fonts/MorganitePro-BoldOblique.ttf",
//   variable: "--font-morganite-italic",
//   weight: "800",
//   style:"italic",
// });

// export const metadata = {
//   title: "Grupo Ortiz",
//   description: "Somos, desde 1959, una empresa 100% mexicana dedicada a crear productos de calidad, sostenibles y económicos. Brindamos servicio a Estados Unidos, México, Sudamérica y recientemente a Europa.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang={locale}>
//       <body className={`${helony.variable} ${morganite.variable} ${morganiteItalic.variable} antialiased bg-whitesecondary`}>
//         {children}
//         <Footer/>
//       </body>
//     </html>
//   );
// }
