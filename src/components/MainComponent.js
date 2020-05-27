import React, { Component } from 'react'
import AddPatientsForm from './AddPatientsForm'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import Dashboard from './Dashboard'
import {Switch, Route, Redirect} from 'react-router-dom'


export default class MainComponent extends Component {
  render() {
    return (
   
      <div>
     <Header/>
     <Menu/>
     <Dashboard/>
     <Switch>
         <Route path='/addPatientsForm' component={AddPatientsForm} />
         <Redirect to='/#'/>
     </Switch>
     <Footer/>
   </div>
  
    )
  }
}
