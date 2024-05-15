import React from 'react';
import 'C:/Users/ASUS/Desktop/web2-project-test-main/client/src/Components/Offers.css';
import restaurantImage from '../img/Screenshot 2024-04-26 191047.png';


function OfferCard() {
  return (

    <div className="card" id='CCaarrdd1122'>
      <div className="card-body" id='Card-Body10'>
        <div className="top-section" id='Top-section44'>
          <img src={restaurantImage} alt="Burger House" className="card-image" id='Card-image111' />
          <div className="card-title-text">
            <h5 className="card-title">Burger house</h5>
            <p className="card-text">restaurant</p>
          </div>
        </div>
        <div className="button-group">
          <a href="#" className="btn btn-primary" id='bbbtn33'>view profile</a>
          <a href="#" className="btn btn-primary" id='bbbtn33' >view offer</a>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
