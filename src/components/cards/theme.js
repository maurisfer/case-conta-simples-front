import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#45B54A"
    },
    secondary: {
      main: "#45B54A"
    }
  },
  typography: {
    fontFamily: "Niveau Grotesk, Open Sans",
    body2: {
      fontFamily: "Open Sans",
      fontSize: "1.1rem"
    },
  },
  shape: {
    borderRadius: 30,
  },
  spacing: 8,
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: "green"
      },
    },
    MuiInputLabel: {
      root: {
        backgroundColor: "yellow"
      }
    },
    MuiTextField: {
      root: {}
    },
    MuiButton: {
      root: {
        textTransform: "none",
        padding: "20px"
      },
      fullWidth: {
        maxWidth: "300px"
      },
    },
  },
  props: {
    MuiButton: {
      disableRipple: true,
      variant: "contained",
      color: "primary"
    },
    MuiCheckbox: {
      disableRipple: true
    },
    MuiTextField: {
      variant: "filled",
      InputLabelProps: {
        shrink: true,
      },
    },
    MuiPaper: {
      elevation: 12,
    },
    MuiCard: {
      elevation: 12,
    },
  },
});
