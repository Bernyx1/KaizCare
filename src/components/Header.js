import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
           <div>
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
      </li>

    </ul>
  


    {/* Right navbar links */}
    <ul className="navbar-nav ml-auto">

             {/* Search Icon*/}
    <li className="nav-item">
        <a className="nav-link" id='search'  href="#" role="button"><i className="fas fa-search" /></a>
        
      </li>

          {/* Notifications Dropdown Menu */}
          <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="far fa-bell" />
          <span className="badge badge-warning navbar-badge">4</span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span className="dropdown-item dropdown-header bg-secondary"> Notifications</span>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-wheelchair mr-2" /> New Patient Added
            <span className="float-right text-muted text-sm">3 mins</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-dollar-sign mr-2" />Patient Payment done
            <span className="float-right text-muted text-sm">2 hours</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-file mr-2" />Patient Appointment booked
            <span className="float-right text-muted text-sm">6 hours</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
        </div>
      </li>


      {/* User Information Dropdown Menu */}
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="far fa-user-circle"  />
          </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span className="dropdown-item dropdown-header bg-secondary " >Bernice Owusu</span> 
                <div className='dropdown-divider'/>   
                <a href="#" className="dropdown-item">
            <i className="fas fa-cog mr-2 bg-primary"  /> Setting </a>
           
            <div className='dropdown-divider'/>   
                <a href="#" className="dropdown-item">
            <i className="fa fa-question-circle mr-2 bg-danger "  /> Help </a>
           
            <div className='dropdown-divider'/>   
                <a href="#" className="dropdown-item">
            <i className="fa fa-sign-out-alt mr-2 bg-primary"  /> Logout </a>
           
           
         </div>
         </li>

        
         
  
      <li className="nav-item">
        <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
          <i className="fas fa-th-large" />
        </a>
      </li>
    </ul>
  </nav> 
</div>

        )
    }
}

