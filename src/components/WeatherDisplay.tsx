// WeatherDisplay.tsx
import React from 'react';
import { Typography } from '@mui/material';

interface WeatherDisplayProps {
  weatherData: any;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  // Convert Kelvin to Celsius
  const temperatureInCelsius = (weatherData.main.temp - 273.15).toFixed(2);

  return (
    <div style={{ marginTop: '1rem' }}>
      <Typography variant="h6">
        Weather in {weatherData.name}, {weatherData.sys.country}
      </Typography>
      <Typography variant="body1">
        Temperature: {temperatureInCelsius} °C
      </Typography>
      <Typography variant="body1">
        Weather: {weatherData.weather[0].description}
      </Typography>
    </div>
  );
};

export default WeatherDisplay;
