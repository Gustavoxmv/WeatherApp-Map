import React from 'react'
import ReactDOM from 'react-dom/client'
import { WeatherApp } from './WeatherApp'
import './styles/style.css'


import { WeatherGUI } from './WeatherGUI'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherApp/>
  </React.StrictMode>,
)
