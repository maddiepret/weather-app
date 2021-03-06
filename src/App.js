import React from "react";

//import componets
//titlesComponent is the title of the page
import Titles from "./components/Title";
//from is where the user will give their input like city name and country
import Form from "./components/Form"
//this is where the actual data from API goes
import Weather from "./components/Weather";
//import css styles
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//get API key
const API_KEY = "ecd2390c6766c92ffff1bebd3f69205a";


class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  }
  render() {
    return (
        <div className="wrapper">
          <div className="main">
            <div className="title-container">
                <Titles />
              <div className=" form-container">
                <Form getWeather={this.getWeather} />
                <Weather 
                  temperature={this.state.temperature} 
                  humidity={this.state.humidity}
                  city={this.state.city}
                  country={this.state.country}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>

    );
  }
};

export default App;