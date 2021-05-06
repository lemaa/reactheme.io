import React from "react";
import clsx from "clsx";
import { IProps } from "@Module/Footer/Footer";
import useStyles from "@Module/Footer/FooterStyle";
import { useAppSettings } from "@Context/index";

const Footer: React.FunctionComponent<IProps> = ({ open, drawerWidth, quickBarWidth, children }: IProps) => {
    const { state } = useAppSettings();
    const classes = useStyles({
        drawerWidth,
        quickBarWidth,
        quickBarPosition: state.layout.config.toolbar.position,
        drawerPosition: state.layout.config.navbar.position,
        footerTheme: state.theme.footer,
        position: state.layout.config.footer.style,
    });
    return (
        <div className={classes.grow}>
            <div
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open && state.layout.config.navbar.display,
                })}
            >
                {children}
            </div>
        </div>
    );
};
export { Footer };
