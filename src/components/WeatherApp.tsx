// WeatherApp.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, CircularProgress, Paper } from '@mui/material';
import WeatherDisplay from './WeatherDisplay';

const WeatherApp = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY || 'DEFAULT_KEY'; //openweathermap.org api key here

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          Weather App
        </Typography>
        <TextField
          label="Enter a city"
          variant="outlined"
          fullWidth
          value={city}
          onChange={(e) => setCity(e.target.value)}
          disabled={loading}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={fetchWeather}
          style={{ marginTop: '1rem' }}
          disabled={loading || !city}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            'Get Weather'
          )}
        </Button>

        {weatherData && <WeatherDisplay weatherData={weatherData} />}
      </Paper>
    </Container>
  );
};

export default WeatherApp;
