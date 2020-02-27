import React, { Component } from 'react';
import api from '../../services/api';
// import { Link } from 'react-router-dom';

import { Container, Form, Div } from './styles';

import WeatherHead from '../../components/weatherHead';
import WeatherList from '../../components/weatherList';

export default class Main extends Component {

   state = {
      weather: null,
      username: '',
      cityName: '',
      state: ''
   }

   componentDidMount(){
      
   }

   loadWeather = async (username, cityName, state) => {
      const response = await api.get(
         `/climate?username=${username}&cityName=${cityName}&state=${state}`
      );

      this.setState({ 
         weather: response.data
      });

      console.log(response.data);
   }

   handleChange = event => {
      this.setState({ [event.target.name]: event.target.value })
  }

   handleSubmit = async event => {
      event.preventDefault();
      
      console.log("Username: " + this.state.username)
      console.log("CityName: " + this.state.cityName)
      console.log("State: " + this.state.state)
      
      await this.loadWeather(
         this.state.username, 
         this.state.cityName, 
         this.state.state
      );
      
      console.log("STATE REACT");
      console.log(this.state.weather);
   }

   render(){
      
      // const { weather, username, cityName, state } = this.state;

      const weatherList = this.state.weather;
      let weatherComponent = null;
      let alertRain = null;
      let alert = null;

      if (weatherList) {
        if (this.state.weather.error) {
            alert = this.state.weather.error;
        } else {           
           this.state.weather.data.forEach((date) => {
               if (date.rain.precipitation > 1 && alertRain === null) {
                  alertRain = 'Atenção! Alerta de chuva em sua região!';
               }
           });        
            weatherComponent = [
               <WeatherHead weather={this.state.weather} alertRain={alertRain} />,
               <WeatherList weather={this.state.weather} />
            ];
        }
      } else {
        weatherComponent = null;
      }

      return (
         <div>
            <Container>
               <Form onSubmit={this.handleSubmit}>
                  <Div>
                     <li>
                        <ul>
                           <label>Username:</label>
                           <input type="text" name="username" onChange={this.handleChange} autoFocus />
                        </ul>
                        <ul>
                           <label>City Name:</label>
                           <input type="text" name="cityName" onChange={this.handleChange} />
                        </ul>
                        <ul>
                           <label>State:</label>
                           <input type="text" name="state" onChange={this.handleChange} />
                        </ul>
                        <ul>
                           <button type="submit">Search Weather</button>
                        </ul>
                     </li>
                     <h1>{alert}</h1>
                  </Div>
               </Form>
            </Container>
            {weatherComponent}
         </div>
      );
   }
}