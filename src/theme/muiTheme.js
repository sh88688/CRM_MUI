import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    body1: {
      marginBottom: "4px"
    }
  },
  palette: {
    primary: {
      light: "#63ccff",
      main: "#495F69",
      dark: "#26A69A",
      button: "#26A69A",
      contrastText: "#fff"
    },
    secondary: {
      light: "#01e0cb",
      main: "#009688",
      dark: "#0D7C71",
      contrastText: "#fff"
    },
    background: {
      default: "#eaeff1"
    }
  }
});

export default theme;
