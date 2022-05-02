import React from "react";
import {Link} from 'react-router-dom'

import {Head, Container, Titulo} from './styles'

function Header() {
    return (
      <Container>
          <Head>
               <Titulo className="logo">
                  <Link to="/">OCTUPUS</Link>
               </Titulo>   
          </Head>
      </Container>
    );
  }
  
  export default Header;
  