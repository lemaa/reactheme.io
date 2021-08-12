import { createStyles, lighten, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
        },
        paper: {
            width: "100%",
            marginBottom: theme.spacing(2),
        },
        table: {
            minWidth: 750,
            "& thead.MuiTableHead-root": {
                backgroundColor: theme.palette.primary.dark,
                color: theme.palette.common.white,
            },
            "& .MuiTableCell-head": {
                color: theme.palette.common.white,
                borderLeft: `1px solid ${theme.palette.common.white}`,
            },
            "& .MuiTableSortLabel-root.MuiTableSortLabel-active.MuiTableSortLabel-root.MuiTableSortLabel-active .MuiTableSortLabel-icon": {
                color: theme.palette.common.white,
            },
            "& .MuiTableSortLabel-root.MuiTableSortLabel-active": {
                color: theme.palette.common.white,
            },
            "& .MuiTableRow-root:nth-of-type(odd)": {
                backgroundColor: theme.palette.action.hover,
            },
        },
        visuallyHidden: {
            border: 0,
            clip: "rect(0 0 0 0)",
            height: 1,
            margin: -1,
            overflow: "hidden",
            padding: 0,
            position: "absolute",
            top: 20,
            width: 1,
        },
    })
);

const useToolbarStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(1),
        },
        highlight:
            theme.palette.type === "light"
                ? {
                      color: theme.palette.secondary.main,
                      backgroundColor: lighten(theme.palette.secondary.light, 0.85),
                  }
                : {
                      color: theme.palette.text.primary,
                      backgroundColor: theme.palette.secondary.dark,
                  },
        title: {
            flex: "1 1 100%",
        },
    })
);

export { useStyles, useToolbarStyles };
