import React from "react";
import Button from "@material-ui/core/Button";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import { ContentHeader } from "@Element/index";

const NewProductPage: React.FunctionComponent<any> = () => {
    const customHeaderButton = (
        <Button color="primary">
            <FullscreenIcon />
        </Button>
    );

    return (
        <div style={{ width: "100%" }}>
            <ContentHeader pathName="Contacts" filterButton refreshButton customButton={customHeaderButton} />
        </div>
    );
};

export { NewProductPage };
