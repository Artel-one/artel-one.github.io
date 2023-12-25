const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white2: "#FAFAFA",
        primary: "#6922EC",
        secondary: "rgba(24, 24, 27, 1)",
        "gray-purpure": "rgba(112, 93, 142, 1)",
      },
      fontFamily: {
        pj: '"Plus Jakarta Sans", Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;',
        inter: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      // addBase({
      //   h1: {
      //     fontSize: theme("fontSize.2xl"),
      //   },
      //   h2: {
      //     fontSize: theme("fontSize.xl"),
      //   },
      // });
      addComponents({
        // ".badge": {
        //   backgroundColor: theme("colors.white"),
        //   borderRadius: theme("borderRadius.lg"),
        //   padding: theme("spacing.6"),
        //   boxShadow: theme("boxShadow.xl"),
        // },
        // ".card": {
        //   backgroundColor: theme("colors.white"),
        //   borderRadius: theme("borderRadius.lg"),
        //   padding: theme("spacing.6"),
        //   boxShadow: theme("boxShadow.xl"),
        // },
      });
      addUtilities({
        // ".content-auto": {
        //   contentVisibility: "auto",
        // },
      });
    }),
  ],
};
