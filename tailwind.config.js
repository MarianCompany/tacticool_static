/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "logo-screen": { raw: "(max-height: 880px and min-width: 1280px)" },
      },
      backgroundImage: {
        "tacticool-bg": "url('@/assets/tacticool_bg.jpeg')",
        "tacticool-bg-sm": "url('@/assets/tacticool_bg-sm.jpg')",
      },
      colors: {
        yellow: "#EEC009",
        footer: "#131114",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      ld: "860px",
      lg: "1048px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
