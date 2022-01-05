import React from 'react'
import ListEmployeComponent from './components/ListEmployeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import PageNotFoundComponent from './components/PageNotFoundComponent'
import CreateEmployeComponent from './components/CreateEmployeComponent'
import UpdateEmployeComponent from './components/UpdateEmployeComponent'
import ViewEmployeComponent from './components/ViewEmployeComponent'
import {
    BrowserRouter as Router, 
    Routes, 
    Route,
  } from 'react-router-dom'
import HomeComponents from './components/HomeComponents'

function App() {
    return (
        <Router>
            <HeaderComponent/>
            <Routes>
                <Route path="/" element={<HomeComponents/>} />
                <Route path="/listes-employes" element={<ListEmployeComponent/>} />
                <Route path="/ajouter-employes" element={<CreateEmployeComponent/>} />
                <Route path="/modifier-employes/:id" element={<UpdateEmployeComponent/>} />
                <Route path="/infos-employes/:id" element={<ViewEmployeComponent/>} />
                <Route path="*" element={<PageNotFoundComponent/>} />
            </Routes>
            <FooterComponent/>
        </Router>
     
    )
}

export default App
