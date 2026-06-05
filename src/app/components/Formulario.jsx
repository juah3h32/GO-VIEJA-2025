"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import ReCAPTCHA from "react-google-recaptcha";
import countryCodes from "../data/countryCodes.json";
import Link from "next/link";

const Formulario = ({locale}) => {
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const t = useTranslations("Form");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    phone2: "",
    location: "",
    city: "",
    state: "",
    zipcode: "",
    email: "",
    message: "",
    country: "",
    areaCode: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    if (name === "country") {
      const areaCode = countryCodes[value] || "";
      setFormData((prevFormData) => ({ ...prevFormData, areaCode }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("api/email", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ ...formData, recaptchaToken }),
        body: JSON.stringify({ ...formData }),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          phone: "",
          phone2: "",
          location: "",
          city: "",
          state: "",
          zipcode: "",
          email: "",
          message: "",
          country: "",
          areaCode: "",
        });
      } else {
        const errorData = await res.json();
        setError(errorData.error || "Error al enviar el formulario");
      }
    } catch (err) {
      setError("Hubo un problema al enviar el correo");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // const handleRecaptchaChange = (token) => {
  //   setRecaptchaToken(token);
  // };

  return (
    <form
      className="bg-graybg text-white w-[100%] md:w-[80%] md:mx-auto rounded-md font-helony"
      onSubmit={handleSubmit}
    >
      <h2 className="text-md md:text-lg mb-4">{t("aviso")}</h2>

      <div className="flex flex-col mb-4">
        <label className="mb-1">{t("country")}</label>
        <select name="country" value={formData.country} onChange={handleChange} className="p-2 rounded bg-gray-500 border border-gray-500">
          <option value="">{t("select-country")}</option>
          {Object.keys(countryCodes).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
           <label className="mb-1">{t("name")}</label>
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            name="name"
            className="p-2 rounded bg-gray-500 border border-gray-500"
          /></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        {/* Campo para mostrar la lada */}
        <div className="flex flex-col md:col-span-1">
          <label className="mb-1">{t("area-code")}</label>
          <input type="text" value={formData.areaCode} readOnly className="p-2 rounded bg-gray-500 border border-gray-500" />
        </div>

        {/* Campo de Teléfono 1 */}
        <div className="flex flex-col md:col-span-3">
          <label className="mb-1">{t("phone")}</label>
          <input type="tel" value={formData.phone} onChange={handleChange} name="phone" className="p-2 rounded bg-gray-500 border border-gray-500" />
        </div>
      </div>

      {/* Campo de Teléfono 2 (debajo de Lada y Teléfono 1) */}
      <div className="flex flex-col mb-4">
        <label className="mb-1">{t("phone-2")}</label>
        <input type="tel" value={formData.phone2} onChange={handleChange} name="phone2" className="p-2 rounded bg-gray-500 border border-gray-500" />
      </div>

      {/* Resto del formulario */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <label className="mb-1">{t("location")}</label>
          <input type="text" value={formData.location} onChange={handleChange} name="location" className="p-2 rounded bg-gray-500 border border-gray-500" />
        </div>
        
        <div className="flex flex-col">
          <label className="mb-1">{t("city")}</label>
          <input type="text" value={formData.city} onChange={handleChange} name="city" className="p-2 rounded bg-gray-500 border border-gray-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <label className="mb-1">{t("state")}</label>
          <input
            type="text"
            value={formData.state}
            onChange={handleChange}
            name="state"
            className="p-2 rounded bg-gray-500 border border-gray-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">{t("zipcode")}</label>
          <input
            type="text"
            value={formData.zipcode}
            onChange={handleChange}
            name="zipcode"
            className="p-2 rounded bg-gray-500 border border-gray-500"
          />
        </div>
      </div>

      <div className="flex flex-col mb-4">
        <label className="mb-1">{t("coments")}</label>
        <textarea
          value={formData.message}
          onChange={handleChange}
          name="message"
          className="p-2 rounded bg-gray-500 border border-gray-500 h-32"
        />
      </div>

      <div className="text-sm mb-4">
        <p>
          {t("priv-1")}{" "}
          <Link href={`/${locale}/avisopriv`} className="underline text-blue-400">
            {t("priv-2")}
          </Link>
        </p>
      </div>

      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={aceptaTerminos}
          onChange={() => setAceptaTerminos(!aceptaTerminos)}
          className="mr-2"
        />
        <label className="text-sm">{t("legend")}</label>
      </div>

      <div className="flex flex-col gap-4">
        {/* <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={handleRecaptchaChange}
        /> */}
        <button
          className="w-full py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition cursor-pointer"
          type="submit"
          disabled={loading || !aceptaTerminos}
        >
          {loading ? t("sending") : t("send")}
        </button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && (
        <p className="text-green-500 mt-4">Mensaje enviado con éxito</p>
      )}
    </form>
  );
};

export default Formulario;





// "use client";
// import React, { useState } from "react";
// import { useTranslations } from "next-intl";
// import ReCAPTCHA from "react-google-recaptcha";
// import countryCodes from "../data/countryCodes.json";

// const Formulario = () => {
//   const [aceptaTerminos, setAceptaTerminos] = useState(false);
//   const t = useTranslations("Form");

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     phone2: "",
//     location: "",
//     city: "",
//     state: "",
//     zipcode: "",
//     email: "",
//     message: "",
//     country: "",
//     areaCode: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);
//   const [recaptchaToken, setRecaptchaToken] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

//     if (name === "country") {
//       const areaCode = countryCodes[value] || "";
//       setFormData((prevFormData) => ({ ...prevFormData, areaCode }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const res = await fetch("api/email", {
//         method: "post",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         // body: JSON.stringify({ ...formData, recaptchaToken }),
//         body: JSON.stringify({ ...formData }),
//       });

//       if (res.ok) {
//         setSuccess(true);
//         setFormData({
//           name: "",
//           phone: "",
//           phone2: "",
//           location: "",
//           city: "",
//           state: "",
//           zipcode: "",
//           email: "",
//           message: "",
//           country: "",
//           areaCode: "",
//         });
//       } else {
//         const errorData = await res.json();
//         setError(errorData.error || "Error al enviar el formulario");
//       }
//     } catch (err) {
//       setError("Hubo un problema al enviar el correo");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // const handleRecaptchaChange = (token) => {
//   //   setRecaptchaToken(token);
//   // };

//   return (
//     <form
//       className="bg-graybg text-white w-[100%] md:w-[80%] md:mx-auto rounded-md font-helony"
//       onSubmit={handleSubmit}
//     >
//       <h2 className="text-md md:text-lg mb-4">{t("aviso")}</h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//         <div className="flex flex-col">
//           <label className="mb-1">{t("name")}</label>
//           <input
//             type="text"
//             value={formData.name}
//             onChange={handleChange}
//             name="name"
//             className="p-2 rounded bg-gray-500 border border-gray-500"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="mb-1">{t("phone")}</label>
//           <input
//             type="tel"
//             value={formData.phone}
//             onChange={handleChange}
//             name="phone"
//             className="p-2 rounded bg-gray-500 border border-gray-500"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="mb-1">{t("phone-2")}</label>
//           <input
//             type="tel"
//             value={formData.phone2}
//             onChange={handleChange}
//             name="phone2"
//             className="p-2 rounded bg-gray-500 border border-gray-500"
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//         <div className="flex flex-col">
//           <label className="mb-1">{t("country")}</label>
//           <select
//             name="country"
//             value={formData.country}
//             onChange={handleChange}
//             className="p-2 rounded bg-gray-500 border border-gray-500"
//           >
//             <option value="">{t("select-country")}</option>
//             {Object.keys(countryCodes).map((country) => (
//               <option key={country} value={country}>
//                 {country}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="flex flex-col">
//           <label className="mb-1">{t("area-code")}</label>
//           <input
//             type="text"
//             value={formData.areaCode}
//             readOnly
//             name="areaCode"
//             className="p-2 rounded bg-gray-500 border border-gray-500"
//           />
//         </div>
//       </div>

//       {/* Resto de los campos del formulario */}

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//         <div className="flex flex-col">
//           <label className="mb-1">{t("location")}</label>
//           <input
//             type="text"
//             value={formData.location}
//             onChange={handleChange}
//             name="location"
//             className="p-2 rounded bg-gray-500 border border-gray-500"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="mb-1">{t("city")}</label>
//           <input
//             type="text"
//             value={formData.city}
//             onChange={handleChange}
//             name="city"
//             className="p-2 rounded bg-gray-500 border border-gray-500"
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//         <div className="flex flex-col">
//           <label className="mb-1">{t("state")}</label>
//           <input
//             type="text"
//             value={formData.state}
//             onChange={handleChange}
//             name="state"
//             className="p-2 rounded bg-gray-500 border border-gray-500"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="mb-1">{t("zipcode")}</label>
//           <input
//             type="text"
//             value={formData.zipcode}
//             onChange={handleChange}
//             name="zipcode"
//             className="p-2 rounded bg-gray-500 border border-gray-500"
//           />
//         </div>
//       </div>

//       <div className="flex flex-col mb-4">
//         <label className="mb-1">{t("coments")}</label>
//         <textarea
//           value={formData.message}
//           onChange={handleChange}
//           name="message"
//           className="p-2 rounded bg-gray-500 border border-gray-500 h-32"
//         />
//       </div>

//       <div className="text-sm mb-4">
//         <p>
//           {t("priv-1")}{" "}
//           <a href="#" className="underline text-blue-400">
//             {t("priv-2")}
//           </a>
//         </p>
//       </div>

//       <div className="flex items-center mb-4">
//         <input
//           type="checkbox"
//           checked={aceptaTerminos}
//           onChange={() => setAceptaTerminos(!aceptaTerminos)}
//           className="mr-2"
//         />
//         <label className="text-sm">{t("legend")}</label>
//       </div>

//       <div className="flex flex-col gap-4">
//         {/* <ReCAPTCHA
//           sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
//           onChange={handleRecaptchaChange}
//         /> */}
//         <button
//           className="w-full py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition cursor-pointer"
//           type="submit"
//           disabled={loading || !aceptaTerminos}
//         >
//           {loading ? t("sending") : t("send")}
//         </button>
//       </div>
//       {error && <p className="text-red-500 mt-4">{error}</p>}
//       {success && (
//         <p className="text-green-500 mt-4">Mensaje enviado con éxito</p>
//       )}
//     </form>
//   );
// };

// export default Formulario;

