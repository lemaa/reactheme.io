import React from "react";
import useStyles from "@Template/ErrorPage/ErrorStyle";
import { IProps } from "@Template/ErrorPage/Error";
import { Box, Button } from "@material-ui/core";
import Link from "next/link";

const ErrorPage: React.FunctionComponent<IProps> = ({ code, message }) => {
    const classes = useStyles();

    return (
        <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={2}>
                <Box className={classes.mainContainer}>
                    <h1 className={classes.errorCode}>{code}</h1>
                    <p className={classes.errorMessage}>{message}</p>
                    <Link href="/">
                        <Button color="primary">Home</Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export { ErrorPage };
