import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";

import { fetchDailyData } from "../../api";
import styles from "./Chart.module.css";

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData());
        };

        fetchApi();
    }, []);

    return (
        <div className={styles.container}>
            {dailyData.length && (
                <Line
                    data={{
                        labels: dailyData.map(({ reportDate }) => reportDate),
                        datasets: [
                            {
                                data: dailyData.map(
                                    ({ confirmed }) => confirmed.total
                                ),
                                label: "Infected",
                                borderColor: "#3333ff",
                                fill: true,
                            },
                            {
                                data: dailyData.map(
                                    ({ deaths }) => deaths.total
                                ),
                                label: "Deaths",
                                borderColor: "red",
                                backgroundColor: "rgba(255, 0, 0, 0.5)",
                                fill: true,
                            },
                        ],
                    }}
                />
            )}
        </div>
    );
};

export default Chart;
