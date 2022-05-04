import React from "react";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";



 import {Container, Titulo, Subtitulo, Input, Botao} from './styles'

function Pesquisa() {

      const [latitude, setLatitude] = useState(-19.8157)
      const [longitude, setLongitude] = useState(-43.9542)
      const [details, setDetails] = useState(null)

      useEffect(()=>{
        navigator.geolocation.getCurrentPosition( (position) => {
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)
      })
      })
      
      useEffect(()=>{
        fetch("https://geolocation-db.com/json/fb79dea0-caa7-11ec-aad1-5d8adccafc58")
        .then(response => response.json())
        .then( data => setDetails(data))
      })
       
 /*     function atualizaEndereco() {
        <Botao><Link>Usar minha localização atual: {details.city}, {details.country_name}</Link></Botao>
      }*/
      
    return (
      <div>

      <Container>

          {details && <ul>
            {/*<li>Localização : {`${details.city}, ${details.country_name}, ${details.city}(${details.country_code}) `}</li>*/}
            {/* <li>IP: {details.IPv4}</li>*/}
            {/*<li>Latitude: {details.latitude}</li>
            <li>Longitude: {details.longitude}</li> */}
            <button onClick={event =>  window.location.href='/planos'}>Usar minha localização atual: {details.city}, {details.country_name}</button>
            
          </ul>}
            
          <Titulo>Um texto um pouco aleatório aqui.</Titulo>
          <Subtitulo>Um subtitulo legal aqui.</Subtitulo>
          <Input><input className="input-estilo" placeholder="Seu endereço."/></Input>
         
      </Container>          
      </div>
    );
  }
  
  export default Pesquisa;
  