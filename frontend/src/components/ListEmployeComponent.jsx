import React, { Component } from 'react'
import { NavLink,Link } from 'react-router-dom'
import EmployeServices from './services/EmployeServices'

export default class ListEmployeComponent extends Component {
    constructor(props){
        super(props)
        this.state  = {
            employees: [] // Array
        }
        this.editEmploye = this.editEmploye;
        this.deleteEmploye = this.deleteEmploye;
    }

    componentDidMount(){
        EmployeServices.getEmployes().then((res) => {
            this.setState({employees: res.data});
        });
    }

    deleteEmploye(id){
        // rest api delete method
        EmployeServices.deleteEmployesById(id).then(res => {
            this.setState({
                employees: this.state.employees.filter(employe => employe.id !== id)
            })
        });
    }
    

    render() {
        return (
            <div className="container">
                <h2 className="text-center mt-5">Liste des employés</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Nom de l'employé</th>
                                <th>Prénoms de l'employé</th>
                                <th>Email de l'employé</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map(
                                employe => 
                                <tr key={employe.id}>
                                    <td>{employe.firstName}</td>
                                    <td>{employe.lastName}</td>
                                    <td>{employe.emailId}</td>
                                    <td>
                                        <Link to={{  pathname: `/modifier-employes/${employe.id}`,  state: employe.id}}><button className="btn btn-info">Modifier</button></Link>
                                        <button style={{marginLeft: "10px"}} onClick={() => {this.deleteEmploye(employe.id)}} className="btn btn-danger">Supprimer</button>
                                        <button style={{marginLeft: "10px"}} onClick={() => {this.viewEmploye(employe.id)}} className="btn btn-info">voir</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
