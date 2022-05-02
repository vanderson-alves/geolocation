import React from "react";
import { Link } from "react-router-dom";
import {Container, Titulo, Maps, Botao} from './styles'
import map from '../../assets/map.jpg'

function Mapa() {
    return (
      <Container>
          <Titulo>Mapa</Titulo>

          <Maps><img src={map} width="700px"/></Maps>

          <Botao> <Link style={{color: "#FFF", textDecoration: 'none'}} to="/planos">Voltar</Link></Botao>

      </Container>
    );
  }
  
  export default Mapa;
  