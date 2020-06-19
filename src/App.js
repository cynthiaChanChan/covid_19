import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
    state = {
        data: {},
        country: "",
    };

    fetchApi = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country || "" });
    };

    componentDidMount() {
        this.fetchApi();
    }

    handleCountryChange = (event) => {
        const country = event.target.value;
        this.fetchApi(country === "global" ? "" : country);
    };

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;
