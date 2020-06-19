import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries(await fetchCountries());
        };
        fetchApi();
    }, []);

    return (
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue="" onChange={handleCountryChange}>
                <option value="global">Global</option>
                {fetchedCountries.map(({ name }, i) => (
                    <option key={i} value={name}>
                        {name}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;
