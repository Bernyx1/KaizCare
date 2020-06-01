import React, { Component } from 'react'

export default class DoctorsList extends Component {
    render() {
        return (
           
   <div>
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Doctors Contacts</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active"> Doctors Contacts</li>
            </ol>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>
    {/* Main content */}
    <section className="content">
      {/* Default box */}
      <div className="card card-solid">
        <div className="card-body pb-0">
          <div className="row d-flex align-items-stretch">
            <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
              <div className="card bg-light">
                <div className="card-header text-muted border-bottom-0">
                  KaziCare Doctors
                </div>
                <div className="card-body pt-0">
                  <div className="row">
                    <div className="col-7">
                      <h2 className="lead"><b>Nicole Pepprah</b></h2>
                      <p className="text-muted text-sm"><b>About: </b> Family Physician /  Nutritionist / Neurologist </p>
                      <ul className="ml-4 mb-0 fa-ul text-muted">
                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building" /></span> Address: Demo Street 123, Kasoa City </li>
                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone" /></span> Phone #: + 233 - 56- 12 28 52</li>
                      </ul>
                    </div>
                    <div className="col-5 text-center">
                      <img src='../images/doc.jpg' alt className="img-circle img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="text-right">
                    <a href="#" className="btn btn-sm bg-teal">
                      <i className="fas fa-comments" />
                    </a>
                    <a href="#" className="btn btn-sm btn-primary">
                      <i className="fas fa-user" /> View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
              <div className="card bg-light">
                <div className="card-header text-muted border-bottom-0">
                  KaziCare Doctors
                </div>
                <div className="card-body pt-0">
                  <div className="row">
                    <div className="col-7">
                      <h2 className="lead"><b>Nicole Pearson</b></h2>
                      <p className="text-muted text-sm"><b>About: </b> Radiologist / Anesthesiologist/ Oncologist </p>
                      <ul className="ml-4 mb-0 fa-ul text-muted">
                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building" /></span> Address: Akuffo Street 123, Banana Inn, East Legon</li>
                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone" /></span> Phone #: + 233 - 12 12 23 52</li>
                      </ul>
                    </div>
                    <div className="col-5 text-center">
                      <img src='../images/doc2.jpg' alt className="img-circle img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="text-right">
                    <a href="#" className="btn btn-sm bg-teal">
                      <i className="fas fa-comments" />
                    </a>
                    <a href="#" className="btn btn-sm btn-primary">
                      <i className="fas fa-user" /> View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
              <div className="card bg-light">
                <div className="card-header text-muted border-bottom-0">
                 KaziCare Doctors
                </div>
                <div className="card-body pt-0">
                  <div className="row">
                    <div className="col-7">
                      <h2 className="lead"><b>Nicole Pearson</b></h2>
                      <p className="text-muted text-sm"><b>About: </b> Cardiologist / Dermatologist/Nutrition </p>
                      <ul className="ml-4 mb-0 fa-ul text-muted">
                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building" /></span> Address: Odoom Street 123, Kaneshi,Accra</li>
                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone" /></span> Phone #: + 233- 12 12 23 52</li>
                      </ul>
                    </div>
                    <div className="col-5 text-center">
                      <img src='../images/doc3.jpg' alt className="img-circle img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="text-right">
                    <a href="#" className="btn btn-sm bg-teal">
                      <i className="fas fa-comments" />
                    </a>
                    <a href="#" className="btn btn-sm btn-primary">
                      <i className="fas fa-user" /> View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
              <div className="card bg-light">
                <div className="card-header text-muted border-bottom-0">
                 KaziCare Doctors
                </div>
                <div className="card-body pt-0">
                  <div className="row">
                    <div className="col-7">
                      <h2 className="lead"><b>Nicole Pearson</b></h2>
                      <p className="text-muted text-sm"><b>About: </b> Family Planning/ Physician / Oncologist </p>
                      <ul className="ml-4 mb-0 fa-ul text-muted">
                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building" /></span> Address: Action Street 123, Lapaz,Accra</li>
                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone" /></span> Phone #: + 344 - 12 12 23 52</li>
                      </ul>
                    </div>
                    <div className="col-5 text-center">
                      <img src="../images/doc.jpg" alt className="img-circle img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="text-right">
                    <a href="#" className="btn btn-sm bg-teal">
                      <i className="fas fa-comments" />
                    </a>
                    <a href="#" className="btn btn-sm btn-primary">
                      <i className="fas fa-user" /> View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
              <div className="card bg-light">
                <div className="card-header text-muted border-bottom-0">
                  KaziCare Doctors
                </div>
                <div className="card-body pt-0">
                  <div className="row">
                    <div className="col-7">
                      <h2 className="lead"><b>Nicole Pearson</b></h2>
                      <p className="text-muted text-sm"><b>About: </b> Family Planning/ Physician / Oncologist </p>
                      <ul className="ml-4 mb-0 fa-ul text-muted">
                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone" /></span> Phone #: + 800 - 12 12 23 52</li>
                      </ul>
                    </div>
                    <div className="col-5 text-center">
                      <img src="../../dist/img/user1-128x128.jpg" alt className="img-circle img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="text-right">
                    <a href="#" className="btn btn-sm bg-teal">
                      <i className="fas fa-comments" />
                    </a>
                    <a href="#" className="btn btn-sm btn-primary">
                      <i className="fas fa-user" /> View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
              <div className="card bg-light">
                <div className="card-header text-muted border-bottom-0">
                  Digital Strategist
                </div>
                <div className="card-body pt-0">
                  <div className="row">
                    <div className="col-7">
                      <h2 className="lead"><b>Nicole Pearson</b></h2>
                      <p className="text-muted text-sm"><b>About: </b> Cardiologist / Dermatologist/Nutrition </p>
                      <ul className="ml-4 mb-0 fa-ul text-muted">
                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building" /></span> Address: Taifa GyeNyame Street, Taifa,Accra</li>
                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone" /></span> Phone #: + 233 - 12 12 23 52</li>
                      </ul>
                    </div>
                    <div className="col-5 text-center">
                      <img src="../images/doc2.jpg" alt className="img-circle img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="text-right">
                    <a href="#" className="btn btn-sm bg-teal">
                      <i className="fas fa-comments" />
                    </a>
                    <a href="#" className="btn btn-sm btn-primary">
                      <i className="fas fa-user" /> View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
              <div className="card bg-light">
                <div className="card-header text-muted border-bottom-0">
                  KaziCare Doctors
                </div>
                <div className="card-body pt-0">
                  <div className="row">
                    <div className="col-7">
                      <h2 className="lead"><b>Nicole Pearson</b></h2>
                      <p className="text-muted text-sm"><b>About: </b>  Family Planning/ Physician / Oncologist</p>
                      <ul className="ml-4 mb-0 fa-ul text-muted">
                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building" /></span> Address:Adomic Down, Hatso</li>
                      </ul>
                    </div>
                    <div className="col-5 text-center">
                      <img src="../images/doc.jpg" alt className="img-circle img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="text-right">
                    <a href="#" className="btn btn-sm bg-teal">
                      <i className="fas fa-comments" />
                    </a>
                    <a href="#" className="btn btn-sm btn-primary">
                      <i className="fas fa-user" /> View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
              <div className="card bg-light">
                <div className="card-header text-muted border-bottom-0">
            KaziCare Doctors
                </div>
                <div className="card-body pt-0">
                  <div className="row">
                    <div className="col-7">
                      <h2 className="lead"><b>Nicole Pearson</b></h2>
                      <p className="text-muted text-sm"><b>About: </b> Family Planning/ Physician / Oncologist </p>
                      <ul className="ml-4 mb-0 fa-ul text-muted">
                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building" /></span> Address:Achimota Village Street 123, AchimotaCity 04312</li>
                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone" /></span> Phone #: + 233- 12 12 23 52</li>
                      </ul>
                    </div>
                    <div className="col-5 text-center">
                      <img src="../images/doc3.jpg" alt className="img-circle img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="text-right">
                    <a href="#" className="btn btn-sm bg-teal">
                      <i className="fas fa-comments" />
                    </a>
                    <a href="#" className="btn btn-sm btn-primary">
                      <i className="fas fa-user" /> View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
              <div className="card bg-light">
                <div className="card-header text-muted border-bottom-0">
                  KaziCare Doctors
                </div>
                <div className="card-body pt-0">
                  <div className="row">
                    <div className="col-7">
                      <h2 className="lead"><b>Nicole Pearson</b></h2>
                      <p className="text-muted text-sm"><b>About: </b> Family Planning/ Physician / Oncologist </p>
                      <ul className="ml-4 mb-0 fa-ul text-muted">
                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building" /></span> Address:  Amasaman Nungua 04312, Eastern</li>
                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone" /></span> Phone #: + 344 - 12 12 23 52</li>
                      </ul>
                    </div>
                    <div className="col-5 text-center">
                      <img src="../../dist/img/user2-160x160.jpg" alt className="img-circle img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="text-right">
                    <a href="#" className="btn btn-sm bg-teal">
                      <i className="fas fa-comments" />
                    </a>
                    <a href="#" className="btn btn-sm btn-primary">
                      <i className="fas fa-user" /> View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.card-body */}
        <div className="card-footer">
          <nav aria-label="Contacts Page Navigation">
            <ul className="pagination justify-content-center m-0">
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">4</a></li>
              <li className="page-item"><a className="page-link" href="#">5</a></li>
              <li className="page-item"><a className="page-link" href="#">6</a></li>
              <li className="page-item"><a className="page-link" href="#">7</a></li>
              <li className="page-item"><a className="page-link" href="#">8</a></li>
            </ul>
          </nav>
        </div>
        {/* /.card-footer */}
      </div>
      {/* /.card */}
    </section>
    {/* /.content */}
  </div>

</div>
        )}}
