import React, { Component } from "react";
import Search from "./components/Search";
import Weather from "../src/components/WeatherItem";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import WeatherItem from "./components/WeatherItem";

import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Houssam"
    };
  }


  render() {
    return (
      <div className="app">
        
        <header className="app__header">
        <nav>
           <input type="text"  placeholder="Search a city here"></input>
           <button type="submit">Find Weather</button>
         </nav>
        </header>


        <div className="app__main">
          <h2> Temperature 10 to 11 </h2>
          <p> <b> Humidity </b>  78%  <b> Pressure </b> 1000.8 </p>

</div>

<div className="container">


<div>
  <p>03:00 </p>
  <img src ="src\img\weather-icons\drizzle.svg" alt="Cloudy"></img>
  <p> 9 C </p>
</div>

<div>
  <p>06:00 </p>
  <img src="C:\Users\princ\Weather-API\src\img\weather-icons\rain.svg" alt="Cloudy"></img>
  <p> 14 C </p>
</div>

<div>
  <p>09:00 </p>
  <img src="C:\Users\princ\Weather-API\src\img\weather-icons\storm.svg" alt="Sun"></img>
  <p> 17 C </p>
</div>

<div>
  <p>12:00 </p>
  <img src="C:\Users\princ\Weather-API\src\img\weather-icons\fog.svg" alt="fog"></img>
  <p> 18 C </p>
</div>

<div>
  <p>15:00 </p>
  <img src="C:\Users\princ\Weather-API\src\img\weather-icons\fog.svg" alt="fog"></img>
  <p> 16 C </p>
</div>

<div>
  <p>18:00 </p>
  <img src="C:\Users\princ\Weather-API\src\img\weather-icons\fog.svg" alt="fog"></img>
  <p> 13 C </p>
</div>

<div>
  <p>21:00 </p>
  <img src="C:\Users\princ\Weather-API\src\img\weather-icons\fog.svg" alt="fog"></img>
  <p> 13 C </p>
</div>


      
      </div>
      </div>
    );
  }
}


export default App;

