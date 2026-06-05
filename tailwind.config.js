/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(1.3%)" },
          "100%": {
            transform: "translateX(calc(-100% / 2))",
          },
        },
        moveToLeft: {
          "0%": { transform: "translateX(-50%)" },
          "100%": {
            transform: "translateX(50%)",
          },
        },
        moveToRight: {
          "0%": { transform: "translateX(50%)" },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
      },
      fontStretch: {
        'expanded': 'expanded',
        // Agrega otras opciones si es necesario
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orangeprimary: "#fb670b",
        whitesecondary: "#f2f1ec",
        graybg: "#262626",
      },
      fontFamily: {
        helony: "var(--font-helony)",
        morganite: "var(--font-morganite)",
        SFPro: "var(--font-SFPro)",
        "moisette-italic": "var(--font-moisette-italic)",
        "moisette-regular": "var(--font-moisette-regular)",
        "rolide": "var(--font-rolide-regular)",
      },
      backgroundSize:{
        'lg': '80%',
        'md':'100%',
        'sm':'130%',
        'tom':'200%',
        'ocean':'220%',
        'ocean-md':'280%'
      },
    },
  },
  plugins: [],
};
