import { red, blueGrey, cyan, lightBlue } from "@material-ui/core/colors";

const lightText = {
    primary: "rgb(17, 24, 39)",
    secondary: "rgb(107, 114, 128)",
    disabled: "rgb(149, 156, 169)",
};

const darkText = {
    primary: "rgb(255,255,255)",
    secondary: "rgb(229, 231, 235)",
    disabled: "rgb(156, 163, 175)",
};

export const ThemesConsts: { [key: string]: any } = {
    default: {
        palette: {
            type: "light",
            text: lightText,
            common: {
                black: "rgb(17, 24, 39)",
                white: "rgb(255, 255, 255)",
            },
            primary: {
                light: "#BFC4E6",
                main: "#2A3BAB",
                dark: "#0F1980",
            },
            secondary: {
                light: "#C2ECF0",
                main: "#33C1CD",
                dark: "#149EAE",
                contrastText: "#1E1F23",
            },
            background: {
                paper: "#FFFFFF",
                default: "#EDF0F6",
            },
            error: red,
        },
    },
    defaultDark: {
        palette: {
            type: "dark",
            text: darkText,
            common: {
                black: "rgb(17, 24, 39)",
                white: "rgb(255, 255, 255)",
            },
            primary: {
                light: blueGrey[500],
                main: blueGrey[800],
                dark: blueGrey[900],
            },
            secondary: {
                light: cyan[100],
                main: cyan[500],
                dark: cyan[900],
            },
            background: {
                paper: "#1E2125",
                default: "#121212",
            },
            error: red,
        },
    },
    greyDark: {
        palette: {
            type: "light",
            text: lightText,
            common: {
                black: "rgb(17, 24, 39)",
                white: "rgb(255, 255, 255)",
            },
            primary: {
                light: blueGrey[900],
                main: blueGrey[900],
                dark: blueGrey[900],
            },
            secondary: {
                light: lightBlue[400],
                main: lightBlue[600],
                dark: lightBlue[700],
            },
            background: {
                paper: "#FFFFFF",
                default: "#F7F7F7",
            },
            error: red,
        },
    },
    light: {
        palette: {
            type: "light",
            text: lightText,
            common: {
                black: "rgb(17, 24, 39)",
                white: "rgb(255, 255, 255)",
            },
            primary: {
                light: "#D3C0CD",
                main: "#6B2C57",
                dark: "#3C102C",
            },
            secondary: {
                light: "#FDEAC9",
                main: "#F9B84B",
                dark: "#F59123",
                contrastText: "#1E1F23",
            },
            background: {
                paper: "#FFFFFF",
                default: "#FAFAFE",
            },
            error: red,
        },
    },
    dark: {
        palette: {
            type: "dark",
            text: darkText,
            common: {
                black: "rgb(17, 24, 39)",
                white: "rgb(255, 255, 255)",
            },
            primary: {
                light: "#C3C2D2",
                main: "#36336A",
                dark: "#16143C",
            },
            secondary: {
                light: "#D6CEFC",
                main: "#765CF5",
                dark: "#4630EE",
                contrastText: "#FFFFFF",
            },
            background: {
                paper: "#2D2A5D",
                default: "#26244E",
            },
            error: red,
        },
    },
};
