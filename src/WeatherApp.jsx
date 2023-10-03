import React, { useState } from 'react'
import { useFetch } from './Hooks/useFetch'

export const WeatherApp = () => {

const {ciudad,dataClima,difKelvin,handleCambioCiudad,fetchClima} = useFetch()



const handleSubmit=(e)=>{
e.preventDefault()
if(ciudad.length>0){
    fetchClima()
}
}


  return (

<>

<div className='input-conteiner'>
<div className='recuadro-transparente'>

<form onSubmit={handleSubmit}>

<input className='mi-input' type="text" 
value={ciudad}
placeholder='Ingresa una ciudad'
onChange={handleCambioCiudad}
/>

<button type='submit'></button>

</form>
 {dataClima &&(
  <>
  
  <p>{dataClima.weather[0].description}</p>
  <p>Longitud: {dataClima.coord.lon}</p>
  <p>Latitud: {dataClima.coord.lat}</p>
  
  <hr />
<h2>Detalles del Clima</h2>

<p>Humedad: {dataClima.main.humidity}%</p>
<p>Nubes: {dataClima.clouds.all}%</p>
<p>Viento: {dataClima.wind.speed}km/h</p>

<hr />

<p>Pais: {dataClima.sys.country}</p>

  </>
  

 )


 }

</div>
</div>
{

dataClima &&(




<div className='contenedor-principal'>

  <div className="mi-div " role="document">
    <div class="modal-content rounded-4 shadow d-flex justify-content-center align-items-center">
    
   
      <h1>{parseInt(dataClima.main.temp-difKelvin)}C° </h1>
      
      <p>{dataClima.name}</p>

      <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}  />
      
      
    </div>
  </div>

</div>



)




}

     
</>

  )
}
