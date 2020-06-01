import React, { Component } from 'react'

export default class AppointmentList extends Component {
    render() {
        return (
            <div>
                            <div className="content-wrapper">


    
<section className="content-header">
  <div className="container-fluid" >
    <div className="row mb-2">
      <div className="col-sm-6" >
        <h1>Appointments List</h1>
      </div>
      <div className="col-sm-6">
        <ol className="breadcrumb float-sm-right">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active">Appointments List</li>
        </ol>
      </div>
    </div>
  </div>
</section>
<hr/>
<section className='content'>
      <div className='row'>
          <div className='col-md-8 offset-2'>
            
              
            Search
            <input type='text'/>
         
          </div>
         
      </div>
</section>
<section className="content">
<div className="row">
<div className="col-12">
  <div className="card">
   
   
    <div className="card-body">
      <table  className="table table-bordered table-striped">
        <thead>
          <tr>
            <th><input type='checkbox'/></th>
            <th> Appointment ID</th>
            <th>Patient ID </th>
           
            <th>Token Number</th>
            <th>Doctor Name</th>
            <th>Problem</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type='checkbox'/></td>
            <td>AP865</td>
            
            <td>P12Y</td>
            <td> 58</td>
            <td>Dr Ben</td>
            <td>Small Knee fracture</td>
            <td><span class="badge bg-success">Active</span></td>
          </tr>

          <tr>
            <td><input type='checkbox'/></td>
            <td>AP543</td>
            
            <td>P432</td>
            <td> 30</td>
            <td>Dr Nichole</td>
            <td>Fever</td>
            <td><span class="badge bg-success">Active</span></td>
          </tr>

          <tr>
            <td><input type='checkbox'/></td>
            <td>AP578</td>
            
            <td>P478</td>
            <td> 25</td>
            <td>Dr Bella</td>
            <td>Chest pain</td>
            <td><span class="badge bg-success">Active</span></td>
          </tr>

          <tr>
            <td><input type='checkbox'/></td>
            <td>AP674</td>
            
            <td>P783</td>
            <td> 64</td>
            <td>Dr Ama Ofori</td>
            <td>Chest Pain</td>
            <td><span class="badge bg-success">Active</span></td>
          </tr>

          <tr>
            <td><input type='checkbox'/></td>
            <td>AP786</td>
            
            <td>P56T</td>
            <td> 19</td>
            <td>Dr Adjei</td>
            <td>-</td>
            <td><span class="badge bg-warning">Pending</span></td>
          </tr>

          <tr>
            <td><input type='checkbox'/></td>
            <td>AP57</td>
            
            <td>Po678</td>
            <td> 49</td>
            <td>Br Yaw Ansah</td>
            <td>Injury</td>
            <td><span class="badge bg-warning">Pending</span></td>
          </tr>

        

          </tbody>
         

      
      </table>
      <div className="card-footer clearfix" className='float-right'>
<ul className="pagination pagination-sm m-0 float-left">
<li className="page-item"><a className="page-link" href="#">«</a></li>
<li className="page-item"><a className="page-link" href="#">1</a></li>
<li className="page-item"><a className="page-link" href="#">2</a></li>
<li className="page-item"><a className="page-link" href="#">3</a></li>
<li className="page-item"><a className="page-link" href="#">»</a></li>
</ul>

</div>


<div className='float-left'>
<ul className="pagination pagination-sm m-0 float-left">
<li className="page-item">
<i className="far fa-download bg-danger" />
              <p>csv</p>
</li>
<li className="page-item">
<i className="fa fa-print" />
              <p>print</p>
</li>
<li className="page-item">
<i className="fas fa-file-pdf" />
              <p>PDF</p>
</li>
<li className="page-item">
<i className="far fa-file-excel" />
              <p>Excel</p>
</li>

</ul>
</div>



    </div>
   </div>
   </div>
   </div>
   </section>

</div>

            </div>
        )
    }
}
