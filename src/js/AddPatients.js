

import React, { Component } from 'react'

export default class AddPatients extends Component {
    render() {
        return (
            <div>
          <div className="container-fluid">
  <div className="row">
    {/* left column */}
    <div className="col-md-6">
      {/* general form elements */}
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">Add Patient</h3>
        </div>
        {/* /.card-header */}
        {/* form start */}
        <form role="form">
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputFile">File input</label>
              <div className="input-group">
                <div className="custom-file">
                  <input type="file" className="custom-file-input" id="exampleInputFile" />
                  <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                </div>
                <div className="input-group-append">
                  <span className="input-group-text" id>Upload</span>
                </div>
              </div>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
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
