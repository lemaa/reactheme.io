import { NextPage } from "next";
import React from "react";
import { HomePage } from "@Template/index";
import { Main } from "@Module/index";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
    return (
        <Main>
            <HomePage />
        </Main>
    );
};

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

export default Home;
