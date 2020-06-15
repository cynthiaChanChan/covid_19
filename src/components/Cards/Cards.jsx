import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

import Card from "../Card/Card";
import cardsData from "./Cards.data";
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    const [cardsDetail, setCardsDetail] = useState(cardsData);

    useEffect(() => {
        if (!confirmed) {
            return;
        }
        const updatedCardsData = { ...cardsData };
        updatedCardsData.confirmed.value = confirmed.value;
        updatedCardsData.recovered.value = recovered.value;
        updatedCardsData.deaths.value = deaths.value;

        setCardsDetail(updatedCardsData);
    }, [confirmed, deaths, recovered]);

    if (!confirmed) {
        return "Loading...";
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                {Object.values(cardsDetail).map((card, index) => (
                    <Card card={card} lastUpdate={lastUpdate} key={index} />
                ))}
            </Grid>
        </div>
    );
};

export default Cards;
