import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Header from './components/Header'

import Home from './pages/Home'
import Mapa from './pages/Mapa'
import Pesquisa from './pages/Pesquisa'
import Planos from './pages/Planos'


    export default function App() {
        return(
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/> 
                    <Route path='/mapa' element={<Mapa/>}/>
                    <Route path='/pesquisa' element={<Pesquisa/>}/>
                    <Route path='/planos' element={<Planos/>}/>
                </Routes>
            </Router>
        )
    }





        
