import React, { Component } from 'react'
import AddPatientsForm from './AddPatientsForm'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import Dashboard from './Dashboard'
import PatientsListForm from './PatientsListForm'
import PatientDetailsForm from './PatientDetailsForm'
import EditPatientForm from './EditPatientForm'
import AddDoctorForm from './AddDoctorForm'
import DoctorsListForm from './DoctorsListForm'
import {Switch, Route,Redirect} from 'react-router-dom'


export default class MainComponent extends Component {
  render() {
    return (
   
      <div>
     <Header/>
     <Menu/>
  
     <Switch>
        <Route path='/' component={Dashboard} exact={true} />
         <Route path='/addPatientsForm' component={AddPatientsForm} />
          <Route path='/PatientsListForm' component={PatientsListForm}/>
          <Route path='/patientDetailsForm' component={PatientDetailsForm}/>
          <Route path='/editPatientForm' component={EditPatientForm} />
          <Route path='/addDoctorForm' component={AddDoctorForm} />
          <Route path='/allDoctorsForm' component={DoctorsListForm} />
         <Redirect to='/' />
        
     </Switch>
     <Footer/>
   </div>
  
    )
  }
}
