import React, {Component} from 'react'



export default class PatientsList extends Component {
    render() {
        return (
            <div>
             <div className="content-wrapper">


    
    <section className="content-header">
      <div className="container-fluid" className='bg-primary'>
        <div className="row mb-2">
          <div className="col-sm-6" >
            <h1>Patients List</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Patients List</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
<hr/>
  <section className='content'>
          <div className='row'>
              <div className='col-md-8 offset-2'>
                 Show
                  <input type='number'/> 
                  entries
              </div>
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
          <table  className="table table-bordered table-hover">
            <thead>
              <tr>
                <th><input type='checkbox'/></th>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Last Visit</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type='checkbox'/></td>
                <td>1</td>
                
                <td>Ama Mansah</td>
                <td> 24</td>
                <td>054-234-2345</td>
                <td>12-09-2019</td>
                <td></td>
              </tr>

              <tr>
                <td><input type='checkbox'/></td>
                <td>2</td>
                
                <td>Akosua Adjei</td>
                <td> 30</td>
                <td>054-888-2105</td>
                <td>12-01-2020</td>
                <td></td>
              </tr>

              <tr>
                <td><input type='checkbox'/></td>
                <td>3</td>
                
                <td>Yaw Maanu</td>
                <td> 25</td>
                <td>024-984-2905</td>
                <td>1-04-2019</td>
                <td></td>
              </tr>

              <tr>
                <td><input type='checkbox'/></td>
                <td>4</td>
                
                <td>Gifty Frimpong</td>
                <td> 64</td>
                <td>023-256-0005</td>
                <td>2-09-2018</td>
                <td></td>
              </tr>

              <tr>
                <td><input type='checkbox'/></td>
                <td>5</td>
                
                <td>Abena Akuffo</td>
                <td> 19</td>
                <td>057-204-9987</td>
                <td>23-08-2017</td>
                <td></td>
              </tr>

              <tr>
                <td><input type='checkbox'/></td>
                <td>6</td>
                
                <td>Stella Osei Armah</td>
                <td> 49</td>
                <td>020-202-0207</td>
                <td>23-02-2020</td>
                <td></td>
              </tr>

              <tr>
                <td><input type='checkbox'/></td>
                <td>7</td>
                
                <td>Joy Afriyie</td>
                <td> 41</td>
                <td>057-674-5687</td>
                <td>23-08-2019</td>
                <td></td>
              </tr>

              <tr>
                <td><input type='checkbox'/></td>
                <td>8</td>
                
                <td>Abena Yeboah Osei</td>
                <td> 57</td>
                <td>059-205-9187</td>
                <td>23-08-2020</td>
                <td></td>
              </tr>

              <tr>
                <td><input type='checkbox'/></td>
                <td>9</td>
                
                <td>Oforiwaa Benewaa Melody</td>
                <td> 23</td>
                <td>027-204-1437</td>
                <td>23-08-2017</td>
                <td></td>
              </tr>

              <tr>
                <td><input type='checkbox'/></td>
                <td>10</td>
                
                <td>Adjoa  Asantewaa</td>
                <td> 40</td>
                <td>023-104-7587</td>
                <td>3-05-2020</td>
                <td></td>
              </tr>


              </tbody>
             
          
          </table>
        </div>
       </div>
       </div>
       </div>
       </section>
 
 </div>
 </div>
        )}}