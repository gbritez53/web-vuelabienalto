module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      rale: ["Raleway"],
      rubik: ["Rubik"],
      comfortaa: ["Comfortaa"],
    },
    extend: {
      colors: {
        primary: "#fcbf1e",
        secondary: "#035aa6",
        darkblue: "#07197e",
        info: "#40bad5",
        warning: "#fcbf1e",
      },
      animation: {
        bounce: "bounce 2s ease-in infinite",
      },
      transitionDelay: ["hover", "animation"],
    },
  },
  variants: {},
  plugins: [],
};
