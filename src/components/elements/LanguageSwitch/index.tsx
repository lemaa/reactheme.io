import * as React from "react";
import { Button, Grid, List, ListItem, ListItemText, Typography, Avatar, ListItemAvatar } from "@material-ui/core";
import { IProps } from "@Element/LanguageSwitch/LanguageSwitch";
import { useStyles } from "@Element/LanguageSwitch/LanguageSwitchStyle";
import { cdnImage } from "@Util/index";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";

const LanguageSwitch: React.FC<IProps> = ({ ListLanguageItems, srcFlags }) => {
    const classes = useStyles();
    const router = useRouter();
    const [dialogOpen, setDialogOpen] = React.useState<false | boolean>(false);
    let localeLanguage: string = "en";
    if (router !== null && router.locale !== undefined) localeLanguage = router.locale;
    const defaultLanguage = ListLanguageItems.find((languageItem: { language: string; languageAbbr: string; nameFlag: string }) => languageItem.languageAbbr === localeLanguage);
    const [selectedValue] = React.useState<{ language: string; languageAbbr: string; nameFlag: string }>(defaultLanguage);

    const handleClickOpen = () => {
        setDialogOpen(!dialogOpen);
    };

    return (
        <div className={classes.Languagecontainer}>
            <Button className={classes.grow} onClick={handleClickOpen}>
                <Grid container spacing={3}>
                    <Grid item xs={5}>
                        <Avatar className={classes.flagPicture} variant="square" alt={selectedValue.nameFlag} src={cdnImage(selectedValue.nameFlag, srcFlags)} />
                    </Grid>
                    <Grid item xs={7} className={classes.ContainerText}>
                        <Typography className={classes.languageAbbrName}>{selectedValue.languageAbbr}</Typography>
                    </Grid>
                </Grid>
            </Button>
            <div
                className={clsx(classes.quickbarDetails, {
                    [classes.quickbarDetailsOpen]: dialogOpen,
                })}
            >
                <div className={classes.quickbarDetailsContent}>
                    <List>
                        {ListLanguageItems.map((languageItem: { language: string; languageAbbr: string; nameFlag: string }) => (
                            <Link href="/" locale={languageItem.languageAbbr} key={languageItem.language} passHref>
                                <ListItem button component="a">
                                    <ListItemAvatar className={classes.root}>
                                        <Avatar className={classes.flagPicture} variant="square" alt={languageItem.nameFlag} src={cdnImage(languageItem.nameFlag, srcFlags)} />
                                    </ListItemAvatar>
                                    <ListItemText classes={{ root: classes.languageName }} primary={languageItem.language} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </div>
            </div>
        </div>
    );
};

export { LanguageSwitch };
