import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class Menu extends Component {
    render() {
        return (
           <div>
  {/* Main Sidebar Container */}
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a  className="brand-link">
      <img src="dist/img/logo.png" alt="KaizCare" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light text-white">Kaiz Care</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/user1.jpg" className="img-circle elevation-2" alt="user" />
        </div>
        <div className="info">
          <a href="#" className="d-block">Bernice Owusu</a>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          <li className="nav-item has-treeview">
            <a href="/" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard

              </p>
            </a>

          </li>

          <li className="nav-item has-treeview">
            <a href="#" className="nav-link" id="dropdown">
              <i className="nav-icon fas fa-wheelchair" />
              <p>
                Patients
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to='/addPatientsForm' className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Add Patient</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to= "/PatientsListForm" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>All Patients</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link  to="/patientDetailsForm" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Patient Details</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/editPatientForm" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Edit Patient</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link" id="dropdown">
              <i className="nav-icon fa fa-user-md" />
              <p>
                Doctors
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="/addDoctorForm" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Add Doctor</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/allDoctorsForm" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>All Doctors</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/doctorDetailsForm" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Doctor Details</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/editdoctorForm" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p> Edit Doctor </p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link" id="dropdown">
              <i className="nav-icon far fa-edit" />
              <p>
                Appointments
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to ='/addAppointment' className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Add Appointment</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='' className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>All Appointments</p>
                </Link>
              </li>
              <li className="nav-item">
                <a href="#appointmentDetails" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Appointment Details</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#editAppointment" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Edit Appointment</p>
                </a>
              </li>


            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link" id="dropdown">
              <i className="nav-icon fas fa-dollar-sign" />
              <p>
                Payments
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="/addPayment" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Add Payment</p>
                </Link>
              </li>
              <li className="nav-item">
                <a href="#All Payments" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>All Payments</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#paymentInvoice" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Payment Invoice</p>
                </a>
              </li>

            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link" id="dropdown">
              <i className="nav-icon fas fa-key" />
              <p>
                Room Allotment
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="#Add Room Allotment Form" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Add Room Allotment</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#All Rooms" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>All Rooms</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#Edit Room Allotment" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Edit Room Allotment</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-header">Extras</li>
          <li className="nav-item">
            <a href="#pages/calendar.html" className="nav-link">
              <i className="nav-icon far fa-calendar-alt" />
              <p>
                Calendar
                <span className="badge badge-info right">2</span>
              </p>
            </a>
          </li>

          <li className="nav-item has-treeview">
            <a href="#" className="nav-link" id="dropdown">
              <i className="nav-icon far fa-envelope" />
              <p>
                Mailbox
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="#pages/mailbox/mailbox.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Inbox</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#pages/mailbox/compose.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Compose</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#pages/mailbox/read-mail.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Read</p>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item has-treeview">
            <a href="#" className="nav-link" id="dropdown">
              <i className="nav-icon far fa-plus-square" />
              <p>
                Settings
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to ='/login to kaziCare' className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Login</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/register' className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Register</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to ='/forgotPassword' className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Forgot Password</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/recoverPassword' className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Recover Password</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/lockScreen' className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Lockscreen</p>
                </Link>
              </li>




            </ul>
          </li>

        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}
