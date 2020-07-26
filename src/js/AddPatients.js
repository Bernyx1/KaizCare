

import React, { Component } from 'react'

export default class AddPatients extends Component {
    render() {
        return (
            <div className='content-wrapper'>
          
              <div className="card card-primary">
                <div className="card-header">
                   <h3 className="card-title">Patient Registration Form </h3>
                 </div>
              </div>

 <div>
        <form role="form">
          <div className="card-body">
          <div className='row'>
              <div className='col'>
                  <div className="form-group">
                      <label >Surname</label>
                      <input type="text" className="form-control"  placeholder="Surname" />
                </div>

                    <div className="form-group">
                        <label >First Name</label>
                        <input type="text" className="form-control"  placeholder="First Name" />
                </div>

                  <div className="form-group">
                    <label >Other Names</label>
                    <input type="text" className="form-control"  placeholder="Other Names" />
              </div>

                  <div className="form-group">
                      <label >Date Of Birth</label>
                    <input type="date" className="form-control"   />
                </div>

                  <div className="form-group">
                      <label > Gender: </label>
                      <select>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
              </div>
              <div className="form-group">
                      <label > Title </label>
                      <select>
                        <option>Mr.</option>
                        <option>Mrs.</option>
                        <option>Miss</option>
                      </select>
              </div>
              </div>

            <div className='col'>
            <div className="form-group">
                      <label > Marital Status </label>
                      <select>
                        <option>Married</option>
                        <option>Single</option>
                        <option>Divorced</option>
                        <option>Widow</option>
                      </select>
              </div> 
              <div className="form-group">
                      <label >Occupation</label>
                    <input type="text" className="form-control"   />
                </div> 

                <div className="form-group">
                      <label > Nationality </label>
                      <select>
                        <option>Ghanaian</option>
                        <option>Non Ghanaian</option>
                        
                      </select>
              </div> 

              <div className="form-group">
                      <label > Religion </label>
                      <select>
                        <option>Christianity</option>
                        <option>Islam</option>
                        <option>Traditional</option>
                        <option>Other</option>
                      </select>
              </div> 

            </div>

           

          {/* <div className="card-footer">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div> */}

          </div>
          </div>
        </form>
    
        </div>
            
           </div>
         
        )
    }
}
