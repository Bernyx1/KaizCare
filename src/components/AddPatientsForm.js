import React, { Component } from 'react'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import AddPatients from '../js/AddPatients.js'




export default class AddPatientsForm extends Component {
    render() {
        return (
            <div>
                 <Header/>
                 <Menu/>
                 <AddPatients/>
                 <Footer/>
            </div>
        )
    }
}

