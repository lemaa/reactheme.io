import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, Grid, IconButton } from "@material-ui/core";
import { IProps, MarkerType } from "@Element/Dashboard/WorldMapCard/WorldMapCard";
import useStyles from "@Element/Dashboard/WorldMapCard/WorldMapCardStyle";
import { useAppSettings } from "@Context/index";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { ThemesConsts } from "@Constant/index";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const ReactTooltip = dynamic(() => import("react-tooltip"), { ssr: false });

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const WorldMapCard: React.FunctionComponent<IProps> = ({ title, description, data }: IProps) => {
    const { state } = useAppSettings();
    const classes = useStyles({
        mainTheme: state.theme.main,
    });

    const categories = data.categories.map((item: MarkerType) => item.name);
    const colors: any[] = [
        ThemesConsts[state.theme.main].palette.secondary.dark,
        ThemesConsts[state.theme.main].palette.primary.dark,
        ThemesConsts[state.theme.main].palette.primary.main,
    ];
    const datas = {
        series: data.series,
        options: {
            chart: {
                type: "bar",
                height: 350,
            },
            colors,
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
            <CardHeader
                // eslint-disable-next-line prettier/prettier
                action={(
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    // eslint-disable-next-line prettier/prettier
                  )}
                title={title}
                subheader={description}
            />
            <CardContent className={classes.WMCContent}>
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
