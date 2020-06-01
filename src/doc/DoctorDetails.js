

import React, { Component } from 'react'

export default class DoctorDetails extends Component {
    render() {
        return (
            <div>
          <div className="content-wrapper">
  <div className="row">
 
    <div className="col-md-12 ">
      {/* add patient form elements */}
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title"> Doctor Details</h3>
        </div>
        {/* /.card-header */}
            <table  className="table table-bordered table-hover">
                <tbody>
                <tr>
                    <td><label>Name</label></td>
                    <td>Daniel Mensah</td>
                </tr>

                <tr>
                    <td><label>Date Of Birth</label></td>
                    <td>26-04-1996</td>
                </tr>

                <tr>
                    <td><label>Gender</label></td>
                    <td>Male</td>
                </tr>

                <tr>
                    <td><label>Address</label></td>
                    <td>Kosoa, Accra</td>
                </tr>

                <tr>
                    <td><label>Phone</label></td>
                    <td>054-276-4646</td>
                </tr>

                <tr>
                    <td><label>Email</label></td>
                    <td>danmen@gmail.com</td>
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
<div className='col md-10 '>
   <table className='table table-bordered table-hover' className='float-left'>
       <tr>
           <th>
   <div className='col md-4'> 
<span className="badge bg-success"><i className="fas fa-edit" /> Edit Patient</span> 
</div></th>
</tr>


<tr>
    <th>
        
<div className='col md-4'>
<span className="badge bg-danger">
<i className="fa fa-trash" />
                  
                 Delete Patient
</span>
</div>
    </th>
</tr>


<tr>
    <th>
<div className='col md-4'>
<span class="badge bg-primary">
<i className="fas fa-download" />
 Download File
</span>
</div></th>
</tr>
   </table>


</div>
   
            </tbody>

            

         </table>

   <div className='container'>         
<table className="table table-bordered table-hover">
    <h3>Patient Visits</h3>
    <hr/>
    <tbody>
       <tr> <th>Doctor Name</th>
        <th>Cost</th>
        <th>Visit Date</th>
        <th>Status</th></tr>

        <tr>
            <td>Akorfa</td>
            <td>GHc300</td>
            <td>12-05-2018</td>
            <td>Resheduled</td>
        </tr>

        <tr>
            <td>Paul Adjei</td>
            <td>GHc500</td>
            <td>12-01-2019</td>
            <td>Operation</td>
        </tr>

        <tr>
            <td>Akorfa</td>
            <td>GHc400</td>
            <td>8-05-2019</td>
            <td>Malaria</td>
        </tr>

        <tr>
            <td>Abena Osei</td>
            <td>GHc200</td>
            <td>12-05-2020</td>
            <td>Injury</td>
        </tr>
    </tbody>
</table>
</div>


     </div>
   
     </div>
            </div>
            </div>
            </div>
        )
    }
}
