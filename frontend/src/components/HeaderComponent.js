import React, { Component } from 'react';
import { NavLink,Link } from 'react-router-dom';

class HeaderComponent extends Component {

    constructor(props){
        super(props)
        this.state ={

        } 
    }
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">GESTION DES EMPLOYES</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                        <NavLink className="nav-link" to="/">Accueil</NavLink>
                        <NavLink className="nav-link" to="/listes-employes">Liste des employes</NavLink>
                        <NavLink className="nav-link" to="/ajouter-employes">Ajouter employé</NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default HeaderComponent;
