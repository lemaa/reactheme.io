import { NextPage } from "next";
import React from "react";
import HomePage from "@Template/HomePage";
import Main from "@Module/MainContainer/MainContainer";

const Home: NextPage = () => {
    return (
        <Main>
            <HomePage />
        </Main>
    );
};

export default Home;
