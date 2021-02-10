import { NextPage } from "next";
import React from "react";
import { HomePage } from "@Template/index";
import { Main } from "@Module/index";

const Home: NextPage = () => {
    return (
        <Main>
            <HomePage />
        </Main>
    );
};

export default Home;
