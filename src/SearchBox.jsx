import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "f92ca050f3e4bdd6eee9b0a064b157d8";

    let getWhetherInfo = async() => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        // console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,     
        }
        console.log(result);
        return result;
        } catch (err) {
            throw err;
        }
        
    }


    let handleChange = (event) => {
        setCity(event.target.value)
    }

    let handleSubmit = async(event) => {
        try {
            event.preventDefault();             // after submitting the form preventDefault function should run
            console.log(city);                  // the city name must come inside console
            setCity("");                        // after that the input value should reset to empty 
            let newInfo = await getWhetherInfo();                   // and based on the search the function of Whether search with the help of API should get call!
            updateInfo(newInfo);
            setError(false);                    // if everything goes right, then error must be removed
        } catch(err) {
            setError(true);
        }
    }
    
    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="city" style={{fontFamily: "cursive"}}><b>Enter your city:</b> </label>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} size="small"/>
                <br />
                <br />
                <Button variant="contained" type='submit'>Search</Button>
                <br />
                <br />
                {error && <p style={{color:"red"}}>No such place exists in our API!</p>}
            </form>
        </div>
    )
}