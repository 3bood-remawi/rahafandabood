import React, { useState } from 'react'
import SignupPop from './SignPopup.css';


function SignPopup() {
  return (
    <div>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      {/* Modal */}
      <div className="modal fade" id="modalllL" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" id='modallll-Dialoooog-Centered'>
          <div className="modal-content" id='MMModal-CCCOontent'>
            <div className="modal-header" id='MMOOdal-HHEEAAader'>
              <h1 className="modal-title fs-5 text-center" id="modalTTTitle22">Signup</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" id='MMmodalLL-bBBOOody'>
              <div className="mb-3">
                <input type="text" className="form-control input-spacing" id="inputTTTttTTTT1212" placeholder="Name" />
                <input type="email" className="form-control input-spacing" id="inputTTTttTTTT1212" placeholder="Email Address" />
                <input type="password" className="form-control input-spacing" id="inputTTTttTTTT1212" placeholder="Password" />
                <input type="password" className="form-control input-spacing" id="inputTTTttTTTT1212" placeholder="Confirm Password" />
              </div>
            </div>
            <div className="modal-footer" id='MODELLLL-fOOOter'>
              <button type="button" className="btn btn-primary" id='BBBbbbTTTtttNNNNN1212'>Signup</button>
              <p id='texXXXXtTTTTttt1111'>Already have an account ? </p>
              <a href='#' id='texXXXXtTTTTttt2222'> Login </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignPopup;
