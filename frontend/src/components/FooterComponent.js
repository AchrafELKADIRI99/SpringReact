import React, { Component } from 'react'

export default class FooterComponent extends Component {
    
    constructor(props){
        super(props)
        this.state ={

        } 
    }
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">THIS IS THE FOOTER</span>
            </footer>
        )
    }
}
