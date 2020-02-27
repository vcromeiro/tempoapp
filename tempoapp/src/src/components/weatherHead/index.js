import React from 'react';

import { ContainerHead } from './styles';

const WeatherHead = ({ weather, alertRain }) => (    
    <ContainerHead>
        <h1>{weather.name}</h1>
        <h3>{weather.state}</h3>
        <h2>{alertRain}</h2>
    </ContainerHead>
);

export default WeatherHead;
