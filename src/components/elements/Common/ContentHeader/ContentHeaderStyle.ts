import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme, { mainTheme: string }>(() =>
    createStyles({
        ContainerPathName: {
            padding: "5px",
        },
    })
);

export default useStyles;
