import React from 'react';

import { Container, Day } from './styles';

const WeatherList = ({ weather }) => (    
    <Container>
        <Day>
            <header>
                <h3><strong>{(new Date(weather.data[12].date).getDate())}</strong></h3>
                <small>
                    {(new Date(weather.data[12].date).getMonth())+1}
                    /
                    {(new Date(weather.data[12].date).getFullYear())}
                </small>
            </header>
            <ul>
                <li>
                    {weather.data[12].temperature.temperature} <small>ºC Temperature</small>
                </li>
                <li>
                    {weather.data[12].rain.precipitation} <small>precipitation</small>
                </li>
                <li>
                    {weather.data[12].wind.velocity} <small>wind velocity</small>
                </li>
                <li>
                    {weather.data[12].wind.direction} <small>wind direction</small>
                </li>
            </ul>
        </Day>

        <Day>
            <header>
                <h3><strong>{(new Date(weather.data[36].date).getDate())}</strong></h3>
                <small>
                    {(new Date(weather.data[36].date).getMonth())+1}
                    /
                    {(new Date(weather.data[36].date).getFullYear())}
                </small>
            </header>
            <ul>
                <li>
                    {weather.data[36].temperature.temperature} <small>ºC Temperature</small>
                </li>
                <li>
                    {weather.data[36].rain.precipitation} <small>precipitation</small>
                </li>
                <li>
                    {weather.data[36].wind.velocity} <small>wind velocity</small>
                </li>
                <li>
                    {weather.data[36].wind.direction} <small>wind direction</small>
                </li>
            </ul>
        </Day>

        <Day>
            <header>
                <h3><strong>{(new Date(weather.data[60].date).getDate())}</strong></h3>
                <small>
                    {(new Date(weather.data[60].date).getMonth())+1}
                    /
                    {(new Date(weather.data[60].date).getFullYear())}
                </small>
            </header>
            <ul>
                <li>
                    {weather.data[60].temperature.temperature} <small>ºC Temperature</small>
                </li>
                <li>
                    {weather.data[60].rain.precipitation} <small>precipitation</small>
                </li>
                <li>
                    {weather.data[60].wind.velocity} <small>wind velocity</small>
                </li>
                <li>
                    {weather.data[60].wind.direction} <small>wind direction</small>
                </li>
            </ul>
        </Day>        
    </Container>
);

export default WeatherList;
