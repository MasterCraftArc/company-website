import palette from "./palette";
import typography from "./typography";

const components = {
  MuiSnackbarContent: {
    styleOverrides: {
      root: {
        background: "#1F2F98",
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "rgba(255, 255, 255, 0.42)",
          },
        },
        "& :-webkit-autofill": {
          transitionDelay: "9999999s",
        },
      },
    },
  },
  MuiButton: {
    variants: [
      {
        props: { size: "large" },
        style: {
          fontSize: 15,
          letterSpacing: 0.46,
        },
      },
      {
        props: { size: "medium" },
        style: {
          fontSize: 14,
          letterSpacing: 0.4,
        },
      },
      {
        props: { size: "small" },
        style: {
          fontSize: 13,
          letterSpacing: 0.46,
        },
      },
    ],
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        ":hover": {
          backgroundColor: palette.action?.hover,
        },
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        ...typography.subtitle1,
        ":hover": {
          backgroundColor: palette.action?.hover,
        },
      },
    },
  },
};
export default Object.freeze(components);
