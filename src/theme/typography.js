const fontWeights = {
  medium: 500,
  regular: 400,
};

export const fonts = {
  poppins: "Poppins",
  teko: "Teko",
};

const typography = {
  fontFamily: [fonts.poppins, fonts.teko].join(","),
  body1: {
    fontFamily: fonts.poppins,
    fontSize: 18,
    fontWeight: fontWeights.regular,
  },
  body2: {
    fontFamily: fonts.poppins,
    fontSize: 16,
    fontWeight: fontWeights.regular,
  },
  subtitle1: {
    fontSize: 18,
    fontFamily: fonts.poppins,
    fontWeight: fontWeights.medium,
  },
  subtitle2: {
    fontSize: 16,
    fontFamily: fonts.poppins,
    fontWeight: fontWeights.medium,
  },
  caption: {
    fontSize: 12,
    fontFamily: fonts.poppins,
    fontWeight: fontWeights.regular,
  },
  overline: {
    fontSize: 12,
    fontFamily: fonts.poppins,
    fontWeight: fontWeights.regular,
  },
  h1: {
    fontSize: 96,
    fontFamily: fonts.teko,
    fontWeight: fontWeights.medium,
  },
  h2: {
    fontSize: 48,
    fontFamily: fonts.teko,
    fontWeight: fontWeights.medium,
  },
  h3: {
    fontSize: 36,
    fontFamily: fonts.teko,
    fontWeight: fontWeights.medium,
  },
  h4: {
    fontSize: 24,
    fontFamily: fonts.poppins,
    fontWeight: fontWeights.medium,
  },
  h5: {
    fontSize: 20,
    fontFamily: fonts.poppins,
    fontWeight: fontWeights.medium,
  },
  h6: {
    fontSize: 20,
    fontFamily: fonts.poppins,
    fontWeight: fontWeights.regular,
  },
  button: {
    fontFamily: fonts.poppins,
    fontWeight: fontWeights.medium,
  },
};

export default Object.freeze(typography);
