import React from "react";
import clsx from "clsx";
import { Default } from "@Layout/index";
import { IProps, IState } from "@Module/MainContainer/MainContainer";
import useStyles from "@Module/MainContainer/MainContainerStyle";

const Main: React.FunctionComponent<IProps> = ({ children }: IProps) => {
    const [open, setOpen] = React.useState(true);
    const drawerWidth = 240;

    const handleDrawerOpen = () => {
        setOpen(!open);
    };
    const drawerstate: IState = {
        drawerWidth,
    };
    const classes = useStyles(drawerstate);

    return (
        <Default onClick={handleDrawerOpen} open={open} drawerwidth={drawerWidth}>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <div className={classes.container}>{children}</div>
            </main>
        </Default>
    );
};
export { Main };
