import React from "react";
import {Link} from 'react-router-dom'
import {Container, List, Titulo, Botao} from './styles'
import { useState, useEffect } from "react";
import api from '../../services/api'

function Planos() {
    
    const [list, setList] = useState([])

    useEffect(()=>{
      async function loadApi() {
        const response = await api.get('list')
        setList(response.data)

        console.log(response.data)
      }

      loadApi()
    }, [])

    return (
      <div>
          <Container>

            <Titulo>Planos encontrados:</Titulo>

            <List>
              {list.map((lista) => {
                return(
                  <>
                      <li key={lista.id}>
                          <div>Pacote </div>
                          <div>Serviço 1, Serviço 2, Serviço 3</div>
                          <div className="container-baixo">
                          <div>R$ {lista.price}</div>
                          <div>Distância</div>
                      </div>
                      </li>
                  </>
                )
              })}
            </List>

            <List>
                  <li>
                      <div>Pacote </div>
                      <div>Serviço 1, Serviço 2, Serviço 3</div>
                      <div className="container-baixo">
                      <div>R$ </div>
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
  