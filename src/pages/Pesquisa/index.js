import React from "react";

 import {Container, Titulo, Subtitulo, Input} from './styles'

function Pesquisa() {
    return (
      <div>

      <Container>

          <Titulo>Um texto um pouco aleatório aqui.</Titulo>
          <Subtitulo>Um subtitulo legal aqui.</Subtitulo>
          <Input><input className="input-estilo" placeholder="Seu endereço."/></Input>
         
      </Container>          
      </div>
    );
  }
  
  export default Pesquisa;
  