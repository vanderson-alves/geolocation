import React from "react";
import {Link} from 'react-router-dom'

import {Container, Titulo, Paragrafo, Botao} from './styles'

function Home() {
    return (

      <Container>
              
          <Titulo>Meu Plano</Titulo>

          <Paragrafo>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet massa a
          lorem ornare suscipit et ut neque. Ut aliquet luctus elit sit amet sodales. Donec
          nec interdum tortor. Sed congue maximus placerat. Phasellus in ligula tristique,
          sagittis libero in, convallis risus. Phasellus quis ultrices magna, id ultricies turpis. 
          </Paragrafo>

          <Botao className="botao1">
            <Link style={{color: "#FFF", textDecoration: 'none' }} to="/pesquisa">Procurar</Link>
          </Botao>

      </Container>
    );
  }
  
  export default Home;
  