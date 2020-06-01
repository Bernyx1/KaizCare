import React, { Component } from 'react'

export default class LockScreen extends Component {
    render() {
        return (
 <div>
  <div>
    <div className="lockscreen-wrapper">
      <div className="lockscreen-logo">
       <p>KaziCare</p>
      </div>
      {/* User name */}
      <div className="lockscreen-name">John Doe</div>
      {/* START LOCK SCREEN ITEM */}
      <div className="lockscreen-item">
        {/* lockscreen image */}
        <div className="lockscreen-image">
          <img src="../../dist/images/doc2.jpg" alt="User Image" />
        </div>
        {/* /.lockscreen-image */}
        {/* lockscreen credentials (contains the form) */}
        <form className="lockscreen-credentials">
          <div className="input-group">
            <input type="password" className="form-control" placeholder="password" />
            <div className="input-group-append">
              <button type="button" className="btn"><i className="fas fa-arrow-right text-muted" /></button>
            </div>
          </div>
        </form>
        {/* /.lockscreen credentials */}
      </div>
      {/* /.lockscreen-item */}
      <div className="help-block text-center">
        Enter your password to retrieve your session
      </div>
      <div className="text-center">
        <a href='#'>Or sign in as a different user</a>
      </div>
     
    </div>
  </div>
 
</div>
        )}}
