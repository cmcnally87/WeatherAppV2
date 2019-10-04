import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css' 
import Button from './components/Button.jsx'
import Header from './components/Header.jsx'
import WeatherTable from './components/WeatherTable.jsx'

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
    }

    this.getWeather = this.getWeather.bind(this);
  }

  getWeather = async (e) => {
    const weatherApiKey = 'd9ff1ea8e6576691d7b12ee8f88d044b';
    const cityId = e.currentTarget.value;
    if(cityId === 'Lurgan'){
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=2652151&appid=${weatherApiKey}&units=metric`)
      const data = await api_call.json();
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
    }
     else if(cityId === 'Liverpool'){
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=7839747&appid=${weatherApiKey}&units=metric`)
      const data = await api_call.json();
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
    }
    else if(cityId === 'Belfast'){
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=3333223&appid=${weatherApiKey}&units=metric`)
      const data = await api_call.json();
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
    }
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="btn-group btn-group-lg mx-auto px-auto mb-2 mt-2">
          <Button city="Lurgan" getWeather={this.getWeather} />
          <Button city="Belfast" getWeather={this.getWeather} />
          <Button city="Liverpool" getWeather={this.getWeather} />
        </div>
        <WeatherTable weather={this.state} />
      </div>
    )
  }
}

export default App
