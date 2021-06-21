import * as React from "react";
import { IProps } from "@Element/Common/Badge/Badge";
import { useStyles } from "@Element/Common/Badge/BadgeStyle";

const Badge: React.FC<IProps> = ({ bgColor, textColor, text }) => {
    const classes = useStyles({
        bgColor,
        textColor,
    });

    return <span className={classes.badge}>{text}</span>;
};

export { Badge };
