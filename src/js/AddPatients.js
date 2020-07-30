

import React, { Component } from 'react'

export default class AddPatients extends Component {
    render() {
        return (
          <div>
          <div className="content-wrapper">
  <div className="row">
 
    <div className="col-md-12 ">
      {/* add patient form elements */}
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">Add Patient</h3>
        </div>
        {/* /.card-header */}
        {/* form start */}
        <form role="form">
          <div className="card-body">
            <div className="form-group">
              <label >Patient Name</label>
              <input type="text" className="form-control"  placeholder="Patient Name" />
            </div>
            <div className="form-group">
              <label >Date Of Birth</label>
              <input type="date" className="form-control"   />
            </div>
            <div className="form-group">
              <label> Age</label>
              <input type="number" className="form-control"   />
            </div>
            <div className="form-group">
              <label >Phone</label>
              <input type="tel" className="form-control" placeholder='Phone'  />
            </div>

            <div className="form-group">
              <label >Email</label>
              <input type="email" className="form-control" placeholder='Email'  />
            </div>
            <div className="form-group">
              <label >Gender</label>
              <input type="radio"  name='gender' value='Male'  />Male
              <input type="radio" name='gender' value='Female'  />Female
            </div>


            <div className="form-group">
              <label >Address</label><br></br>
            <textarea placeholder='Address'></textarea>
            </div>
            <div className="form-group">
              <label >File input</label>
              <div className="input-group">
                <div className="custom-file">
                  <input type="file" className="custom-file-input"  />
                  <label className="custom-file-label" >Choose file</label>
                </div>
                <div className="input-group-append">
                  <span className="input-group-text" id>Upload</span>
                </div>
              </div>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input"  />
              <label className="form-check-label" >Please Confirm</label>
            </div>
          </div>
          {/* /.card-body */}
          <div className="card-footer">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
   
     </div>
            </div>
            </div>
            </div>
       
        )
    }
}
