import React from "react";
import {Link} from 'react-router-dom'
import {Container, List, Titulo, Botao} from './styles'

function Planos() {
    return (
      <div>
          <Container>

            <Titulo>Planos encontrados:</Titulo>

            <List>
                <li>
                  <div>Pacote</div>
                  <div>Serviço 1, Serviço 2, Serviço 3</div>
                  <div className="container-baixo">
                  <div>Valor</div>
                  <div>Distância</div>
                  </div>
                </li>

                <li>
                  <div>Pacote</div>
                  <div>Serviço 1, Serviço 2, Serviço 3</div>
                  <div className="container-baixo">
                  <div>Valor</div>
                  <div>Distância</div>
                  </div>
                </li>

                <li>
                  <div>Pacote</div>
                  <div>Serviço 1, Serviço 2, Serviço 3</div>
                  <div className="container-baixo">
                  <div>Valor</div>
                  <div>Distância</div>
                  </div>
                </li>
            </List>

            <Botao> <Link style={{color: "#FFF", textDecoration: 'none'}} to="/pesquisa">Voltar</Link></Botao>

          </Container>
      </div>
    );
  }
  
  export default Planos;
  