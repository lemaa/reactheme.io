import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { IProps, MarkerType } from "@Element/Dashboard/WorldMapCard/WorldMapCard";
import useStyles from "@Element/Dashboard/WorldMapCard/WorldMapCardStyle";
import { useAppSettings } from "@Context/index";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { ThemesConsts } from "@Constant/index";

const ReactTooltip = dynamic(() => import("react-tooltip"), { ssr: false });

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const WorldMapCard: React.FunctionComponent<IProps> = ({ title, description, data }: IProps) => {
    const { state } = useAppSettings();
    const classes = useStyles({
        mainTheme: state.theme.main,
    });

    const categories = data.categories.map((item: MarkerType) => item.name);

    const datas = {
        series: data.series,
        options: {
            chart: {
                type: "bar",
                height: 350,
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                },
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                categories,
            },
        },
    } as const;
    const config = {
        scale: 160,
        rotation: [-11, 0, 0],
    } as const;
    const primaryMainColor: string = ThemesConsts[state.theme.main].palette.secondary.main;
    const primaryDarkColor: string = ThemesConsts[state.theme.main].palette.secondary.dark;
    const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

    const [content, setContent] = useState("");

    return (
        <Card variant="outlined" className={classes.WorldMapCard}>
            <CardContent className={classes.WMCContent}>
                <Box className={classes.WMCHeader}>
                    <Typography className={classes.WMCTitle} variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography className={classes.WMCDescription} variant="body2" component="p">
                        {description}
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid className={classes.WMCMap} item md={8} xs={12}>
                        <ComposableMap data-tip="" projectionConfig={config} width={800} height={400} style={{ width: "100%", height: "auto" }}>
                            <Geographies geography={geoUrl}>
                                {
                                    ({ geographies }) =>
                                        geographies.map(geo => (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                onMouseEnter={() => {
                                                    const { NAME } = geo.properties;
                                                    setContent(`${NAME}`);
                                                }}
                                                onMouseLeave={() => {
                                                    setContent("");
                                                }}
                                                className={classes.WMCCountries}
                                                style={{
                                                    default: {
                                                        fill: "#D6D6DA",
                                                        outline: "none",
                                                    },
                                                    hover: {
                                                        fill: primaryMainColor,
                                                        outline: "none",
                                                    },
                                                    pressed: {
                                                        fill: primaryDarkColor,
                                                        outline: "none",
                                                    },
                                                }}
                                            />
                                        ))
                                    // eslint-disable-next-line react/jsx-curly-newline
                                }
                            </Geographies>
                            {data.categories.map(({ name, coordinates }: MarkerType) => (
                                <Marker key={name} coordinates={coordinates}>
                                    <circle r={10} fill={primaryDarkColor} stroke="#fff" strokeWidth={2} />
                                </Marker>
                            ))}
                        </ComposableMap>
                        <ReactTooltip>{content}</ReactTooltip>
                    </Grid>
                    <Grid className={classes.WMCMapLegend} item md={4} xs={12}>
                        <Chart options={datas.options} series={datas.series} type="bar" width="100%" height="100%" />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
export { WorldMapCard };
