import React, { Component } from 'react'
import EmployeServices from './services/EmployeServices'

export default class CreateEmployeComponent extends Component {
   
    constructor(props){
        super(props)
        this.state  = {
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.saveEmploye = this.saveEmploye.bind(this);
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }
    changeEmailIdHandler = (event)=> {
        this.setState({emailId: event.target.value});
    }
    saveEmploye = (e) =>{
        e.preventDefault();
        let employe = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId
        };
        console.log("employe => "+JSON.stringify(employe));

        EmployeServices.createEmployes(employe);
        /**
         * Ajout d'une rédirection avec 
         * EmployeServices.createEmployes(employe).then(res => {
         *  Méthode de redirection
         * })
         */
    }

    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Ajouter employe</h3>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <label>Nom(s):</label>
                                        <input type="text" className="form-control" placeholder="Entrez le nom de l'employé" 
                                        name="firstname" value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Prénom(s):</label>
                                        <input type="text" className="form-control" placeholder="Entrez le prénom de l'employé" 
                                        name="lastName" value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Adresse Email: </label>
                                        <input className="form-control" placeholder="Entrez l'adresse email de l'employé" 
                                        name="emailId" value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveEmploye}>Enregistrer</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

