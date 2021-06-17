import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup } from "@testing-library/react";
import { render } from "@Test/utils";
import { LanguageSwitch } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<LanguageSwitch />", () => {
    const ListLanguageItems = [
        {
            language: "english",
            languageAbbr: "en",
            nameFlag: "etats-unis.svg",
        },
        {
            language: "fr",
            languageAbbr: "french",
            nameFlag: "france.svg",
        },
    ];
    render(<LanguageSwitch srcFlags="static/images/flags" ListLanguageItems={ListLanguageItems} />);
});
