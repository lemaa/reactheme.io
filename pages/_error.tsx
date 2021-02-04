import React from "react";
import { NextPage } from "next";

const Error: NextPage<{ statusCode?: number }> = ({ statusCode }) => <p>{statusCode ? `An error ${statusCode} occurred on server` : "An error occurred on client"}</p>;

Error.getInitialProps = ({ res, err }) => {
    let statusCode: number | undefined = 404;

    if (res) statusCode = res.statusCode;
    else if (err) statusCode = err.statusCode;

    return { statusCode };
};

export default Error;
