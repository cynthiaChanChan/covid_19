import React from "react";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Card.module.css";

const CardItem = ({ card: { title, info, className, value }, lastUpdate }) => {
    return (
        <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles[className])}
        >
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h5">
                    <CountUp start={0} end={value} duration={1} separator="," />
                </Typography>
                <Typography color="textSecondary">
                    {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2">{info}</Typography>
            </CardContent>
        </Grid>
    );
};

export default CardItem;
