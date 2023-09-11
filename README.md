# Weather App

A simple Weather App built with React and Material-UI.

## Overview

The Weather App allows users to check the current weather conditions for a specific city. It fetches weather data from the OpenWeatherMap API and displays temperature, weather description, and location information.

## Features

- Input field to enter the city name
- Fetches and displays current weather data
- Displays temperature in Celsius

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.

### Installation

1. Clone the repository:
    git clone <repository-url>

2. Navigate to the project directory:
    cd weather-app

3. Install dependencies:
    npm install

### Usage

1. Start the development server:
    npm start

2. Open your web browser and go to http://localhost:3000 to use the Weather App.

### Environment Variables

This project uses environment variables to manage configuration settings. Make sure to create a .env file in the project root with the following variables:

REACT_APP_WEATHER_API_KEY=your-api-key

Refer to the API Key section below for details on obtaining an API key from OpenWeatherMap.

### API Key
To use this Weather App, you need to obtain an API key from OpenWeatherMap. Follow these steps to get your API key:

1. Sign up for a free or paid account on OpenWeatherMap.

2. Once logged in, go to your account dashboard and create a new API key.

3. Copy the generated API key and paste it into your .env file as shown in the Environment Variables section above.