import React from 'react';
import './file.css';

function Signupbrand () {
  return (
    <form className="forms">
      <div className="mb-3">
        <label htmlFor="disabledTextInput" className="form-label">Brand Name</label>
        <input type="text" id="disabledTextInput" className="form-control custom-input" placeholder="Caramale / chocolate" />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control custom-input" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div className="row g-3 align-items-center">
          <div className="col-auto"></div>
        </div>

        <div className="row">
          <div className="col">
            <label>Password</label>
            <input type="password" className="form-control custom-input" placeholder="Password" aria-label="Password" />
          </div>
          <div className="col">
            <label>Confirm Password</label>
            <input type="password" className="form-control custom-input" placeholder="Confirm Password" aria-label="Confirm Password" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Country code</label>
            <select className="form-select custom-select" id="floatingSelectGrid">
              <option>Ps(+970)</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
          </div>
          <div className="col">
            <label>Phone number</label>
            <input type="text" className="form-control custom-input" placeholder="Phone number" aria-label="Phone number" />
          </div>
        </div>
        <div className="row">
        <div className="col">
          <label htmlFor="cityInput">City</label>
          <input type="text" id="cityInput" className="form-control custom-input" placeholder="City" />
        </div>
        <div className="col">
          <label htmlFor="stateInput">State</label>
          <input type="text" id="stateInput" className="form-control custom-input" placeholder="State" />
        </div>
        <div className="col">
          <label htmlFor="countrySelect">Country</label>
          <select id="countrySelect" className="form-select custom-select">
            <option value="ps">Palestine</option>
           
          </select>
        </div>
      </div>

        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">Category</label>
          <input type="text" className="form-control custom-input" id="formGroupExampleInput" />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">The number of followers of the company</label>
          <input type="text" className="form-control custom-input" id="formGroupExampleInput2" />
        </div>

        <div>
        <p className="terms-text">
        By entering your information you agree to the
        <a href="URL_TO_TERMS" className="terms-link"> Terms Of Service </a>
        &amp;
        <a href="URL_TO_PRIVACY" className="terms-link"> Privacy Policy </a>.
        <span className="terms-highlight"> Our Promise to you : </span>
        your information will always remain SECURE using javascript
        and data security best-practices. We will NEVER rent or sell access to your address/contact information!
      </p>
        </div>
      </div>
      <div className="form-buttons">
        <button type="button" className="btn back">Back</button>
        <button type="button" className="btn confirm">Confirm</button>
      </div>
    </form>
  );
}

export default Signupbrand;
