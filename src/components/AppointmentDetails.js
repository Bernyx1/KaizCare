import React, { Component } from 'react'

export default class AppointmentDetails extends Component {
    render() {
        return (
            <div>
                   <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title"> Appointment Details</h3>
        </div>
  
            <table  className="table table-bordered table-hover">
                <tbody>
                <tr>
                    <td><label>Patient ID</label></td>
                    <td>PT58</td>
                </tr>

                <tr>
                    <td><label>Department</label></td>
                    <td>Dental</td>
                </tr>

                <tr>
                    <td><label>Doctor Name</label></td>
                    <td>Dr Afriyie </td>
                </tr>

                <tr>
                    <td><label>Appointment Date</label></td>
                    <td>16-07-2019</td>
                </tr>

                <tr>
                    <td><label>Time Slot</label></td>
                    <td>10AM - 11AM</td>
                </tr>

                <tr>
                    <td><label>Token Number</label></td>
                    <td>27</td>
                </tr>

                <tr>
                    <td><label>Problem</label></td>
                    <td>Chest Pain</td>
                </tr>
                <div className='container' >
                    <div className='row'>
                    <ul className="row" >
        <li>
             <i className="far fa-download bg-danger" />
                  <p>csv</p>
    </li>
    <li >
    <i className="fa fa-print" />
                  <p>print</p>
    </li>
   <li>
    <i className="fas fa-file-pdf" />
                  <p>PDF</p>
    </li>
   <li>
    <i className="far fa-file-excel" />
                  <p>Excel</p>
    </li>
  
  </ul>

   </div>
</div>

   
            </tbody>

   </table>
            </div>
            </div>
        )
    }
}
