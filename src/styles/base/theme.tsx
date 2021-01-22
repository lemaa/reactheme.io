import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#5e35b1',
        dark: '#280680',
        light: '#9162e4',
    },
    secondary: {
        main: '#212121',
        dark: '#000000',
        light: '#484848',
    },
    error: {
      main: '#f50057',
      dark: '#bb002f',
      light: '#ff5983',
    },
    warning: {
        main: '#f44336',
        dark: '#ba000d',
        light: '#ff7961',
      },
    success: {
        main: '#33691e',
        dark: '#003d00',
        light: '#629749',
      },
    background: {
      default: '#fff',
    },
  },
});

export default theme;