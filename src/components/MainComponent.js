import React, { Component } from 'react'
import PatientRegistration from './PatientRegistration'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import Dashboard from './Dashboard'
import PatientsListForm from './PatientsListForm'
import PatientDetailsForm from './PatientDetailsForm'
import EditPatientForm from './EditPatientForm'
import AddDoctorForm from './AddDoctorForm'
import DoctorsListForm from './DoctorsListForm'
import Login from './Login'
import ResetPassword from './ResetPassword'
import Recover from './Recover'
import Register from './Register'
import LockScreen from './LockScreen'
import AddAppointment from './AddAppointment'
import AppointmentList from './AppointmentList'
import AppointmentDetails from './AppointmentDetails'
import {Switch, Route,Redirect} from 'react-router-dom'


export default class MainComponent extends Component {
  render() {
    return (
   
      <div>
     <Header/>
     <Menu/>
  
     <Switch>
        <Route path='/' component={Dashboard} exact={true} />
         <Route path='/newPatientRegistrationForm' component={PatientRegistration} />
          <Route path='/PatientsListForm' component={PatientsListForm}/>
          <Route path='/patientDetailsForm' component={PatientDetailsForm}/>
          <Route path='/editPatientForm' component={EditPatientForm} />
          <Route path='/addDoctorForm' component={AddDoctorForm} />
          <Route path='/allDoctorsForm' component={DoctorsListForm} />
          <Route path='/login to kaziCare' component={Login} />
          <Route path='/forgotPassword' component={ResetPassword} />
          <Route path='/recoverPassword' component={Recover} />
          <Route path='/register' component={Register} />
          <Route path='/lockScreen' component={LockScreen} />
          <Route path='/addAppointment' component={AddAppointment} />
          <Route path='/allAppointment' component={AppointmentList} />
          <Route path='/appointmentDetails' component={AppointmentDetails} />
         <Redirect to='/' />
        
     </Switch>
     <Footer/>
   </div>
  
    )
  }
}
