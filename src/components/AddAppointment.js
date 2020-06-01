import React, { Component } from 'react'

export default class AddAppointment extends Component {
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
              <label >Patient ID</label>
              <input type="text" className="form-control"  placeholder="Patient ID" />
            </div>
            <div className="form-group">
              <label> Department</label>
           <select>
               <option>Neuro</option>
               <option>Ortho</option>
               <option>General</option>
           </select>
            </div>

            <div className="form-group">
              <label> Doctor Name</label>
              <input type="text" className="form-control" placeholder='Doctor Name'  />
            </div>
            <div className="form-group">
              <label >Appointment Date</label>
              <input type="date" className="form-control"   />
            </div>
            
            <div className="form-group">
              <label> Time Slot</label>
           <select>
               <option>10AM - 11AM</option>
               <option>11AM - 12PM</option>
               <option>12PM - 1PM</option>
               <option>1PM - 2PM</option>
               <option>2PM - 3PM</option>
               <option>3PM - 4PM</option>
               <option>4PM - 5PM</option>
           </select>
            </div>


            <div className="form-group">
              <label >Token Number</label>
              <input type="text" className="form-control" placeholder='Token Number'  />
            </div>
            


            <div className="form-group">
              <label >Problem</label><br></br>
            <textarea placeholder='Problem'></textarea>
            </div>
         
            <div className="form-check">
              <input type="checkbox" className="form-check-input"  />
              <label className="form-check-label" >Please Confirm</label>
            </div>
          </div>
          {/* /.card-body */}
          <div className="card-footer">
            <button type="submit" className="btn btn-danger">Submit</button>
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
