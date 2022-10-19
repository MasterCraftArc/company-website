const fontWeights = {
  medium: 500,
  regular: 400,
};

const fonts = {
  poppins: "Poppins",
  teko: "Teko",
};

const typography = {
  fontFamily: [fonts.poppins, fonts.teko].join(","),
  h1: {
    fontFamily: fonts.teko,
    fontSize: "10.75rem",
    letterSpacing: -1.5,
    fontWeight: fontWeights.regular,
  },
  h2: {
    fontFamily: fonts.teko,
    fontSize: 64,
    letterSpacing: -0.5,
    fontWeight: fontWeights.regular,
  },
  h3: {
    fontFamily: fonts.teko,
    fontSize: 48,
    letterSpacing: -0.25,
    fontWeight: fontWeights.regular,
  },
  h4: {
    fontFamily: fonts.poppins,
    fontSize: "2rem",
    fontWeight: fontWeights.regular,
  },
  h5: {
    fontFamily: fonts.poppins,
    fontSize: "1.5rem",
    fontWeight: fontWeights.regular,
  },
  h6: {
    fontFamily: fonts.poppins,
    fontSize: 20,
    letterSpacing: 0,
    fontWeight: fontWeights.regular,
  },
  subtitle1: {
    fontFamily: fonts.poppins,
    fontStyle: "normal",
    fontSize: "1.25rem",
    letterSpacing: 0.15,
    fontWeight: fontWeights.medium,
  },
  subtitle2: {
    fontFamily: fonts.poppins,
    fontSize: 16,
    letterSpacing: 0.1,
    fontWeight: fontWeights.medium,
  },
  body1: {
    fontFamily: fonts.poppins,
    fontSize: 18,
    letterSpacing: 0.15,
    fontWeight: fontWeights.regular,
  },
  body2: {
    fontFamily: fonts.poppins,
    fontSize: 16,
    letterSpacing: 0.15,
    fontWeight: fontWeights.regular,
  },
  caption: {
    fontFamily: fonts.poppins,
    fontSize: 12,
    letterSpacing: 0.4,
    fontWeight: fontWeights.regular,
  },
  overline: {
    fontFamily: fonts.poppins,
    fontSize: 12,
    letterSpacing: 1,
  },
  button: {
    fontFamily: fonts.poppins,
    fontWeight: fontWeights.medium,
  },
};

export default Object.freeze(typography);
