import { NextPage } from "next";
import React from "react";
import { ErrorPage } from "@Template/index";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Custom404: NextPage = () => {
    return <ErrorPage code="404" message="Sorry but we could not find the page you are looking for" />;
};

export const getStaticProps = async ({ locale }: any) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
};

export default Custom404;
