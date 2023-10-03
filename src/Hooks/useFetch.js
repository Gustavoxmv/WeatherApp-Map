import React, { useState } from 'react'

export const useFetch = () => {

    const urlbase='https://api.openweathermap.org/data/2.5/weather'
    const API_KEY='20a213b3c40bc18907d63c0a321b7085'
    const difKelvin=273.15    
    
    const [ciudad, setciudad] = useState('')
    const [dataClima, setdataClima] = useState(null)
    
    
    const handleCambioCiudad=(e)=>{
    
    setciudad(e.target.value)
    
    }
    
    const fetchClima= async ()=>{
        try {
          
            const response= await fetch(`${urlbase}?q=${ciudad}&appid=${API_KEY}`)
            const data = await response.json()
            if (data.cod === 200) {
              // Verifica si la respuesta de la API es válida (código 200)
              setdataClima(data);
            } else {
              // En caso de que la ciudad no exista o haya un error en la API,
              // puedes mostrar un mensaje de error o realizar otra acción apropiada.
              console.error('La ciudad no existe o ha ocurrido un error en la API');
              alert('Ciudad no encontrada')
              setDataClima(null); // Limpia los datos para evitar que se muestren datos antiguos
            }
         
            
        } catch (error) {
            console.error('Ha ocurrido un error')
             
        }
        
        
        }

  return {

    ciudad,
    dataClima,
    difKelvin,
    handleCambioCiudad,
    fetchClima
  }
}
