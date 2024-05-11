import './SignUpInfluencer.css'
import React from 'react'

const SignUpInfluencer=()=>{
    return(
     
        <>
       
        <div className='container'>

       
<div class="card" id="border-card">


  <div class="card-body">
  <form className="d-flex flex-column gap-4">
<div>
<div class="row g-3">
  <div class="col">
  <label for="Firstname" className="form-label" id="form-label">First Name</label>
    <input type="text" className="form-control" id="form-control"  placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
  <label for="aastname" className="form-label" id="form-label">Last Name</label>
    <input type="text" className="form-control"  id="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>

</div>
</div>

  <div className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label" id="form-label">Email</label>
    <input type="email" className="form-control" id="form-control"/>
  </div>
</div>

<div className="row g-3">

  <div className="col-md-6">
    <label for="inputPassword4" className="form-label" id="form-label">Password</label>
    <input type="password" className="form-control"  id="form-control"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label"id="form-label">Confirm Password</label>
    <input type="password" className="form-control"  id="form-control"/>
  </div>

</div>
  
<div className="row g-3">
<div className="col-md-3">
    <label for="inputCountryCode" className="form-label" id="form-label">Country Code</label>
    <select className="form-select" id="form-select">
      <option selected>Choose...</option>
      <option>+213</option>
      <option>+973</option>
      <option>+20</option>
      <option>+98</option>
      <option>+964</option>
      <option>+970</option>
      <option>+965</option>
      <option>+961</option>
      <option>+218</option>
      <option>+212</option>
      <option>+968</option>
      <option>+974</option>
      <option>+966</option>
      <option>+963</option>
      <option>+216</option>
      <option>+971</option>
      <option>+967</option>

    </select>
  </div>

  <div className="col-md-3">
    <label for="inputPhoneNumber" className="form-label"id="form-label">Phone Number</label>
    <input type="text" className="form-control"  id="form-control"/>
  </div>
  </div>



<div className="row g-3">
  <div className="col-md-2">
    <label for="inputCity" className="form-label"id="form-label">City</label>
    <input type="text" className="form-control"  id="form-control"/>
  </div>
  
  <div className="col-md-3">
    <label for="inputState" className="form-label"id="form-label">Country</label>
    <select id="form-select" className="form-select">
      <option selected>Choose...</option>
      <option>Algeria</option>
      <option>Bahrain</option>
      <option>Egypt</option>
      <option>Iran</option>
      <option>Palestine</option>
      <option>Jordan</option>
      <option>Kuwait</option>
      <option>Lebanon</option>
      <option>Libya</option>
      <option>Morocco</option>
      <option>Oman</option>
      <option>Qatar</option>
      <option>Saudi Arabia</option>
      <option>Syria</option>
      <option>Tunisia</option>
      <option>United Arab Emirates</option>
      <option>Yemen</option>
    
    </select>
  </div>

  <div className="col-md-2">
    <label for="inputZip" className="form-label"id="form-label">Zip</label>
    <input type="text" className="form-control" id="form-control"/>
  </div>
 
</div>

  <div className="col-12">
    <button type="submit" className="btn btn-primary" id="submit">SIGN UP</button>
  </div>

</form>
  </div>
</div>

</div>

        </>
    )
    }

export default SignUpInfluencer