import React, { Component } from 'react';
import api from '../../services/api';
import ls from 'local-storage';

import { Container, Form, Div } from './styles';

import WeatherHead from '../../components/weatherHead';
import WeatherList from '../../components/weatherList';

export default class Main extends Component {

   state = {
      loading: false,
      weather: null,
      username: '',
      cityName: '',
      state: ''
   }

   componentDidMount(){
      this.setState({ 
         username: ls.get('username') || ''
      });
   }

   loadWeather = async (username, cityName, state) => {

      this.setState({ loading: true });

      try {
         const response = await api.get(
            `/climate?username=${username}&cityName=${cityName}&state=${state}`
         );
   
         this.setState({ 
            weather: response.data
         });
   
         console.log(response.data);
      } catch (error) {
         console.log(error);
      } finally {
         this.setState({ 
            loading: false
         });
      }
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
      ls.set('username', this.state.username);
      
      console.log("STATE REACT");
      console.log(this.state.weather);
   }

   render(){

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
                  alertRain = [
                     'Atenção! Alerta de chuva em sua região! ',
                     <i className="fa fa-umbrella" />
                  ];
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
                           <input type="text" name="username" value={this.state.username} onChange={this.handleChange} autoFocus />
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
                           <button type="submit" disabled={this.state.loading}>
                              {this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'Search Weather'}
                           </button>
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