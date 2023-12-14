module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        cyan: { A400: "#00d5f8" },
        blue_gray: {
          50: "#e7f1f2",
          100: "#d9d7d1",
          300: "#90a4ae",
          800: "#373050",
          900: "#251e35",
          "900_01": "#202249",
          "900_85": "#26323885",
        },
        red: { 200: "#ed9e93", 300: "#df857d", A700: "#d0011b" },
        blue: { A200: "#3e7fff" },
        black: { 900: "#000000", "900_3f": "#0000003f", "900_19": "#00000019" },
        teal: { 300: "#53bcc1", 700: "#1a7b6e" },
        deep_purple: { A200: "#7047eb" },
        purple: { 300: "#a46da0" },
        gray: {
          300: "#e3e1db",
          400: "#cfc7bf",
          600: "#707070",
          700: "#606060",
          900: "#222222",
          "900_01": "#232224",
          "700_01": "#5e5e5e",
        },
        lime: { 400: "#d2bc58" },
        orange: { A200: "#ff8f48", A700: "#ff6400" },
        indigo: { 300: "#6483c9", A400: "#3d5edd" },
        white: { A700_01: "#fffefe", A700: "#ffffff" },
      },
      fontFamily: { mulish: "Mulish", rubik: "Rubik" },
      boxShadow: {
        bs2: "0px 0px  10px 0px #00000019",
        bs1: "0px 3px  20px 0px #00000019",
        bs: "0px 7px  16px 0px #00000019",
      },
      textShadow: { ts: "0px 4px  4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
