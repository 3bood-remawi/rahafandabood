import './ContactUs.css'
import React from "react"
import image from "./photo-1486312338219-ce68d2c6f44d.avif"
import Footer from '../Footer/Footer'
const ContactUs = () => {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary ">
<div className="container">


  <div className="navbar-brand" id="InfluenBlend" >InfluenBlend</div>

  <div className="collapse navbar-collapse" id="taps">
   <ul className="nav nav-underline"  >
<li className="nav-item" id="nav-itemmm">
  <a className="nav-link "  id="nav-link" aria-current="page" href="#">Home</a>
</li>
<li className="nav-item"  id="nav-itemmm">
  <a className="nav-link"  id="nav-link" href="#">About</a>
</li>
<li className="nav-item"  id="nav-itemmm">
  <a className="nav-link" id="nav-link" href="#">Contact</a>
</li>
 <li className="nav-item"  id="nav-itemmm">
  <a className="nav-link"  id="nav-link" href="#">Blog</a>
</li>
</ul>
<button type="button" className="btn btn-outline-secondary" id="logout"> <i className="bi bi-box-arrow-right"></i>

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" id="icone" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
<path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg>
</button>
   

    <button type="button" className="btn btn-dark" id=" navbtnn">JOIN AS BRAND</button>

    <button type="button" className="btn btn-secondary" id="navbtn">JOIN AS CREATOR</button>
</div>
</div>

</nav> */}


      <div className="card" id=" header">
        <img src={image}
          className="card-img" id="header-image" alt="" />
        <div className="card-img-overlay">
          <h1 className="contact-us justify-content-center ">CONTACT US</h1>
        </div>
      </div>






       <div className="box" id="boxes">
      <div>
        <label for="Default input" className="form-label" >First Name</label>
        <input className="form-control" id="form-control1" type="text" placeholder="first name" aria-label="default input example"></input>

        <label for="Default input" className="form-label">Last Name</label>
        <input className="form-control" id="form-control2" type="text" placeholder="last name" aria-label="default input example"></input>

        <div class="mb-1">
          <label for="exampleFormControlInput1" className="form-label">E-mail</label>
          <input type="email" className="form-control" id="form-control3" placeholder="name@example.com" />
        </div>
        </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label ">LEAVE A MESSAGE FOR US</label>
            <textarea className="form-control " id="form-control4" placeholder="" rows="7"></textarea>
            <button class="btn btn-primary" type="submit" id="contactussubmit">SUBMIT</button>
          </div>
         
      </div> 






      <Footer />

    </>
  )
}


export default ContactUs