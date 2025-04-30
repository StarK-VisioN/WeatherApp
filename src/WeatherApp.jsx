import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({            // going to pass weatherInfo object as a prop to InfoBox
        city: "Delhi",
        feelsLike: 307.17,
        humidity: 16,
        temp: 309.47,
        tempMax: 309.47,
        tempMin: 309.47,
        weather: "clear sky"
    });

    let updateInfo = (newInfo) => {          // will pass this function as a prop to SearchBox
        setWeatherInfo(newInfo);
    }

    return(
        <div className="WeatherApp">
            <i><h1>Weather App</h1></i>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>               {/* passing weatherInfo i.e. currentState as prop to InfoBox.jsx */}
        </div>
    )
}